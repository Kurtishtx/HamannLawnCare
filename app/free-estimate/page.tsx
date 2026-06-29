'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const steps = [
  { n: '1', t: 'Call Or Text Us', d: 'Reach out at (682) 408-9013 — friendly service, no pressure, no runaround.' },
  { n: '2', t: 'We Look At Your Yard', d: 'We assess your lawn, weeds, and pest pressure and build the right program for your property.' },
  { n: '3', t: 'Get Your Free Quote', d: 'Clear, transparent pricing with no hidden fees — plus 50% off your first application.' },
];

export default function Page() {
  const openPromo = () => (window as any).__openPromo?.();
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 90 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 800 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🎉 50% Off Your First Application</span>
            <h1>Get Your <span className="headline-3d">Free Estimate</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Whether you want a lawn that turns heads or a backyard that&rsquo;s safe for pets and kids, Hamann has you covered. Call or text for a free, no-pressure quote — and claim your 50% off first application.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <a className="btn btn-ghost btn-lg" href={`sms:${PHONE_TEL}`}>💬 Text Us</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="sec-h">Three Easy <span className="o">Steps</span></h2>
          <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 40px' }} />
          <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>{s.t}</b><span style={{ color: 'var(--muted)' }}>{s.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready When You Are</h2>
          <p>Call or text now for your free quote and <b>50% off your first application.</b> Give us a try — you won&rsquo;t regret it.</p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
