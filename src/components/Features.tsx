import React, { useState } from 'react';

const Icons = {
  Layout: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  Zap: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Code: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Search: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Phone: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  ),
  Wrench: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z" />
    </svg>
  ),
};

const features = [
  {
    id: 'design',
    icon: Icons.Layout,
    title: 'Custom design & build',
    description:
      'Bespoke interfaces designed and hand-coded to fit your brand exactly. No cookie-cutter templates, no generic themes.',
    featured: true,
  },
  {
    id: 'perf',
    icon: Icons.Zap,
    title: 'Performance obsessed',
    description:
      'Sub-second loads, green Core Web Vitals, and lean bundles. Fast sites rank higher and convert better.',
  },
  {
    id: 'clean',
    icon: Icons.Code,
    title: 'Clean, modern stack',
    description:
      'Built with React, TypeScript, and modern tooling. Readable code your future team can actually maintain.',
  },
  {
    id: 'seo',
    icon: Icons.Search,
    title: 'SEO from day one',
    description:
      'Semantic markup, structured data, and accessible HTML. Search engines and screen readers both love it.',
  },
  {
    id: 'responsive',
    icon: Icons.Phone,
    title: 'Responsive everywhere',
    description:
      'Tested on real devices. Your site looks and feels right from a 4K monitor to a phone in one hand.',
  },
  {
    id: 'support',
    icon: Icons.Wrench,
    title: 'Support after launch',
    description:
      'Deploys, updates, and quick fixes handled. I stay available long after the site goes live.',
  },
];

export default function Features() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" style={{ padding: '104px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '620px', marginBottom: '56px' }}>
          <p
            style={{
              fontSize: '13px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
              margin: '0 0 12px',
            }}
          >
            What you get
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 700,
              color: 'var(--fg)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
            }}
          >
            Everything a great website needs, done right
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
            One developer handling design, build, performance, and launch — so nothing falls
            through the cracks between agencies and freelancers.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {features.map((f) => {
            const Icon = f.icon;
            const active = hoveredId === f.id;
            return (
              <div
                key={f.id}
                onMouseEnter={() => setHoveredId(f.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  gridColumn: f.featured ? 'span 1' : 'span 1',
                  padding: '30px',
                  background: active
                    ? 'linear-gradient(160deg, rgba(74,222,128,0.06) 0%, var(--surface) 100%)'
                    : 'var(--card)',
                  border: '1px solid',
                  borderColor: active ? 'rgba(74,222,128,0.35)' : 'var(--border)',
                  borderRadius: 'var(--radius)',
                  transform: active ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: active ? '0 20px 44px rgba(0,0,0,0.4)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '13px',
                    background: active ? 'rgba(74,222,128,0.14)' : 'rgba(255,255,255,0.04)',
                    border: '1px solid',
                    borderColor: active ? 'rgba(74,222,128,0.3)' : 'var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--fg)',
                    margin: '0 0 10px',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}