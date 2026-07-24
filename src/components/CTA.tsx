import React, { useState } from 'react';

export default function CTA() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <section style={{ padding: '96px 24px', background: 'var(--bg)' }}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '72px 40px',
          borderRadius: '28px',
          textAlign: 'center',
          background:
            'radial-gradient(circle at 30% 20%, rgba(74,222,128,0.18) 0%, transparent 55%), linear-gradient(135deg, #12181a 0%, #0e1512 100%)',
          border: '1px solid rgba(74,222,128,0.22)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 5vw, 50px)',
              fontWeight: 700,
              color: 'var(--fg)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 18px',
            }}
          >
            Ready to build something better?
          </h2>
          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.6,
              color: 'var(--muted)',
              maxWidth: '540px',
              margin: '0 auto 36px',
            }}
          >
            Tell me about your project and I&apos;ll get back within 24 hours with next steps,
            a rough timeline, and an honest quote.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={{
                padding: '15px 32px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#0a0b0f',
                background: primaryHover
                  ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                  : 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transform: primaryHover ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: primaryHover
                  ? '0 16px 40px var(--accent-glow)'
                  : '0 8px 24px rgba(74,222,128,0.22)',
                transition: 'all 0.25s ease',
              }}
            >
              Start a Project
            </button>
            <button
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
              style={{
                padding: '15px 32px',
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--fg)',
                background: secondaryHover ? 'rgba(255,255,255,0.06)' : 'transparent',
                border: '1px solid var(--border-strong)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              hello@site.dev
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}