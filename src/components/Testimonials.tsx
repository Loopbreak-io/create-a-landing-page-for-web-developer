import React, { useState } from 'react';

const testimonials = [
  {
    id: 't1',
    quote:
      'Our new site loads instantly and conversions jumped 40% in the first month. The whole process was smooth, and the code handed off to our team was spotless.',
    name: 'Maria Alvarez',
    role: 'Founder',
    company: 'Northlight Studio',
    initials: 'MA',
  },
  {
    id: 't2',
    quote:
      'Finally a developer who cares about performance and accessibility as much as looks. Green Lighthouse scores across the board and a design our customers love.',
    name: 'Devon Price',
    role: 'Head of Growth',
    company: 'Cadence Labs',
    initials: 'DP',
  },
  {
    id: 't3',
    quote:
      'Reliable, communicative, and genuinely talented. Delivered ahead of schedule and stuck around to support us through launch week. Would hire again in a heartbeat.',
    name: 'Sana Kapoor',
    role: 'Product Lead',
    company: 'Bright Ferry',
    initials: 'SK',
  },
];

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="clients" style={{ padding: '104px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            Client stories
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 700,
              color: 'var(--fg)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Trusted by founders and teams
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px',
          }}
        >
          {testimonials.map((t) => {
            const active = hoveredId === t.id;
            return (
              <div
                key={t.id}
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  padding: '32px',
                  background: active ? 'var(--surface-hover)' : 'var(--card)',
                  border: '1px solid',
                  borderColor: active ? 'rgba(74,222,128,0.35)' : 'var(--border)',
                  borderRadius: 'var(--radius)',
                  transform: active ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: active ? '0 20px 44px rgba(0,0,0,0.4)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', gap: '3px', marginBottom: '18px' }}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} width="17" height="17" viewBox="0 0 24 24" fill="var(--accent)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.65,
                    color: 'var(--fg)',
                    margin: '0 0 24px',
                    flexGrow: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#0a0b0f',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--fg)' }}>{t.name}</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted-dim)' }}>
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}