'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const rounds = [
  {
    n: '1',
    t: 'Early-Season Weed Knockout',
    items: ['Weed Control', 'Pre-Emergents', 'Post-Emergents'],
    d: 'We open the year by laying down a pre-emergent barrier and hitting active weeds head-on before they ever get a foothold.',
  },
  {
    n: '2',
    t: 'Weed Control + Root Builder',
    items: ['Weed Control', 'Pre-Emergents', 'Post-Emergents', 'Growth Hormone Bio Stimulants', 'Soil Amendments'],
    d: 'More weed pressure handled, plus bio stimulants and soil amendments to wake up the roots and feed the soil microorganisms.',
  },
  {
    n: '3',
    t: 'Feed, Fungus &amp; Fortify',
    items: ['Weed Control', 'Pre-Emergents', 'Post-Emergents', 'Fertilizer', 'Micro Nutrients', 'Fungus Control', 'Growth Hormone Bio Stimulants', 'Soil Amendments'],
    d: 'Now we feed hard &mdash; fertilizer, micronutrients, fungus control and growth stimulants &mdash; to push thick, healthy green-up.',
  },
  {
    n: '4',
    t: 'Grub Defense &amp; Deep Feed',
    items: ['Weed Control', 'Pre-Emergents', 'Post-Emergents', 'Fertilizer', 'Micro Nutrients', 'Fungus Control (if needed)', 'Soil Amendments', 'Grub Control', 'Growth Hormone Bio Stimulants'],
    d: 'Grub control goes down to stop root-chewing larvae, paired with another full feeding and fungus protection where it&rsquo;s needed.',
  },
  {
    n: '5',
    t: 'Summer Survival &amp; Moisture Boost',
    items: ['Fertilizer', 'Micro Nutrients', 'Soil Amendments', 'Wetting Agents', 'Spot Spray &mdash; weeds, fungus, etc.'],
    d: 'Texas heat is on. We add wetting agents to drive water deep into the root zone and spot-spray any weeds or fungus flare-ups.',
  },
  {
    n: '6',
    t: 'Stay-Strong Summer Round',
    items: ['Fertilizer', 'Micro Nutrients', 'Soil Amendments', 'Wetting Agents', 'Spot Spray &mdash; weeds, fungus, etc.'],
    d: 'We keep the turf fed and hydrated through the worst of the heat, with wetting agents fighting dry spots and targeted spot spraying.',
  },
  {
    n: '7',
    t: 'Fall Recovery &amp; Re-Feed',
    items: ['Weed Control', 'Pre-Emergents', 'Post-Emergents', 'Fertilizer', 'Micro Nutrients', 'Growth Hormone Bio Stimulants', 'Soil Amendments'],
    d: 'As temps ease, we re-introduce pre-emergents for fall weeds and feed the lawn to recover density heading into cooler months.',
  },
  {
    n: '8',
    t: 'Late-Season Weed &amp; Fungus Lockdown',
    items: ['Weed Control', 'Pre-Emergents', 'Post-Emergents', 'Fungus Control'],
    d: 'A final weed and fungus push to keep the lawn clean and protected through the back half of the season.',
  },
  {
    n: '9',
    t: 'Soil pH Correction',
    items: ['Soil Amendments', 'pH Soil Correction', 'Spray cracks with grass &amp; weed killer'],
    d: 'We lower the pH to correct our naturally alkaline North Texas soil. Grass loves neutral to slightly acidic ground &mdash; this round sets it up for a healthier next year.',
  },
];

const treatments = [
  {
    ic: '🌱',
    t: 'Growth Hormone Bio Stimulants',
    d: 'A plant growth stimulator that enhances shoot and root development, encourages lateral growth, accelerates recovery from stress, improves turf density, and fills bare areas in.',
  },
  {
    ic: '💧',
    t: 'Wetting Agents',
    d: 'Improves water penetration, distribution, and retention in turf soils &mdash; especially in dry, compacted, or hydrophobic zones. Essential for maximizing irrigation efficiency and preventing localized dry spots.',
  },
  {
    ic: '🪱',
    t: 'Soil Amendments',
    d: 'Improves the physical, chemical, and biological condition of turf soil &mdash; making it more fertile, resilient, and capable of supporting dense, healthy grass. Helps feed the microorganisms.',
  },
  {
    ic: '⚗️',
    t: 'pH Soil Correction',
    d: 'Lowers the pH level to fix our alkaline North Texas soil. Grass likes neutral to slightly acidic soil, which keeps it healthier and greener.',
  },
];

const wettingPoints = [
  { t: 'Break Water Repellency in Hydrophobic Soils', d: 'Turf soils develop waxy coatings that repel water &mdash; especially in high-heat zones like North Texas. Surfactants reduce surface tension so water spreads evenly and soaks in.' },
  { t: 'Improve Water Distribution Across the Root Zone', d: 'Instead of pooling or running off, water moves laterally and vertically, reaching dry pockets and root tips &mdash; preventing localized dry spots and uneven turf.' },
  { t: 'Increase Water Retention &amp; Reduce Runoff', d: 'Helps water cling to soil particles longer, reducing evaporation and runoff. That means less water waste and more consistent moisture availability.' },
  { t: 'Enhance Nutrient Uptake', d: 'Moist soil improves solubility and movement of nutrients like nitrogen and potassium, so roots absorb more efficiently and fertilizer works harder.' },
  { t: 'Accelerate Turf Recovery &amp; Fill-In', d: 'Even moisture promotes uniform growth, faster fill-in of bare spots, and better resilience after stress.' },
];

