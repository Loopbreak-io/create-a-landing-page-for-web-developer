import React, { useState } from 'react';

export default function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const proof = [
    { value: '120+', label: 'Sites shipped' },
    { value: '98', label: 'Lighthouse avg' },
    { value: '4.9/5', label: 'Client rating' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '128px 24px 104px',
        background:
          'radial-gradient(circle at 70% 20%, rgba(74,222,128,0.12) 0%, transparent 45%), linear-gradient(180deg, #0a0b0f 0%, #0c0e14 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '460px',
          height: '460px',
          background: 'radial-gradient(circle, rgba(74,222,128,0.18) 0%, transparent 70%)',
          filter: 'blur(20px)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 16px',
            background: 'rgba(74, 222, 128, 0.08)',
            border: '1px solid rgba(74, 222, 128, 0.25)',
            borderRadius: '100px',
            marginBottom: '28px',
            animation: 'fadeIn 0.6s ease both',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulse 2s infinite',
            }}
          />
          <span style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500 }}>
            Now booking Q3 projects
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 7vw, 76px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: '0 0 24px',
            color: 'var(--fg)',
            animation: 'slideUp 0.7s ease both',
          }}
        >
          Websites that load fast,
          <br />
          look sharp, and{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #86efac 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            convert.
          </span>
        </h1>

        <p
          style={{
            fontSize: '20px',
            lineHeight: 1.65,
            color: 'var(--muted)',
            maxWidth: '640px',
            margin: '0 auto 40px',
            animation: 'slideUp 0.8s ease both',
          }}
        >
          I&apos;m a freelance web developer building custom, hand-coded sites and web apps.
          From pixel-perfect design to production deploys, you get one accountable partner
          who ships clean, maintainable code.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '56px',
            animation: 'slideUp 0.9s ease both',
          }}
        >
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              padding: '15px 30px',
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
            Book a Discovery Call
          </button>
          <button
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--fg)',
              background: secondaryHover ? 'var(--surface-hover)' : 'transparent',
              border: '1px solid var(--border-strong)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            View Portfolio →
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeIn 1.2s ease both',
          }}
        >
          {proof.map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'var(--fg)',
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--muted-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginTop: '2px',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}