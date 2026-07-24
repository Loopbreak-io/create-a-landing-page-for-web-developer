import React, { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & scope',
    description:
      'We hop on a call to map out your goals, audience, and must-have features. You leave with a clear timeline, a fixed quote, and no surprises.',
  },
  {
    number: '02',
    title: 'Design & build',
    description:
      'I design in the browser and code as I go, sharing a live preview link. You review real, working pages — not static mockups — and give feedback fast.',
  },
  {
    number: '03',
    title: 'Launch & support',
    description:
      'I handle deployment, domain, analytics, and performance checks. After launch you get documentation plus ongoing support whenever you need changes.',
  },
];

export default function HowItWorks() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="process" style={{ padding: '104px 24px', background: 'var(--bg-elevated)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            How it works
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
            From idea to live site in three steps
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {steps.map((step, i) => {
            const active = hoveredId === i;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setHoveredId(i)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'relative',
                  padding: '34px 28px',
                  background: active ? 'var(--surface-hover)' : 'var(--card)',
                  border: '1px solid',
                  borderColor: active ? 'rgba(74,222,128,0.35)' : 'var(--border)',
                  borderRadius: 'var(--radius)',
                  transform: active ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '46px',
                    fontWeight: 700,
                    color: active ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                    lineHeight: 1,
                    marginBottom: '18px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '21px',
                    fontWeight: 600,
                    color: 'var(--fg)',
                    margin: '0 0 12px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}