'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const features = [
  { ic: '🌱', t: <>Weed Control That Hits the Root</>, d: <>We don&rsquo;t hand-pull and call it a day. We eliminate weeds at the root so they don&rsquo;t come right back.</> },
  { ic: '🛡️', t: <>Pre-Emergent Protection</>, d: <>Pre-emergent treatments for landscape beds stop weeds before they ever germinate and break the surface.</> },
  { ic: '🎯', t: <>Post-Emergent Spot Treatments</>, d: <>Active weeds get hit with professional-grade herbicides safe for shrubs and ornamentals.</> },
  { ic: '⚙️', t: <>Selective &amp; Non-Selective Options</>, d: <>We tailor the approach to the bed type and plant material so we protect what you want and kill what you don&rsquo;t.</> },
  { ic: '🪨', t: <>Built for Every Bed Type</>, d: <>Mulch beds, rock beds, and bare soil all get treatments tailored to each environment.</> },
];

const steps = [
  { n: '1', t: 'Pre-Emergent Application', d: 'Stops spring and summer weeds before they ever break the surface.' },
  { n: '2', t: 'Post-Emergent Spot Treatments', d: 'Targets nutgrass, broadleaf weeds, grassy weeds, and anything already growing.' },
  { n: '3', t: 'Monthly or Seasonal Weed Control Service', d: 'Choose the level of maintenance you want — from seasonal to full monthly protection.' },
  { n: '4', t: 'Landscape Bed Maintenance', d: 'We keep your beds clean, sharp, and weed-free all year long.' },
];

const faqs = [
  { q: 'Do you just hand-pull the weeds?', a: 'No. We use a strategic combination of pre-emergent, post-emergent, and targeted herbicide applications that eliminate existing weeds and prevent new ones from ever breaking the surface.' },
  { q: 'What weeds does this control?', a: 'Nutgrass, spurge, dandelions, crabgrass, dallisgrass, henbit, chickweed, broadleaf weeds, and grassy weeds — the exact weeds common to North Texas beds.' },
  { q: 'Is it safe for my shrubs and ornamentals?', a: 'Yes. Our post-emergent weed control uses professional-grade herbicides safe for shrubs and ornamentals, with selective and non-selective options depending on the bed type and plant material.' },
  { q: 'What kinds of beds do you treat?', a: 'Mulch beds, rock beds, shrub beds, ornamental beds, garden beds, and bare soil. If it’s a bed, we keep it clean.' },
  { q: 'How often do you treat?', a: 'You choose the level of maintenance you want — from seasonal weed control to full monthly protection.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function LandscapeBedWeedControl() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌿 Landscape Bed Weed Control • Arlington &amp; North Texas Since 2006</span>
            <h1>Landscape Bed <span className="headline-3d">Weed Control</span> Built for North Texas</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Permanent Weed Control • Pre-Emergent + Post-Emergent • Clean, Sharp, Weed-Free Beds</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Landscape beds should elevate your property — not get overrun with nutgrass, spurge, dandelions, crabgrass, dallisgrass, henbit, chickweed, and broadleaf weeds. Our program is engineered specifically for North Texas soils, heat, rainfall, and weed pressure.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
          </div>
        </div>
      </section>

      {/* PERMANENT CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Take Back Your Landscape Beds — Permanently</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>We don&rsquo;t hand-pull weeds and call it a day. We use a strategic combination of pre-emergent, post-emergent, and targeted herbicide applications designed specifically for landscape beds. This eliminates existing weeds and prevents new ones from ever breaking the surface.</p>
        </div>
      </div>

      {/* WHY HOMEOWNERS CHOOSE US */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Why Homeowners Choose Our <span className="o">Landscape Bed Weed Control</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {features.map((f, i) => (
              <div key={i} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{f.ic}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM / PROCESS */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="sec-h">Our Landscape Bed Weed Control <span className="o">Program</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Real weed control that eliminates weeds at the root — not temporary hand-pulling.</p>
          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'Anton, sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>{s.t}</b><span style={{ color: 'var(--muted)' }}>{s.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR ALL BEDS */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>If It&rsquo;s a Bed, We Keep It Clean</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Perfect For All <span style={{ color: 'var(--orange-lt)' }}>Landscape Beds</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Mulch beds • Rock beds • Shrub beds • Ornamental beds • Garden beds • Weed barrier services • Bed weed prevention programs. Our program is built for the exact weeds, soil types, and climate conditions in this region.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Searches Like These Point Straight to Us</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Clean, Sharp, <span style={{ color: 'var(--orange-lt)' }}>Weed-Free Beds</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Landscape bed weed control Arlington TX • Flower bed weed control near me • Weed control for landscape beds. We keep your mulch beds, rock beds, and ornamental beds clean, sharp, and weed-free all year long.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Landscape Bed Weed Control FAQs</p>
          <h2 className="sec-h">Your Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}><summary>{f.q}</summary><div className="faq-a">{f.a}</div></details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>Stop Fighting Weeds. Start Winning.</h2>
          <p>If you&rsquo;re tired of weeds taking over your landscape beds, you&rsquo;re one call away from a clean, sharp, weed-free property. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
