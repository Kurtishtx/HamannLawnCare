'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const features = [
  { ic: '⚡', t: 'Fast-Acting Knockdown', d: 'Our treatments reduce active mosquito populations within hours — not days.' },
  { ic: '🛡️', t: 'Long-Lasting Residual Protection', d: 'We apply a premium mosquito barrier that keeps working for weeks, preventing new mosquitoes from taking over your yard.' },
  { ic: '🎯', t: 'Targeted Mosquito Spraying', d: 'We treat the areas where mosquitoes actually hide — shaded foliage, moisture pockets, and resting zones — for maximum impact.' },
  { ic: '✅', t: 'Safe, Precise Application', d: 'Our products are applied with professional equipment and are safe for families and pets once dry.' },
  { ic: '📅', t: 'Season-Long Protection Options', d: 'Choose one-time mosquito treatments or recurring seasonal protection.' },
];

const steps = [
  { n: '1', t: 'Mosquito Inspection & Pressure Assessment', d: 'We identify breeding zones, resting areas, and environmental factors driving mosquito activity.' },
  { n: '2', t: 'Targeted Mosquito Spraying', d: 'We apply professional-grade treatments to foliage, shaded areas, and mosquito resting sites.' },
  { n: '3', t: 'Larval Control & Breeding Prevention', d: 'When appropriate, we treat standing water to stop larvae from developing into biting adults.' },
  { n: '4', t: 'Residual Barrier Application', d: 'A long-lasting protective barrier keeps mosquitoes away for weeks.' },
  { n: '5', t: 'Recurring Treatments (Optional)', d: 'Seasonal or monthly mosquito spraying ensures consistent protection.' },
];

const faqs = [
  { q: 'How long do treatments last?', a: 'Around 45 days depending on weather and mosquito pressure.' },
  { q: 'Is it safe for pets?', a: 'Yes — once dry, pets and children can return to treated areas.' },
  { q: 'Do mosquito treatments really work?', a: 'Absolutely — when applied correctly, they dramatically reduce mosquito populations.' },
  { q: 'Do I need recurring treatments?', a: 'For consistent season-long protection, yes.' },
  { q: 'Does it help with other pests?', a: 'Yes — it also reduces gnats, no-see-ums, and other biting insects.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function MosquitoControlServices() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🦟 Mosquito Control • Arlington & North Texas</span>
            <h1>Premium <span className="headline-3d">Mosquito Control</span> Services</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Long-Lasting Protection • Fewer Applications • Better Results</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Hamann delivers a superior mosquito control program engineered for North Texas. We use the highest-grade products available — <b>the same technology trusted by golf courses and commercial properties</b> — giving you longer protection with fewer applications.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
          </div>
        </div>
      </section>

      {/* SAVE MONEY CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Save Money. Get Better Results.</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>While competitors spray every 21 days, we deliver stronger, longer-lasting protection with just <b>7 applications per year</b> — spaced every 5–6 weeks from mid-February through November. Fewer visits ✔ Longer residual control ✔ Stronger chemistry ✔ Better mosquito reduction.</p>
        </div>
      </div>

      {/* WHY WE OUTPERFORM */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Why Our Mosquito Control <span className="o">Outperforms Everyone Else</span></h2>
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

      {/* PROCESS */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="sec-h">Our Mosquito Control <span className="o">Process</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>We don&apos;t just spray and leave — we eliminate mosquitoes at every stage of their lifecycle.</p>
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

      {/* ONE-TIME VS RECURRING */}
      <section>
        <div className="wrap">
          <p className="eyebrow">Choose Your Plan</p>
          <h2 className="sec-h">One-Time vs. <span className="o">Recurring</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">🎉</div><h3>One-Time Mosquito Treatment</h3><p>Perfect for events, parties, or quick relief before gatherings.</p></div>
            <div className="svc-card"><div className="svc-top" style={{ background: 'var(--red)' }} /><div className="svc-ic">🔁</div><h3>Recurring Mosquito Program</h3><p>Season-long protection with consistent, long-lasting mosquito reduction.</p></div>
          </div>
        </div>
      </section>

      {/* PERFECT FOR + DIY */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Take Your Yard Back</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Perfect For Every <span style={{ color: 'var(--orange-lt)' }}>Outdoor Space</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Backyards • Patios • Pools • Decks • Outdoor Kitchens • Play Areas • Gardens • Shaded Landscapes • Event Spaces. If mosquitoes are ruining your outdoor space, our treatments restore comfort and peace of mind.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Why Professional Beats DIY</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Stop Wasting Money On <span style={{ color: 'var(--orange-lt)' }}>Store Sprays</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>DIY foggers offer temporary relief but don&apos;t solve the root problem. Professional mosquito control gives you longer-lasting protection, higher-grade products, better coverage, lifecycle disruption, and consistent results.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Mosquito Control FAQs</p>
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
          <h2 className="sec-h">Learn More About <span className="o">Mosquito Control</span></h2>
          <div className="bi-grid" style={{ marginTop: 36 }}>
            <a className="bi-card" href="/blogs/why-mosquitoes-take-over-your-yard-and-how-to-stop-them"><h3>Why Mosquitoes Take Over Your Yard and How to Stop Them</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-professional-mosquito-treatments-actually-work"><h3>How Professional Mosquito Treatments Actually Work</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/why-mosquito-treatments-are-the-key-to-long-lasting-mosquito-control"><h3>Why Mosquito Treatments Are the Key to Long Lasting Mosquito Control</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/why-mosquito-spraying-is-essential-for-reducing-mosquito-populations"><h3>Why Mosquito Spraying Is Essential for Reducing Mosquito Populations</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/mosquito-yard-treatment-how-our-barrier-protection-works"><h3>Mosquito Yard Treatment How Our Barrier Protection Works</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/mosquito-prevention-tips-a-simple-guide-for-homeowners"><h3>Mosquito Prevention Tips a Simple Guide for Homeowners</h3><span>Read more &rarr;</span></a>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}><a href="/blogs" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>View all lawn &amp; pest articles &rarr;</a></p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Get Professional Mosquito Control Today</h2>
          <p>Take back your yard with mosquito control services that actually work. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
