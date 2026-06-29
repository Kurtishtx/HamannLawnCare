'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const included = [
  { ic: '🚧', t: 'Pre-Emergent Weed Barrier', d: 'Stops crabgrass, spurge, and other weeds before they ever break the surface — the foundation of a truly weed-free lawn.' },
  { ic: '🌱', t: 'Professional Fertilizer Applications', d: 'Slow-release, balanced nutrients that feed your lawn steadily and safely all season long.' },
  { ic: '🍃', t: 'Broadleaf Weed Treatments', d: 'Targets dandelions, clover, chickweed, henbit, and hundreds of other common weeds.' },
  { ic: '🌾', t: 'Grassy Weed Control', d: 'Specialized treatments for crabgrass, dallisgrass, nutsedge, and other hard-to-kill grassy weeds.' },
  { ic: '🪱', t: 'Soil Health & Lawn Strengthening', d: 'We build soil structure, improve nutrient uptake, and help your lawn grow thicker and stronger.' },
  { ic: '📅', t: 'Season-Long Lawn Care Visits', d: 'Your lawn gets exactly what it needs at the right time of year — no guesswork.' },
];

const reasons = [
  { ic: '🛡️', t: 'Season-Long Weed Control', d: 'We target broadleaf weeds, grassy weeds, and stubborn invasive species with professional-grade weed treatments that keep your lawn clean and uniform.' },
  { ic: '💚', t: 'Premium Fertilization for Strong, Green Turf', d: 'Your lawn gets the nutrients it needs at the right time of year — nitrogen, potassium, micronutrients, and soil-building components that create deep color and thick growth.' },
  { ic: '⛔', t: 'Pre & Post-Emergent Weed Treatments', d: 'Stop weeds before they sprout and eliminate the ones already growing. This is the foundation of a truly weed-free lawn.' },
  { ic: '🌿', t: 'Healthier Soil, Stronger Roots', d: 'We don&rsquo;t just treat the grass — we improve the soil. That means fewer weeds, better drought tolerance, and a lawn that stays green longer.' },
  { ic: '🔁', t: 'Complete Lawn Care System', d: 'This isn&rsquo;t a one-time spray. It&rsquo;s a structured, season-long lawn care program designed for long-term results.' },
];

const steps = [
  { n: '1', t: 'Pre-Emergent Weed Barrier', d: 'We lay down a barrier that stops crabgrass, spurge, and other weeds before they ever break the surface.' },
  { n: '2', t: 'Professional Fertilizer Applications', d: 'Slow-release, balanced nutrients feed your lawn steadily and safely throughout the season.' },
  { n: '3', t: 'Broadleaf & Grassy Weed Treatments', d: 'We knock out dandelions, clover, chickweed, henbit, crabgrass, dallisgrass, nutsedge, and hundreds of other weeds.' },
  { n: '4', t: 'Soil Health & Lawn Strengthening', d: 'We build soil structure, improve nutrient uptake, and help your turf grow thicker and stronger.' },
  { n: '5', t: 'Season-Long Lawn Care Visits', d: 'Your lawn gets exactly what it needs at the right time of year — no guesswork, just results.' },
];

const addons = ['🌬️ Lawn Aeration', '🧪 Soil Amendments', '🦠 Lawn Disease Control', '🐛 Grub Control', '🐜 Fire Ant Treatments', '🌱 Overseeding', '✂️ Lawn Maintenance'];

const grasses = ['St. Augustine', 'Bermuda', 'Zoysia', 'Fescue', 'Hybrid Grasses'];

