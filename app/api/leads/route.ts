// app/api/leads/route.ts

import { NextResponse } from 'next/server';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyarxEU1F-aj6052dA0g4Uqd8FhZ2mVOm1oelofvjrTE4IIi2jdJibHspivJlBVYjQusA/exec';

export async function GET() {
  try {
    // Google Apps Script always redirects to the final exec URL.
    // Node fetch follows redirects by default but needs these headers
    // to get JSON back instead of a login/HTML page.
    const res = await fetch(SCRIPT_URL, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'Mozilla/5.0',
      },
      cache: 'no-store',
    });

    const text = await res.text();

    // Guard: if Google returned HTML instead of JSON, surface a clear error
    if (text.trimStart().startsWith('<')) {
      console.error('[leads] Google Script returned HTML — check the script is deployed as "Anyone" can access:\n', text.slice(0, 300));
      return NextResponse.json(
        { error: 'Google Script returned HTML. Make sure the deployment is set to "Anyone" (no sign-in required).' },
        { status: 502 }
      );
    }

    const data = JSON.parse(text);

    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'no-store' },
    });

  } catch (err: any) {
    console.error('[leads] fetch error:', err);
    return NextResponse.json(
      { error: err?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}