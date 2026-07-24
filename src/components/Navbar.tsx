import React, { useState, useEffect } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Clients', href: '#clients' },
];

export default function Navbar() {
  const [ctaHover, setCtaHover] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10, 11, 15, 0.82)' : 'rgba(10, 11, 15, 0.4)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '14px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px var(--accent-glow)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0b0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--fg)',
              letterSpacing: '-0.02em',
            }}
          >
            MAKESITE<span style={{ color: 'var(--accent)' }}>.dev</span>
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: hoveredLink === link.label ? 'var(--fg)' : 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                display: 'none',
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}

          <button
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              padding: '10px 20px',
              fontSize: '15px',
              fontWeight: 600,
              color: '#0a0b0f',
              background: ctaHover
                ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                : 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transform: ctaHover ? 'translateY(-1px)' : 'translateY(0)',
              boxShadow: ctaHover ? '0 8px 24px var(--accent-glow)' : '0 2px 10px rgba(74,222,128,0.2)',
              transition: 'all 0.2s ease',
            }}
          >
            Start a Project
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 820px) {
          .nav-link { display: inline-block !important; }
        }
      `}</style>
    </nav>
  );
}