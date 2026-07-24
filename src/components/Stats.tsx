import React, { useState } from 'react';

const stats = [
  { value: '120+', label: 'Projects delivered', note: 'across startups & agencies' },
  { value: '<1.2s', label: 'Avg. load time', note: 'core web vitals green' },
  { value: '11 yrs', label: 'Building for the web', note: 'HTML to React & beyond' },
  { value: '100%', label: 'Hand-coded', note: 'no bloated page builders' },
];

export default function Stats() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      style={{
        padding: '72px 24px',
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '13px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
              margin: '0 0 8px',
            }}
          >
            By the numbers
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '30px',
              fontWeight: 700,
              color: 'var(--fg)',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Results you can measure, code you can trust
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '32px 26px',
                background: hoveredId === index ? 'var(--surface-hover)' : 'var(--card)',
                border: '1px solid',
                borderColor: hoveredId === index ? 'rgba(74,222,128,0.35)' : 'var(--border)',
                borderRadius: 'var(--radius)',
                transform: hoveredId === index ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '42px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--fg)', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted-dim)' }}>{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}