'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const features = [
  { ic: '💥', t: 'Kills Adult Fleas On Contact', d: 'We apply a premium, professional-grade adulticide built to wipe out adult fleas fast for quick, satisfying knockdown.' },
  { ic: '🥚', t: 'Stops Eggs &amp; Larvae', d: 'Our Insect Growth Regulator prevents immature fleas from ever developing into biting adults, breaking the life cycle for good.' },
  { ic: '🛡️', t: 'Long-Lasting Residual Protection', d: 'Our products leave behind a protective residue that keeps working between visits and holds up against heat, sunlight, and irrigation.' },
  { ic: '🔄', t: 'Dual Mode Of Action', d: 'We rotate between different active ingredients to prevent resistance, keeping treatments effective long-term so fleas can&rsquo;t adapt.' },
  { ic: '🐾', t: 'Pet-Conscious Application', d: 'Your pets are often the first to suffer when fleas invade. Our treatments are designed with pet safety in mind.' },
];

const steps = [
  { n: '1', t: 'Adulticide Application', d: 'We apply a premium, professional-grade product designed to kill adult fleas on contact, leaving behind a protective residue that keeps working between visits.' },
  { n: '2', t: 'Insect Growth Regulator (IGR)', d: 'Killing adult fleas isn&rsquo;t enough. Our IGR application stops flea eggs and larvae before they mature, breaking the life cycle and preventing future infestations.' },
  { n: '3', t: 'Dual Mode Of Action', d: 'To prevent resistance, we rotate between different active ingredients. This keeps treatments effective long-term and stops fleas from adapting to a single product.' },
  { n: '4', t: 'Targeted Zone Treatment', d: 'We treat the areas where fleas actually live and breed: shaded areas, moist soil, under decks, around foundations, pet resting zones, and tall grass.' },
  { n: '5', t: 'Eight Treatments Per Year', d: 'Our program includes eight treatments per year, spaced every five to six weeks, maintaining a strong barrier throughout the entire flea season.' },
];