const faqs = [
  { q: 'What&rsquo;s the difference between pre-emergent and post-emergent weed treatments?', a: 'Pre-emergent treatments stop weeds before they ever sprout, while post-emergent treatments eliminate weeds that are already growing. Together they&rsquo;re the foundation of a truly weed-free lawn.' },
  { q: 'How soon will I see results?', a: 'Within weeks you&rsquo;ll notice richer, deeper green color, fewer weeds, thicker turf, a stronger root system, improved soil health, better drought resistance, and more uniform growth — a lawn that looks professionally maintained.' },
  { q: 'Is this a one-time spray?', a: 'No. This isn&rsquo;t a one-time spray — it&rsquo;s a structured, season-long lawn care program designed for long-term results.' },
  { q: 'What grass types does the program work for?', a: 'Our weed control and fertilization program works for St. Augustine, Bermuda, Zoysia, Fescue, and hybrid grasses. We adjust treatments based on your specific turf.' },
  { q: 'Do you customize the program for my yard?', a: 'Yes. Every lawn is different — soil type, grass type, shade, watering habits, and weed pressure all matter. We adapt with customized weed treatments, tailored fertilizer blends, targeted spot-spraying, seasonal adjustments, and ongoing monitoring.' },
  { q: 'Can I add other services?', a: 'Absolutely. Lawn aeration, soil amendments, lawn disease control, grub control, fire ant treatments, overseeding, and lawn maintenance all integrate seamlessly with your weed control and fertilization plan.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function WeedControlAndFertilizerServices() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌱 Weed Control &amp; Fertilization • Arlington &amp; North Texas Since 2006</span>
            <h1>Weed Control &amp; <span className="headline-3d">Fertilization</span> Services</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Fewer Weeds • Thicker Turf • Deep Texas Green</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Hamann delivers a complete lawn care program designed to eliminate weeds, strengthen roots, and build thick, healthy turf that lasts all year. Our <b>Weed Control &amp; Fertilization Program</b> targets weeds, feeds your soil, and transforms your yard into the lawn you&rsquo;ve always wanted.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
          </div>
        </div>
      </section>

      {/* INSTANT PRICING CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Get an Instant, Accurate Estimate</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>Use our Lawn Care Instant Pricing Measuring Tool to receive an instant, accurate estimate based on your property size. Professional lawn treatments that target weeds, feed your soil, and transform your yard — no guesswork ✔ no surprises ✔</p>
        </div>
      </div>

      {/* WHY HOMEOWNERS CHOOSE US */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Why Homeowners Choose Our <span className="o">Lawn Care Program</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {reasons.map((f) => (
              <div key={f.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{f.ic}</div>
                <h3>{f.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: f.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">The Full Treatment Lineup</p>
          <h2 className="sec-h">What&rsquo;s Included in Our <span className="o">Weed Control &amp; Fertilization Program</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {included.map((f) => (
              <div key={f.t} className="svc-card">
                <div className="svc-top" style={{ background: 'var(--red)' }} />
                <div className="svc-ic">{f.ic}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="sec-h">Our Lawn Care <span className="o">Process</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>We don&rsquo;t just treat the grass — we improve the soil with commercial-grade products, precise application rates, soil-based treatment plans, season-specific formulas, and expert timing.</p>
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

      {/* BUILT FOR YOUR YARD + WITHIN WEEKS */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Tailored To Your Turf</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>A Lawn Treatment Program <span style={{ color: 'var(--orange-lt)' }}>Built For Your Yard</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Every lawn is different — soil type, grass type, shade, watering habits, and weed pressure all matter. Our program adapts to your yard with customized weed treatments, tailored fertilizer blends, targeted spot-spraying, seasonal adjustments, and ongoing monitoring. This is how you get a lawn that stays green, thick, and weed-free.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>The Difference You&rsquo;ll See</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Within Weeks, A <span style={{ color: 'var(--orange-lt)' }}>Transformed Lawn</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Richer, deeper green color • fewer weeds • thicker turf • a stronger root system • improved soil health • better drought resistance • more uniform growth • a lawn that looks professionally maintained. This is the difference a real lawn care program makes.</p>
          </div>
        </div>
      </section>

      {/* PERFECT FOR ALL LAWN TYPES */}
      <section>
        <div className="wrap">
          <p className="eyebrow">No Matter Your Grass</p>
          <h2 className="sec-h">Perfect For <span className="o">All Lawn Types</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Our weed control and fertilization program works for every turf in Texas — and we adjust treatments based on your specific grass.</p>
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
            {grasses.map((g) => (
              <div key={g} className="svc-card" style={{ textAlign: 'center' }}>
                <div className="svc-top" />
                <div className="svc-ic">🌾</div>
                <h3>{g}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ON SERVICES */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">Enhance Your Results</p>
          <h2 className="sec-h">Add-On Lawn <span className="o">Services Available</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>These services integrate seamlessly with your weed control and fertilization plan.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, maxWidth: 820, margin: '36px auto 0' }}>
            {addons.map((a) => (
              <span key={a} style={{ background: '#fff', border: '3px solid var(--ink)', borderRadius: 999, padding: '12px 22px', fontWeight: 800, color: 'var(--ink)', boxShadow: '3px 3px 0 rgba(33,26,16,.12)' }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Weed Control &amp; Fertilization FAQs</p>
          <h2 className="sec-h">Your Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}><summary dangerouslySetInnerHTML={{ __html: f.q }} /><div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }} /></details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q.replace(/&rsquo;/g, '’').replace(/&amp;/g, '&'), acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/&rsquo;/g, '’').replace(/&amp;/g, '&') } })) }) }} />
      </section>

      {/* CTA */}
            <section style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <p className="eyebrow">From Our Blog</p>
          <h2 className="sec-h">Learn More About <span className="o">Weed Control &amp; Fertilization</span></h2>
          <div className="bi-grid" style={{ marginTop: 36 }}>
            <a className="bi-card" href="/blogs/how-to-identify-the-most-common-weeds-in-your-lawn"><h3>How to Identify the Most Common Weeds in Your Lawn</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/why-weeds-come-back-every-year-and-how-lawn-treatments-stop-them"><h3>Why Weeds Come Back Every Year and How Lawn Treatments Stop Them</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/bold-anchor-for-linking-weed-control-and-fertilization"><h3>Bold Anchor for Linking Weed Control and Fertilization</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/seasonal-weed-pressure-when-your-lawn-is-most-vulnerable"><h3>Seasonal Weed Pressure When Your Lawn Is Most Vulnerable</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-professional-weed-control-applications-actually-work"><h3>How Professional Weed Control Applications Actually Work</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/the-science-behind-lawn-fertilization-what-your-grass-really-needs"><h3>The Science Behind Lawn Fertilization What Your Grass Really Needs</h3><span>Read more &rarr;</span></a>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}><a href="/blogs" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>View all lawn &amp; pest articles &rarr;</a></p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready For A Healthier, Greener, Weed-Free Lawn?</h2>
          <p>Get a lawn care program that actually works — season after season. Request your quote today and start your weed-free lawn transformation. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