const soilPoints = [
  { t: 'Boost Nutrient Availability', d: 'Amendments unlock tied-up nutrients in the soil, especially phosphorus and micronutrients, and help bind and buffer salts for a more hospitable root zone.' },
  { t: 'Improve Soil Structure', d: 'They loosen compacted clay and increase porosity, allowing better air and water movement through the soil.' },
  { t: 'Feed Soil Microorganisms', d: 'Amendments help maintain the conditions microorganisms need to break down organic matter and feed the turf.' },
];

const faqs = [
  { q: 'How often are applications made?', a: 'Applications are made roughly every 4&ndash;7 weeks throughout the season.' },
  { q: 'How many rounds are in the 2026 program?', a: 'The program is built around 9 rounds, each layering in the right mix of weed control, fertilizer, micronutrients, soil amendments, and other treatments for that time of year.' },
  { q: 'Why do you correct the soil pH?', a: 'North Texas soil is naturally alkaline, but grass likes neutral to slightly acidic soil. We apply pH soil correction to lower the pH, which helps the grass be healthier.' },
  { q: 'What are wetting agents and why do I need them?', a: 'Wetting agents improve water penetration, distribution, and retention in turf soil &mdash; especially in dry, compacted, or hydrophobic zones common in North Texas. They prevent dry spots and make your irrigation far more efficient.' },
  { q: 'What do soil amendments actually do?', a: 'They improve the physical, chemical, and biological condition of your soil &mdash; unlocking nutrients, loosening compacted clay, improving structure, and feeding the microorganisms that keep turf healthy.' },
  { q: 'What are growth hormone bio stimulants?', a: 'They are plant growth stimulators that enhance shoot and root development, encourage lateral growth, speed recovery from stress, improve turf density, and fill in bare areas.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function LawnTreatmentSchedule2026() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🗓️ 2026 Program • Arlington &amp; North Texas</span>
            <h1>The 2026 <span className="headline-3d">Lawn Treatment</span> Schedule</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>9 Rounds • Every 4&ndash;7 Weeks • Built For North Texas Turf</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>This isn&rsquo;t spray-and-pray. Our 2026 program layers weed control, fertilizer, micronutrients, fungus protection, grub control, bio stimulants, and soil science across the whole year &mdash; so your lawn gets exactly what it needs, exactly when it needs it.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>A Real Program. Not Just Fertilizer.</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>Applications go down roughly <b>every 4&ndash;7 weeks</b> across the season. Each round is timed to attack weeds, feed the turf, protect against fungus and grubs, and rebuild the soil underneath &mdash; the part most companies completely ignore.</p>
        </div>
      </div>

      {/* ROUND-BY-ROUND SCHEDULE */}
      <section>
        <div className="wrap">
          <p className="eyebrow">🗓️ The Schedule</p>
          <h2 className="sec-h">Your Round-By-Round <span className="o">2026 Breakdown</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Here&rsquo;s exactly what we apply, round by round, from early spring through soil correction.</p>
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {rounds.map((r) => (
              <div key={r.n} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{r.n}</div>
                <h3 dangerouslySetInnerHTML={{ __html: `Round ${r.n}: ${r.t}` }} />
                <p dangerouslySetInnerHTML={{ __html: r.d }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {r.items.map((it, i) => (
                    <li
                      key={i}
                      style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', background: 'var(--cream, #fdf3e3)', border: '2px solid var(--ink)', borderRadius: 999, padding: '4px 12px' }}
                      dangerouslySetInnerHTML={{ __html: it }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT GOES IN — KEY TREATMENTS */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">Under The Hood</p>
          <h2 className="sec-h">The Treatments That Make It <span className="o">Work</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>A lot of what we do happens below the surface. Here&rsquo;s what each key treatment actually does for your turf.</p>
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {treatments.map((t) => (
              <div key={t.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{t.ic}</div>
                <h3>{t.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WETTING AGENTS DEEP DIVE */}
      <section>
        <div className="wrap">
          <p className="eyebrow">💧 Why It Matters</p>
          <h2 className="sec-h">What Wetting Agents Do <span className="o">In Your Soil</span></h2>
          <RedLine />
          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16, marginTop: 44 }}>
            {wettingPoints.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'Anton, sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
                <div>
                  <b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }} dangerouslySetInnerHTML={{ __html: s.t }} />
                  <span style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOIL AMENDMENTS DEEP DIVE */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">🪱 Below The Surface</p>
          <h2 className="sec-h">What Soil Amendments Do For <span className="o">Turf Health</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', maxWidth: 980, marginLeft: 'auto', marginRight: 'auto' }}>
            {soilPoints.map((s) => (
              <div key={s.t} className="svc-card">
                <div className="svc-top" style={{ background: 'var(--red)' }} />
                <div className="svc-ic">✅</div>
                <h3 dangerouslySetInnerHTML={{ __html: s.t }} />
                <p dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 2026 Program FAQs</p>
          <h2 className="sec-h">Your Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary dangerouslySetInnerHTML={{ __html: f.q }} />
                <div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }} />
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q.replace(/&[a-z]+;/g, (m) => ({ '&mdash;': '—', '&ndash;': '–', '&rsquo;': '’', '&amp;': '&' } as Record<string, string>)[m] || m),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a.replace(/&[a-z]+;/g, (m) => ({ '&mdash;': '—', '&ndash;': '–', '&rsquo;': '’', '&amp;': '&' } as Record<string, string>)[m] || m),
                },
              })),
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>Get On The 2026 Program Today</h2>
          <p>Give your lawn a real plan this year &mdash; nine rounds engineered for North Texas turf. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
