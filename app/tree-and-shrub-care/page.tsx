'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const features = [
  { ic: '✂️', t: 'Precision Pruning &amp; Shaping', d: 'Proper pruning isn&rsquo;t just cosmetic — it&rsquo;s critical for plant health. We remove dead or diseased limbs, improve canopy structure and airflow, and prevent overgrowth near structures and walkways.' },
  { ic: '🌸', t: 'Ornamental Plant Health', d: 'We service ornamental trees like crepe myrtles, vitex, and redbuds, plus shrubs including boxwoods, hollies, loropetalum, and jasmine — enhancing flowering and seasonal color.' },
  { ic: '🐛', t: 'Eco-Conscious Pest Control', d: 'Horticultural oil treatments for overwintering pests, plus fungicide, insecticide, growth hormone, and micronutrient rotations — all with ornamental safety in mind.' },
  { ic: '🌱', t: 'Fertilization &amp; Root-Zone Care', d: 'Micronutrient blends to correct deficiencies and soil amendments to improve structure and drainage — timed to soil temperature, rainfall, and seasonal growth cycles.' },
  { ic: '🔬', t: 'Science-Driven Diagnosis', d: 'We don&rsquo;t guess — we diagnose. Every service begins with a site-specific evaluation of soil conditions, plant species, and environmental stressors.' },
  { ic: '📚', t: 'Education-Driven Service', d: 'We don&rsquo;t just treat — we teach. Visual inspections with photo documentation, clear product explanations, and seasonal tips for watering, mulching, and pruning.' },
];

const steps = [
  { n: '1', t: 'Site-Specific Evaluation', d: 'We start with a hands-on assessment of soil conditions, plant species, and the environmental stressors hitting your landscape.' },
  { n: '2', t: 'Precision Pruning &amp; Shaping', d: 'We remove dead or diseased limbs, open up the canopy for airflow, and shape ornamentals to reduce disease and boost seasonal color.' },
  { n: '3', t: 'Root-Zone &amp; Fertilization Treatments', d: 'Targeted root-zone treatments and micronutrient blends stimulate growth, correct deficiencies, and improve water absorption.' },
  { n: '4', t: 'Pest &amp; Disease Suppression', d: 'We rotate modes of action — fungicides, insecticides, horticultural oils — to prevent resistance and ensure long-term suppression.' },
  { n: '5', t: 'Seasonal Timing &amp; Integration', d: 'Treatments are aligned with your turf and weed control calendar for seamless, year-round protection across your property.' },
];

const faqs = [
  { q: 'Why does tree and shrub care matter?', a: 'Landscape plants face constant stress from heat, cold, moisture swings, and environmental pressure, which can lead to nutrient deficiencies like chlorosis, stunted growth, and structural damage. Our services prevent these issues before they escalate — protecting your investment and enhancing property value.' },
  { q: 'What trees and shrubs do you service?', a: 'We service ornamental trees like crepe myrtles, vitex, and redbuds, as well as shrubs including boxwoods, hollies, loropetalum, and jasmine.' },
  { q: 'How do you decide when to treat?', a: 'Timing is everything. We align treatments with the seasons — deep root watering and foliar feeding during summer stress, pruning and disease control for fall dormancy prep, and anti-desiccants and dormant oil sprays for winter protection.' },
  { q: 'Do you offer one-time or recurring service?', a: 'Both. We offer one-time ornamental cleanups, quarterly shrub and tree care packages, annual disease and pest suppression plans, and custom service calendars for HOAs and property managers.' },
  { q: 'Is your pest control safe for ornamentals?', a: 'Yes. We use label-compliant protocols and rotate modes of action to prevent resistance — always with ornamental safety in mind for long-term suppression.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function TreeAndShrubCare() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌳 Tree &amp; Shrub Care • Arlington &amp; North Texas Since 2006</span>
            <h1>Expert <span className="headline-3d">Tree &amp; Shrub Care</span> Services</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Pruning • Fertilization • Pest Control • Healthy, Beautiful Landscapes</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Welcome to Hamann Weed Control &amp; Exterior Pest Control — your trusted partner for professional tree and shrub care. From shrub trimming and tree pruning to disease suppression and fertilization, we deliver <b>precision, protection, and seasonally timed treatments built around real horticultural science</b>.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>We Don&rsquo;t Guess — We Diagnose.</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>Every service begins with a site-specific evaluation of soil conditions, plant species, and environmental stressors. Whether your plants grow in shaded beds or full sun, we tailor our approach to your landscape&rsquo;s unique needs. Field-tested expertise ✔ Label-compliant protocols ✔ Real horticultural science ✔</p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Complete Tree &amp; Shrub <span className="o">Care, Done Right</span></h2>
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
          <h2 className="sec-h">Our Science-Driven <span className="o">Process</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>We prevent problems before they escalate — protecting your investment and enhancing property value.</p>
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

      {/* SEASONAL TREATMENTS */}
      <section>
        <div className="wrap">
          <p className="eyebrow">Timing Is Everything</p>
          <h2 className="sec-h">Seasonal Tree &amp; Shrub <span className="o">Treatments</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">☀️</div><h3>Summer Stress Periods</h3><p>Deep root watering and foliar feeding to carry your ornamentals through the brutal Texas heat.</p></div>
            <div className="svc-card"><div className="svc-top" style={{ background: 'var(--red)' }} /><div className="svc-ic">🍂</div><h3>Fall Dormancy Prep</h3><p>Pruning and disease control to get plants ready for the cool-down and protect next season&rsquo;s growth.</p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">❄️</div><h3>Winter Protection</h3><p>Anti-desiccants and dormant oil sprays guard against freeze injury and overwintering pests.</p></div>
          </div>
        </div>
      </section>

      {/* PLANS + EDUCATION */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Flexible For Every Property</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Plans Built For <span style={{ color: 'var(--orange-lt)' }}>Results</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>One-time ornamental cleanups • Quarterly shrub and tree care packages • Annual disease and pest suppression plans • Custom service calendars for HOAs and property managers. Our services are scalable, transparent, and built for results.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>We Treat &amp; We Teach</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Education-Driven <span style={{ color: 'var(--orange-lt)' }}>Service</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Visual inspections with photo documentation, clear explanations of product choices, and seasonal tips for watering, mulching, and pruning. We believe informed customers make better decisions — and we&rsquo;re here to build trust through clarity and consistency.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Tree &amp; Shrub Care FAQs</p>
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
          <h2>Ready To Elevate Your Landscape?</h2>
          <p>Don&rsquo;t let pests, poor pruning, or nutrient deficiencies compromise your curb appeal. Get a free ornamental health assessment and a custom tree and shrub care plan. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
