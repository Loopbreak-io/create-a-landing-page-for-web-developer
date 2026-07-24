import React, { useState } from 'react';

const columns = {
  Services: ['Web Design', 'Development', 'Performance', 'Maintenance'],
  Work: ['Portfolio', 'Case Studies', 'Open Source', 'Blog'],
  Company: ['About', 'Process', 'Pricing', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Accessibility', 'Sitemap'],
};

const socials = [
  {
    name: 'GitHub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72M2.75 15.5c6-1 10-1.5 15.5 2M22 12.34c-2.5-1-6.5-1-9 0" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)', padding: '72px 24px 36px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 2fr) repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '56px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9px',
                  background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 18px var(--accent-glow)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0b0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 700 }}>
                SITE<span style={{ color: 'var(--accent)' }}>.dev</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--muted)', maxWidth: '280px', margin: '0 0 20px' }}>
              A freelance web developer building fast, accessible, hand-coded websites and web
              apps for founders and teams who care about craft.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  onMouseEnter={() => setHoveredSocial(s.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: hoveredSocial === s.name ? 'rgba(74,222,128,0.14)' : 'var(--card)',
                    border: '1px solid',
                    borderColor: hoveredSocial === s.name ? 'rgba(74,222,128,0.35)' : 'var(--border)',
                    color: hoveredSocial === s.name ? 'var(--accent)' : 'var(--muted)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(columns).map(([category, links]) => (
            <div key={category}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--fg)',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {category}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => {
                  const key = category + link;
                  return (
                    <li key={key} style={{ marginBottom: '11px' }}>
                      <a
                        href="#"
                        onMouseEnter={() => setHoveredLink(key)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{
                          fontSize: '14px',
                          color: hoveredLink === key ? 'var(--accent)' : 'var(--muted)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--muted-dim)' }}>
            © {year} SITE.dev — Crafted with care and clean code.
          </div>
          <div style={{ fontSize: '13px', color: 'var(--muted-dim)' }}>
            Available for freelance & contract work
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}