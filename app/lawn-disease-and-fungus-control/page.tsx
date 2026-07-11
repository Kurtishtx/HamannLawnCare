'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const included = [
  { ic: '🔬', t: 'Professional Disease Diagnosis', d: 'Accurate diagnosis is the foundation of effective treatment. We identify the exact disease affecting your lawn — brown patch, dollar spot, TARR, gray leaf spot, rust, or other turf pathogens — and build a targeted plan to stop it.' },
  { ic: '🎯', t: 'Targeted Fungicide Applications', d: 'We use premium curative and preventive fungicides applied at full label rates. These treatments stop active infections, prevent spread, and protect your lawn from recurring outbreaks during high-pressure seasons.' },
  { ic: '🌱', t: 'Advanced Turf Recovery Treatments', d: 'After disease damage, your lawn needs help rebuilding. Our recovery treatments strengthen roots, increase turf density, and accelerate healing so your lawn regains color, thickness, and uniformity faster.' },
  { ic: '💧', t: 'Soil Health & Moisture Correction', d: 'Many diseases start in the soil. We correct moisture imbalance, compaction, and microbial issues that create disease-friendly environments — helping your lawn resist future outbreaks naturally.' },
  { ic: '🛡️', t: 'Preventive Disease Protection', d: 'Prevention is always cheaper than repair. Our preventive treatments protect your lawn during peak disease seasons, reducing the risk of outbreaks and keeping your turf consistently healthy.' },
  { ic: '☀️', t: 'Moisture & Shade Management Guidance', d: 'Overwatering, shade, and poor airflow are major disease triggers. We provide expert recommendations to reduce disease pressure and create a healthier growing environment for your turf.' },
];

const advantages = [
  { ic: '📍', t: 'Local Disease Experts', d: 'We understand North Texas turf diseases better than anyone. We know when they activate, how they spread, and how to stop them fast.' },
  { ic: '🎓', t: 'Licensed Technicians', d: 'Every application is performed by certified professionals trained in turf pathology and advanced fungicide application.' },
  { ic: '🏆', t: 'Premium Fungicides', d: 'We use high-quality curatives and preventives — the same technology trusted by golf courses and sports turf managers.' },
  { ic: '✅', t: 'Guaranteed Results', d: 'If the disease persists or spreads, we return and retreat at no cost. Your lawn’s recovery is our priority.' },
];

