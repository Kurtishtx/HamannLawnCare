'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const features = [
  { ic: '🌱', t: 'Root-Level Weed Elimination', d: 'Real weed control that kills weeds at the root instead of temporary hand-pulling that just grows back.' },
  { ic: '🛡️', t: 'Pre-Emergent Protection', d: 'Pre-emergent for landscape beds stops weeds before they ever break the surface.' },
  { ic: '🎯', t: 'Post-Emergent Spot Control', d: 'Professional-grade post-emergent herbicides knock out active weeds and keep them gone — safe for shrubs and ornamentals.' },
  { ic: '✅', t: 'Safe For Your Plants', d: 'Selective or non-selective products depending on the area, so your plants stay protected while the weeds get the boot.' },
  { ic: '🪨', t: 'Works In Every Bed Type', d: 'Mulch beds, rock beds, and bare soil — each treatment is tailored to that exact environment.' },
];

const steps = [
  { n: '1', t: 'Pre-Emergent Application', d: 'Stops spring and summer weeds before they germinate.' },
  { n: '2', t: 'Post-Emergent Spot Treatments', d: 'Targets nutgrass, broadleaf weeds, grassy weeds, and anything already growing.' },
  { n: '3', t: 'Monthly or Seasonal Weed Control Service', d: 'Choose monthly or seasonal depending on how clean you want your beds.' },
  { n: '4', t: 'Landscape Bed Maintenance', d: 'We keep your beds clean, sharp, and weed-free all year long.' },
];

const faqs = [
  { q: 'Do you really eliminate weeds at the root?', a: 'Yes — we use real weed control that eliminates weeds at the root instead of temporary hand-pulling, so they stop coming back.' },
  { q: 'What is pre-emergent and why does it matter?', a: 'Pre-emergent protection for landscape beds stops weeds before they break the surface, preventing spring and summer weeds from germinating.' },
  { q: 'Is your weed control safe for my plants?', a: 'Yes — post-emergent weed control uses professional-grade herbicides safe for shrubs and ornamentals. We use selective or non-selective products depending on the area.' },
  { q: 'Does it work in mulch beds and rock beds?', a: 'Absolutely — our program works in mulch beds, rock beds, and bare soil, with treatments tailored to each environment.' },
  { q: 'Should I choose monthly or seasonal service?', a: 'Choose monthly or seasonal depending on how clean you want your beds. Either way, we keep them clean, sharp, and weed-free all year long.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function FlowerBedWeedControl() {

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌼 Flower Bed Weed Control • Arlington &amp; North Texas Since 2006</span>
            <h1>Flower Bed <span className="headline-3d">Weed Control</span> in Arlington, TX</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Permanent Weed Control • Pre-Emergent + Post-Emergent • Built for North Texas Beds</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Your flower beds should look clean, sharp, and maintained — not overrun with nutgrass, spurge, dandelions, crabgrass, dallisgrass, henbit, chickweed, and broadleaf weeds. Our professional program is engineered for North Texas soils, heat, rainfall, and weed pressure, giving you a clean, polished landscape all year long.</p>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Take Back Your Landscape Beds — Permanently</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>We don&rsquo;t spray and pray. We use pre-emergent for flower beds, post-emergent herbicides, and targeted weed prevention designed for mulch beds, rock beds, and ornamental beds. Clean beds ✔ Sharp edges ✔ Weed-free all year ✔</p>
        </div>
      </div>

      {/* WHY HOMEOWNERS CHOOSE US */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Why Homeowners Choose Our <span className="o">Landscape Weed Control</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {features.map((f) => (
              <div key={f.t} className="svc-card">
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
          <h2 className="sec-h">Our Flower Bed Weed Control <span className="o">Program</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>We don&rsquo;t spray and pray — our program is built for the exact weeds, soil types, and climate conditions in this region.</p>
          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>{s.t}</b><span style={{ color: 'var(--muted)' }}>{s.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR ALL BEDS + LOCAL */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Every Bed, Covered</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Perfect For All <span style={{ color: 'var(--orange-lt)' }}>Landscape Beds</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Mulch beds • Rock beds • Shrub beds • Ornamental beds • Garden beds • Weed barrier services • Bed weed prevention programs. If it&rsquo;s a bed, we keep it clean.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Built For North Texas</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Engineered For <span style={{ color: 'var(--orange-lt)' }}>Our Region</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Our program is built for the exact weeds, soil types, and climate conditions in this region. Searches like flower bed weed control Arlington TX, landscape weed control near me, and weed control for landscape beds point straight to us.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Flower Bed Weed Control FAQs</p>
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
            <section style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <p className="eyebrow">From Our Blog</p>
          <h2 className="sec-h">Learn More About <span className="o">Flower-Bed Weed Control</span></h2>
          <div className="bi-grid" style={{ marginTop: 36 }}>
            <a className="bi-card" href="/blogs/how-to-stop-weeds-in-flower-beds-in-north-texas"><h3>How to Stop Weeds in Flower Beds in North Texas</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/best-pre-emergent-for-flower-beds-in-texas-heat"><h3>Best Pre Emergent for Flower Beds in Texas Heat</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/post-emergent-weed-control-for-flower-beds-what-actually-works"><h3>Post Emergent Weed Control for Flower Beds What Actually Works</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/why-hand-pulling-weeds-does-not-work-in-flower-beds"><h3>Why Hand Pulling Weeds Does Not Work in Flower Beds</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-to-prevent-nutgrass-in-flower-beds-in-north-texas"><h3>How to Prevent Nutgrass in Flower Beds in North Texas</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/safe-weed-control-for-flower-beds-around-shrubs-and-ornamentals"><h3>Safe Weed Control for Flower Beds Around Shrubs and Ornamentals</h3><span>Read more &rarr;</span></a>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}><a href="/blogs" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>View all lawn &amp; pest articles &rarr;</a></p>
        </div>
      </section>

    </main>
  );
}
