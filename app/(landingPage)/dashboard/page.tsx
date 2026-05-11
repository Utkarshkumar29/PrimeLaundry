'use client';

import { useState, useEffect, useCallback } from 'react';

/* ── Brand tokens ── */
const BLUE  = '#10549c';
const BD    = '#0b3d7a';
const NAVY  = '#061830';
const GREEN = '#44b24c';
const GDARK = '#2d9e36';
const CREAM = '#f7f5f0';

// ✅ Calls our own API route (server-side proxy) — no CORS error
const SCRIPT_URL = '/api/leads';

/* ── Types ── */
interface Lead {
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  investment: string;
  message: string;
  source: string;
}

/* ── Helpers ── */
function formatDate(ts: string) {
  if (!ts) return '—';
  const d = new Date(ts);
  return isNaN(d.getTime())
    ? ts
    : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatTime(ts: string) {
  if (!ts) return '';
  const d = new Date(ts);
  return isNaN(d.getTime())
    ? ''
    : d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}
function investmentBadge(inv: string) {
  if (!inv) {
    return {
      label: '—',
      color: '#94a3b8',
      bg: '#f1f5f9'
    };
  }

  // Elite plans
  if (
    inv.includes('Elite') ||
    inv.includes('35') ||
    inv.includes('45')
  ) {
    return {
      label: 'Elite',
      color: GREEN,
      bg: 'rgba(68,178,76,0.1)'
    };
  }

  // Everything else = Basic
  return {
    label: 'Basic',
    color: BLUE,
    bg: 'rgba(16,84,156,0.1)'
  };
}

function sourceLabel(src: string) {
  if (!src) return '—';
  return src.replace('/', '').replace(/([A-Z])/g, ' $1').trim() || src;
}

/* ── Stat card ── */
function StatCard({ label, value, sub, accent }: { label: string; value: string | number; sub?: string; accent?: string }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 20,
      border: '1.5px solid #e8edf5',
      padding: '24px 22px',
      boxShadow: '0 2px 16px rgba(11,61,122,0.06)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: accent || `linear-gradient(90deg, ${GREEN}, ${BLUE})`,
      }} />
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#94a3b8', marginBottom: 8,
      }}>{label}</p>
      <p style={{
        fontFamily: "'Fraunces', serif", fontWeight: 900,
        fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: BD,
        lineHeight: 1, marginBottom: 4,
      }}>{value}</p>
      {sub && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b' }}>{sub}</p>}
    </div>
  );
}