const faqs = [
  { q: 'How fast do lawn diseases spread?', a: 'Lawn diseases spread fast — often overnight. That is why we diagnose the problem, target the infection, and protect your turf with premium fungicides and turf-recovery treatments engineered for North Texas conditions.' },
  { q: 'What diseases do you treat?', a: 'We identify and treat brown patch, dollar spot, TARR, gray leaf spot, rust, and other turf pathogens — then build a targeted plan to stop the exact disease affecting your lawn.' },
  { q: 'How is Hamann different from other companies?', a: 'Most companies apply generic fungicides and hope for the best. Hamann doesn’t. We use advanced turf science, premium curatives, and precise timing to stop disease spread and restore turf health quickly.' },
  { q: 'Do you water down your products?', a: 'Never. We don’t water down products and we don’t guess. We use proven, high-rate formulations and modern application methods that deliver fast, visible improvement.' },
  { q: 'How does my lawn recover after disease damage?', a: 'Fast turf recovery is built into every service. Our program includes bio stimulants, root enhancers, and soil-health boosters that give your turf the ability to recover from disease stress and rebuild density.' },
  { q: 'What if the disease comes back?', a: 'If the disease persists or spreads, we return and retreat at no cost. Your lawn’s recovery is our priority.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function LawnDiseaseAndFungusControl() {

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🍄 Lawn Disease &amp; Fungus Control • Arlington &amp; North Texas Since 2006</span>
            <h1>Professional <span className="headline-3d">Disease &amp; Fungus</span> Control</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Advanced Fungus Treatments • Fast Recovery • Science-Driven Turf Protection</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Lawn diseases spread fast — often overnight. Hamann Lawn Care delivers advanced, science-based fungus control that <b>stops disease at the source and restores your lawn&rsquo;s health</b> for healthy, resilient turf.</p>
          </div>
        </div>
      </section>

      {/* DIAGNOSE / TARGET / PROTECT CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Diagnose. Target. Protect.</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>We diagnose the problem, target the infection, and protect your turf with premium fungicides and turf-recovery treatments engineered for North Texas conditions. Stops disease at the source ✔ Restores turf health ✔ Builds resilience ✔ Real results, not symptom suppression.</p>
        </div>
      </div>

      {/* WHY WE OUTPERFORM */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Why Our Disease &amp; Fungus Control <span className="o">Outperforms Standard Treatments</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Most companies apply generic fungicides and hope for the best. Hamann doesn&rsquo;t. We use advanced turf science, premium curatives, and precise timing to stop disease spread and restore turf health quickly — engineered for homeowners who want real results, not temporary symptom suppression.</p>
          <p className="sec-sub" style={{ marginTop: 14 }}>Every treatment is customized to your turf type, soil conditions, moisture levels, and disease pressure. We don&rsquo;t water down products. We don&rsquo;t guess. We use proven, high-rate formulations and modern application methods that deliver fast, visible improvement.</p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section>
        <div className="wrap">
          <p className="eyebrow">What We Treat</p>
          <h2 className="sec-h">What&rsquo;s Included In Our <span className="o">Disease &amp; Fungus Control</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {included.map((f) => (
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

      {/* FAST RECOVERY */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Built Into Every Service</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Fast Turf Recovery, <span style={{ color: 'var(--orange-lt)' }}>Every Time</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Lawn diseases can devastate turf quickly, but recovery doesn&rsquo;t have to be slow. Our program includes bio stimulants, root enhancers, and soil-health boosters that help your lawn bounce back faster.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Stronger From The Roots</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Rebuild Density &amp; <span style={{ color: 'var(--orange-lt)' }}>Resilience</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Stronger roots, improved nutrient uptake, and balanced soil biology give your turf the ability to recover from disease stress and rebuild density — so your lawn regains color, thickness, and uniformity faster.</p>
          </div>
        </div>
      </section>

      {/* THE HAMANN ADVANTAGE */}
      <section>
        <div className="wrap">
          <p className="eyebrow">Why Homeowners Trust Hamann</p>
          <h2 className="sec-h">The Hamann <span className="o">Advantage</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', maxWidth: 980, marginLeft: 'auto', marginRight: 'auto' }}>
            {advantages.map((f) => (
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

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Disease &amp; Fungus Control FAQs</p>
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
          <h2 className="sec-h">Learn More About <span className="o">Lawn Disease &amp; Fungus</span></h2>
          <div className="bi-grid" style={{ marginTop: 36 }}>
            <a className="bi-card" href="/blogs/how-lawn-diseases-develop-and-why-early-treatment-is-critical"><h3>How Lawn Diseases Develop and Why Early Treatment Is Critical</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-to-identify-the-most-common-lawn-diseases-in-north-texas"><h3>How to Identify the Most Common Lawn Diseases in North Texas</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/brown-spots-vs-yellow-spots-what-your-lawn-is-really-telling-you"><h3>Brown Spots vs Yellow Spots What Your Lawn Is Really Telling You</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-to-tell-if-your-lawn-has-a-fungus-or-just-heat-stress"><h3>How to Tell If Your Lawn Has a Fungus Or Just Heat Stress</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/the-early-warning-signs-of-lawn-disease-most-homeowners-miss"><h3>The Early Warning Signs of Lawn Disease Most Homeowners Miss</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/brown-patch-fungus-causes-symptoms-and-fastest-treatment-options"><h3>Brown Patch Fungus Causes Symptoms and Fastest Treatment Options</h3><span>Read more &rarr;</span></a>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}><a href="/blogs" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>View all lawn &amp; pest articles &rarr;</a></p>
        </div>
      </section>

    </main>
  );
}
