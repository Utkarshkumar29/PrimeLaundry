'use client';

import { useEffect } from 'react';

export function useBubbleCursor() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      pointer-events: none;
      z-index: 99999;
    `;
    document.body.appendChild(canvas);
    document.body.style.cursor = 'none';

    const ctx = canvas.getContext('2d')!;
    let mx = -999, my = -999;
    let cx = -999, cy = -999;
    let raf: number;

    interface TrailPoint { x: number; y: number; age: number; r: number; }
    let trail: TrailPoint[] = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cx < 0) { cx = mx; cy = my; }
      trail.push({ x: mx, y: my, age: 0, r: 5 + Math.random() * 9 });
      if (trail.length > 35) trail.shift();
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', () => { mx = -999; my = -999; });

    const drawBubble = (x: number, y: number, r: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;

      const body = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.04, x, y, r);
      body.addColorStop(0, 'rgba(255,255,255,0.52)');
      body.addColorStop(0.25, 'rgba(180,220,255,0.18)');
      body.addColorStop(0.7, 'rgba(100,180,255,0.07)');
      body.addColorStop(1, 'rgba(80,140,240,0.2)');
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();

      const irid = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
      irid.addColorStop(0, 'rgba(180,100,255,0.1)');
      irid.addColorStop(0.35, 'rgba(80,210,220,0.09)');
      irid.addColorStop(0.7, 'rgba(255,160,80,0.07)');
      irid.addColorStop(1, 'rgba(100,230,180,0.1)');
      ctx.fillStyle = irid;
      ctx.fill();

      ctx.strokeStyle = 'rgba(120,170,255,0.65)';
      ctx.lineWidth = 1;
      ctx.stroke();

      const shine = ctx.createRadialGradient(
        x - r * 0.28, y - r * 0.33, 0,
        x - r * 0.28, y - r * 0.33, r * 0.36
      );
      shine.addColorStop(0, 'rgba(255,255,255,0.75)');
      shine.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(x - r * 0.28, y - r * 0.33, r * 0.36, 0, Math.PI * 2);
      ctx.fillStyle = shine;
      ctx.fill();

      const bot = ctx.createRadialGradient(x + r * 0.2, y + r * 0.55, 0, x + r * 0.2, y + r * 0.55, r * 0.2);
      bot.addColorStop(0, 'rgba(200,230,255,0.35)');
      bot.addColorStop(1, 'rgba(200,230,255,0)');
      ctx.beginPath();
      ctx.arc(x + r * 0.2, y + r * 0.55, r * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = bot;
      ctx.fill();

      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follow — lower = slower/floatier
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;

      trail.forEach((t, i) => {
        const alpha = (1 - t.age / 50) * (i / trail.length) * 0.75;
        if (alpha > 0.01) drawBubble(t.x, t.y, t.r, alpha);
        t.age++;
      });
      trail = trail.filter(t => t.age < 50);

      if (mx > 0) {
        drawBubble(cx, cy, 20, 0.9);
      }

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      canvas.remove();
      document.body.style.cursor = '';
    };
  }, []);
}