/* ── Main dashboard ── */
export default function Dashboard() {
  const [leads, setLeads]       = useState<Lead[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');
  const [search, setSearch]     = useState('');
  const [filterInv, setFilterInv] = useState('All');
  const [filterSrc, setFilterSrc] = useState('All');
  const [sortField, setSortField] = useState<keyof Lead>('timestamp');
  const [sortDir, setSortDir]   = useState<'asc' | 'desc'>('desc');
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const res  = await fetch(SCRIPT_URL);
      const json = await res.json();
      // Support both array-of-arrays and array-of-objects
      let rows: Lead[] = [];
      if (Array.isArray(json)) {
        if (json.length > 0 && Array.isArray(json[0])) {
          // Skip header row
          rows = json.slice(1).map((r: string[]) => ({
            timestamp:  r[0] || '',
            name:       r[1] || '',
            phone:      r[2] || '',
            email:      r[3] || '',
            city:       r[4] || '',
            investment: r[5] || '',
            message:    r[6] || '',
            source:     r[7] || '',
          }));
        } else {
          rows = json.map((r: any) => ({
            timestamp:  r.Timestamp  || r.timestamp  || '',
            name:       r.Name       || r.name       || '',
            phone:      r.Phone      || r.phone      || '',
            email:      r.Email      || r.email      || '',
            city:       r.City       || r.city       || '',
            investment: r.Investment || r.investment || '',
            message:    r.Message    || r.message    || '',
            source:     r.Source     || r.source     || '',
          }));
        }
      }
      setLeads(rows.filter(r => r.name || r.phone));
      setLastRefresh(new Date());
    } catch (e: any) {
      setError('Failed to load data. Check your internet connection or script URL.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  /* Derived */
  const invOptions = ['All', ...Array.from(new Set(leads.map(l => investmentBadge(l.investment).label).filter(x => x !== '—')))];
  const srcOptions = ['All', ...Array.from(new Set(leads.map(l => sourceLabel(l.source)).filter(x => x !== '—')))];

  const filtered = leads
    .filter(l => {
      const q = search.toLowerCase();
      const matchQ = !q || [l.name, l.phone, l.email, l.city, l.investment].some(v => v.toLowerCase().includes(q));
      const matchI = filterInv === 'All' || investmentBadge(l.investment).label === filterInv;
      const matchS = filterSrc === 'All' || sourceLabel(l.source) === filterSrc;
      return matchQ && matchI && matchS;
    })
    .sort((a, b) => {
      const av = a[sortField] || '', bv = b[sortField] || '';
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
    });

  const totalLeads   = leads.length;
  const eliteLeads   = leads.filter(l => investmentBadge(l.investment).label === 'Elite').length;
  const basicLeads   = leads.filter(l => investmentBadge(l.investment).label === 'Basic').length;
  const cities       = new Set(leads.map(l => l.city).filter(Boolean)).size;

  const today        = new Date().toDateString();
  const todayLeads   = leads.filter(l => new Date(l.timestamp).toDateString() === today).length;

  function toggleSort(field: keyof Lead) {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDir('desc'); }
  }

  const SortIcon = ({ field }: { field: keyof Lead }) => (
    <span style={{ marginLeft: 4, opacity: sortField === field ? 1 : 0.3, fontSize: 10 }}>
      {sortField === field ? (sortDir === 'asc' ? '▲' : '▼') : '▲'}
    </span>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${CREAM}; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        .th-btn { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: #64748b; white-space: nowrap; display: flex; align-items: center; }
        .th-btn:hover { color: ${BLUE}; }
        .row-hover:hover { background: rgba(16,84,156,0.03) !important; }
        .filter-btn { padding: 7px 14px; border-radius: 100px; border: 1.5px solid #e2e8f0;
          background: #fff; cursor: pointer; font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600; color: #64748b; transition: all 0.18s; white-space: nowrap; }
        .filter-btn:hover { border-color: ${BLUE}; color: ${BLUE}; }
        .filter-btn.active { background: ${BLUE}; border-color: ${BLUE}; color: #fff; }
        .filter-btn.active-green { background: ${GREEN}; border-color: ${GREEN}; color: #fff; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.5s ease forwards; }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: CREAM,
        fontFamily: "'Inter', sans-serif",
      }}>

        {/* ── HEADER ── */}
        <div style={{
          background: `linear-gradient(160deg, ${BD} 0%, ${NAVY} 100%)`,
          padding: '0 32px',
          position: 'sticky', top: 0, zIndex: 50,
          boxShadow: '0 2px 20px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            maxWidth: 1400, margin: '0 auto',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* Logo mark */}
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `linear-gradient(135deg, ${GREEN}, ${GDARK})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 900, color: '#fff',
                fontFamily: "'Fraunces', serif",
              }}>P</div>
              <div>
                <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 16, color: '#fff', lineHeight: 1.1 }}>
                  Prime Laundry
                </p>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Franchise Leads Dashboard
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {lastRefresh && (
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif" }}>
                  Updated {lastRefresh.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
              <button
                onClick={fetchData}
                disabled={loading}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  color: '#fff', cursor: loading ? 'wait' : 'pointer',
                  fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13,
                  transition: 'all 0.2s',
                }}
              >
                <span style={{
                  display: 'inline-block',
                  animation: loading ? 'spin 0.8s linear infinite' : 'none',
                  fontSize: 14,
                }}>↻</span>
                {loading ? 'Loading…' : 'Refresh'}
              </button>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 24px' }}>

          {/* ── ERROR ── */}
          {error && (
            <div style={{
              background: '#fff1f1', border: '1.5px solid #fca5a5',
              borderRadius: 14, padding: '16px 20px', marginBottom: 24,
              color: '#dc2626', fontFamily: "'Inter', sans-serif", fontSize: 14,
            }}>
              ⚠ {error}
            </div>
          )}

          {/* ── STAT CARDS ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16, marginBottom: 28,
          }}>
            <StatCard
              label="Total Leads"
              value={loading ? '…' : totalLeads}
              sub="All time"
              accent={`linear-gradient(90deg, ${BLUE}, ${BD})`}
            />
            <StatCard
              label="Today"
              value={loading ? '…' : todayLeads}
              sub="New enquiries"
              accent={`linear-gradient(90deg, ${GREEN}, ${GDARK})`}
            />
            <StatCard
              label="Prime Elite"
              value={loading ? '…' : eliteLeads}
              sub="High value leads"
              accent={`linear-gradient(90deg, ${GREEN}, ${GDARK})`}
            />
            <StatCard
              label="Prime Basic"
              value={loading ? '…' : basicLeads}
              sub="Standard leads"
              accent={`linear-gradient(90deg, ${BLUE}, ${BD})`}
            />
            <StatCard
              label="Cities"
              value={loading ? '…' : cities}
              sub="Unique locations"
              accent={`linear-gradient(90deg, #f59e0b, #d97706)`}
            />
          </div>

          {/* ── FILTERS + SEARCH ── */}
          <div style={{
            background: '#fff', borderRadius: 20,
            border: '1.5px solid #e8edf5',
            padding: '20px 24px', marginBottom: 20,
            boxShadow: '0 2px 16px rgba(11,61,122,0.05)',
          }}>
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              gap: 12, alignItems: 'center',
            }}>
              {/* Search */}
              <div style={{ position: 'relative', flex: '1 1 240px', minWidth: 200 }}>
                <span style={{
                  position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                  color: '#94a3b8', fontSize: 14, pointerEvents: 'none',
                }}>🔍</span>
                <input
                  type="text"
                  placeholder="Search by name, city, phone, email…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{
                    width: '100%', paddingLeft: 38, paddingRight: 14,
                    paddingTop: 10, paddingBottom: 10,
                    border: '1.5px solid #e2e8f0', borderRadius: 100,
                    fontFamily: "'Inter', sans-serif", fontSize: 14,
                    color: BD, background: '#f8fafc',
                    outline: 'none', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = BLUE}
                  onBlur={e  => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              {/* Investment filter */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {invOptions.map(opt => (
                  <button
                    key={opt}
                    className={`filter-btn${filterInv === opt ? (opt === 'Elite' ? ' active-green' : ' active') : ''}`}
                    onClick={() => setFilterInv(opt)}
                  >{opt}</button>
                ))}
              </div>

              {/* Source filter */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {srcOptions.map(opt => (
                  <button
                    key={opt}
                    className={`filter-btn${filterSrc === opt ? ' active' : ''}`}
                    onClick={() => setFilterSrc(opt)}
                  >{opt === 'All' ? 'All Sources' : opt}</button>
                ))}
              </div>

              {/* Count */}
              <span style={{
                marginLeft: 'auto', fontSize: 13, color: '#64748b',
                fontFamily: "'Inter', sans-serif", whiteSpace: 'nowrap',
              }}>
                {filtered.length} of {totalLeads} leads
              </span>
            </div>
          </div>

          {/* ── TABLE ── */}
          <div style={{
            background: '#fff', borderRadius: 20,
            border: '1.5px solid #e8edf5',
            overflow: 'hidden',
            boxShadow: '0 2px 20px rgba(11,61,122,0.06)',
          }}>
            {loading ? (
              <div style={{
                padding: '80px 32px', textAlign: 'center',
                color: '#94a3b8', fontFamily: "'Inter', sans-serif",
              }}>
                <div style={{
                  width: 40, height: 40, border: `3px solid #e2e8f0`,
                  borderTopColor: BLUE, borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                  margin: '0 auto 16px',
                }} />
                <p style={{ fontSize: 15 }}>Fetching leads from Google Sheets…</p>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{
                padding: '80px 32px', textAlign: 'center',
                color: '#94a3b8', fontFamily: "'Inter', sans-serif",
              }}>
                <p style={{ fontSize: 32, marginBottom: 12 }}>🔍</p>
                <p style={{ fontSize: 16, fontWeight: 600 }}>No leads found</p>
                <p style={{ fontSize: 14, marginTop: 4 }}>Try adjusting your search or filters</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 900 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e8edf5' }}>
                      {[
                        { label: 'Date',       field: 'timestamp'  as keyof Lead },
                        { label: 'Name',       field: 'name'       as keyof Lead },
                        { label: 'Phone',      field: 'phone'      as keyof Lead },
                        { label: 'Email',      field: 'email'      as keyof Lead },
                        { label: 'City',       field: 'city'       as keyof Lead },
                        { label: 'Model',      field: 'investment' as keyof Lead },
                        { label: 'Source',     field: 'source'     as keyof Lead },
                        { label: 'Message',    field: 'message'    as keyof Lead },
                      ].map(({ label, field }) => (
                        <th key={field} style={{ padding: '14px 16px', textAlign: 'left' }}>
                          <button className="th-btn" onClick={() => toggleSort(field)}>
                            {label}<SortIcon field={field} />
                          </button>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((lead, i) => {
                      const badge = investmentBadge(lead.investment);
                      return (
                        <tr
                          key={i}
                          className="row-hover fade-in"
                          style={{
                            borderBottom: '1px solid #f1f5f9',
                            animationDelay: `${Math.min(i * 30, 300)}ms`,
                            animationFillMode: 'both',
                          }}
                        >
                          {/* Date */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                            <p style={{ fontSize: 13, fontWeight: 600, color: BD, whiteSpace: 'nowrap' }}>
                              {formatDate(lead.timestamp)}
                            </p>
                            <p style={{ fontSize: 11, color: '#94a3b8' }}>
                              {formatTime(lead.timestamp)}
                            </p>
                          </td>

                          {/* Name */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{
                                width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                                background: `linear-gradient(135deg, ${BD}, ${BLUE})`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', fontFamily: "'Fraunces', serif",
                                fontWeight: 800, fontSize: 13,
                              }}>
                                {(lead.name || '?')[0].toUpperCase()}
                              </div>
                              <span style={{ fontSize: 14, fontWeight: 600, color: BD, whiteSpace: 'nowrap' }}>
                                {lead.name || '—'}
                              </span>
                            </div>
                          </td>

                          {/* Phone */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                            <a
                              href={`tel:${lead.phone}`}
                              style={{
                                fontSize: 13, color: BLUE, textDecoration: 'none',
                                fontWeight: 500, whiteSpace: 'nowrap',
                              }}
                            >{lead.phone || '—'}</a>
                          </td>

                          {/* Email */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle', maxWidth: 200 }}>
                            <a
                              href={`mailto:${lead.email}`}
                              style={{
                                fontSize: 12, color: '#64748b', textDecoration: 'none',
                                display: 'block', overflow: 'hidden',
                                textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              }}
                            >{lead.email || '—'}</a>
                          </td>

                          {/* City */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                            <span style={{
                              display: 'inline-flex', alignItems: 'center', gap: 4,
                              fontSize: 13, color: '#475569', whiteSpace: 'nowrap',
                            }}>
                              📍 {lead.city || '—'}
                            </span>
                          </td>

                          {/* Model / Investment */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                            <div>
                              <span style={{
                                display: 'inline-block',
                                padding: '3px 10px', borderRadius: 100,
                                fontSize: 11, fontWeight: 700,
                                color: badge.color, background: badge.bg,
                                letterSpacing: '0.05em',
                                marginBottom: 3,
                              }}>{badge.label}</span>
                              <p style={{
                                fontSize: 11, color: '#94a3b8', maxWidth: 160,
                                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              }}>{lead.investment}</p>
                            </div>
                          </td>

                          {/* Source */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '3px 10px', borderRadius: 6,
                              fontSize: 11, fontWeight: 600,
                              color: '#475569', background: '#f1f5f9',
                              whiteSpace: 'nowrap',
                            }}>
                              {sourceLabel(lead.source)}
                            </span>
                          </td>

                          {/* Message */}
                          <td style={{ padding: '14px 16px', verticalAlign: 'middle', maxWidth: 200 }}>
                            <p style={{
                              fontSize: 12, color: '#64748b',
                              overflow: 'hidden', textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap', maxWidth: 180,
                            }} title={lead.message}>
                              {lead.message || <span style={{ color: '#cbd5e1' }}>No message</span>}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Table footer */}
            {!loading && filtered.length > 0 && (
              <div style={{
                padding: '14px 24px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: 8,
              }}>
                <p style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}>
                  Showing <strong style={{ color: BD }}>{filtered.length}</strong> lead{filtered.length !== 1 ? 's' : ''}
                </p>
                <div style={{ display: 'flex', gap: 16 }}>
                  {[
                    { label: 'Elite', color: GREEN },
                    { label: 'Basic', color: BLUE  },
                    { label: 'Entry', color: '#f59e0b' },
                  ].map(({ label, color }) => {
                    const count = filtered.filter(l => investmentBadge(l.investment).label === label).length;
                    return count > 0 ? (
                      <span key={label} style={{ fontSize: 12, color: '#64748b', fontFamily: "'Inter', sans-serif" }}>
                        <span style={{
                          display: 'inline-block', width: 8, height: 8,
                          borderRadius: '50%', background: color,
                          marginRight: 5, verticalAlign: 'middle',
                        }} />
                        {label}: {count}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── FOOTER ── */}
          <div style={{
            textAlign: 'center', marginTop: 32, paddingBottom: 16,
            fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#94a3b8',
          }}>
            Prime Laundry · Franchise Leads · Data synced from Google Sheets
          </div>
        </div>
      </div>
    </>
  );
}