const faqs = [
  { q: 'How many treatments do I get per year?', a: 'Our flea control program includes eight treatments per year, spaced every five to six weeks, to maintain a strong barrier throughout the entire flea season and prevent gaps in coverage.' },
  { q: 'Why won’t store-bought flea products work?', a: 'Store-bought sprays and powders may offer temporary relief, but they rarely address the full flea life cycle. They don’t include growth regulators, don’t penetrate shaded or protected areas, and can’t stop eggs and larvae from developing.' },
  { q: 'Is your flea control safe for pets?', a: 'Yes. Your pets are often the first to suffer when fleas invade, so our flea control treatments are designed with pet safety in mind, including pet-conscious scheduling and safety guidelines.' },
  { q: 'Why does killing the adult fleas matter so much?', a: 'Killing adult fleas isn’t enough on its own. Flea eggs and larvae must be stopped before they mature, which is why our service focuses on complete life-cycle interruption, not just the adults you can see.' },
  { q: 'Where do you treat for fleas?', a: 'We treat the areas where fleas actually live and breed, including shaded areas, moist soil, under decks, around foundations, pet resting zones, and tall grass and vegetation, for complete coverage.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function FleaControl() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🪲 Flea Control • Arlington &amp; North Texas Since 2006</span>
            <h1>Professional <span className="headline-3d">Flea Control</span> Services</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>We Kill The Adults &amp; Stop The Eggs From Hatching</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Fleas reproduce quickly, spread easily, and can take over a yard or home before you even realize what&rsquo;s happening. Our professional flea control service is engineered to eliminate active infestations, break the life cycle, and keep your outdoor spaces protected with <b>long-lasting, premium-grade products</b>. Real results, guaranteed.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FLEA CONTROL MATTERS CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Fleas Aren&rsquo;t Just Annoying — They&rsquo;re Parasites</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>Fleas can spread diseases and cause serious discomfort for pets and people: flea bites &amp; skin irritation, allergic reactions, flea allergy dermatitis, tapeworm transmission, anemia in pets, and secondary infections from scratching. Without a professional plan, infestations come back again and again — that&rsquo;s why we focus on <b>complete life-cycle interruption</b>, not just killing the adults you can see.</p>
        </div>
      </div>

      {/* WHY WE OUTPERFORM */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Why Our Flea Control <span className="o">Outperforms Everyone Else</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {features.map((f) => (
              <div key={f.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{f.ic}</div>
                <h3 dangerouslySetInnerHTML={{ __html: f.t }} />
                <p dangerouslySetInnerHTML={{ __html: f.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="sec-h">Our Professional Flea Treatment <span className="o">Process</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>We use a proven, multi-step approach that targets fleas at every stage of development — ensuring fast knockdown and long-lasting results.</p>
          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'Anton, sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }} dangerouslySetInnerHTML={{ __html: s.t }} /><span style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: s.d }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EIGHT TREATMENTS */}
      <section>
        <div className="wrap">
          <p className="eyebrow">Built To Last</p>
          <h2 className="sec-h">Eight Treatments A Year For <span className="o">Consistent Protection</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Eight treatments per year, spaced every five to six weeks. Each visit reinforces the last, keeping flea populations suppressed and stopping new infestations before they take hold.</p>
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', maxWidth: 980, marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">🌳</div><h3>Shaded &amp; Protected Areas</h3><p>We treat the shaded and protected spots where fleas hide and breed — the places store sprays never reach.</p></div>
            <div className="svc-card"><div className="svc-top" style={{ background: 'var(--red)' }} /><div className="svc-ic">🐶</div><h3>Pet-Conscious Scheduling</h3><p>Pet-conscious scheduling and safety guidelines keep your four-legged family members in mind every visit.</p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">🔒</div><h3>Long-Lasting Residual</h3><p>Long-lasting residual protection holds up against heat, sunlight, and irrigation between treatments.</p></div>
          </div>
        </div>
      </section>

      {/* DIY DOESN'T WORK + PRECISION */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Why Professional Beats DIY</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Why DIY Flea Products <span style={{ color: 'var(--orange-lt)' }}>Don&rsquo;t Work</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Store-bought flea sprays and powders may offer temporary relief, but they rarely address the full flea life cycle. They don&rsquo;t include growth regulators, don&rsquo;t penetrate shaded or protected areas, and can&rsquo;t stop eggs and larvae from developing. Professional flea control uses stronger, longer-lasting products and precise application for complete coverage and life-cycle interruption.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Trained Technicians</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Precision You Can&rsquo;t <span style={{ color: 'var(--orange-lt)' }}>Get From A Can</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Our technicians are trained to identify early signs of infestation, target high-risk areas, adjust treatments based on seasonal changes, and apply products with accuracy and consistency. That&rsquo;s the kind of precision you simply can&rsquo;t get from a DIY approach.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Flea Control FAQs</p>
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
          <h2 className="sec-h">Learn More About <span className="o">Flea Control</span></h2>
          <div className="bi-grid" style={{ marginTop: 36 }}>
            <a className="bi-card" href="/blogs/how-flea-treatments-work-adulticide-igr-and-residual-protection-explained"><h3>How Flea Treatments Work Adulticide Igr and Residual Protection Explained</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-long-flea-treatments-last-and-what-affects-their-duration"><h3>How Long Flea Treatments Last and What Affects Their Duration</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/why-fleas-keep-coming-back-the-real-causes-of-reinfestations"><h3>Why Fleas Keep Coming Back the Real Causes of Reinfestations</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/indoor-vs-outdoor-flea-control-what-homeowners-need-to-know"><h3>Indoor vs Outdoor Flea Control What Homeowners Need to Know</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-weather-shade-and-wildlife-affect-flea-pressure-in-your-yard"><h3>How Weather Shade and Wildlife Affect Flea Pressure in Your Yard</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/flea-eggs-larvae-and-pupae-where-they-hide-in-your-yard"><h3>Flea Eggs Larvae and Pupae Where They Hide in Your Yard</h3><span>Read more &rarr;</span></a>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}><a href="/blogs" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>View all lawn &amp; pest articles &rarr;</a></p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Get Professional Flea Control Today</h2>
          <p>Tired of itchy bites, scratching pets, and recurring flea problems? Take back your yard with flea control that actually works. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
