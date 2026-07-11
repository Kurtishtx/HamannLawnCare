'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const treatments = [
  { ic: '🌱', t: 'Advanced Turf Nutrition', d: 'Nutrient blends engineered to deepen color, strengthen roots, and build long-term turf resilience. They enhance chlorophyll production, improve nitrogen efficiency, and activate microbial nutrient cycling for a richer, darker, more uniform green.' },
  { ic: '🧬', t: 'Growth Hormone Bio Stimulants', d: 'These stimulants accelerate root growth, increase turf density, and help your lawn recover from stress faster. They fill in bare areas, strengthen weak zones, and create a thicker, more uniform lawn that stands up to seasonal challenges.' },
  { ic: '🛡️', t: 'Fungicide Protection', d: 'Turf diseases can destroy a lawn quickly. Our fungicide treatments prevent and correct issues like brown patch, dollar spot, and root decline using full-rate preventives and targeted curatives with precise timing.' },
  { ic: '🪨', t: 'Soil Amendments', d: 'Healthy soil is the foundation of a healthy lawn. Our soil amendments improve structure, fertility, and microbial activity — enhancing nutrient availability, increasing water retention, and creating a soil environment where grass can thrive year-round.' },
  { ic: '💧', t: 'Wetting Agents', d: 'Wetting agents improve water penetration and distribution in compacted or hydrophobic soils. They prevent dry spots, increase irrigation efficiency, and help your lawn stay hydrated during extreme heat — a critical advantage in warm-season Texas climates.' },
  { ic: '🐛', t: 'Grub Control', d: 'Grubs destroy lawns from below by feeding on the root system. Our grub control treatments intercept these pests before they cause damage, protecting turf density and soil structure while preserving beneficial organisms.' },
];

const advantages = [
  { ic: '📍', t: 'Local Experts', d: 'We live lawn care every day. We understand turf challenges, soil behavior, and seasonal stress patterns better than anyone in North Texas.' },
  { ic: '✅', t: 'Licensed Professionals', d: 'Every treatment is performed by certified technicians trained in turf science and advanced application methods.' },
  { ic: '⛳', t: 'Premium Products', d: 'We use the same technology golf courses rely on — growth hormones, soil conditioners, wetting agents, and advanced nutrient systems.' },
];

const faqs = [
  { q: 'Do you mow lawns?', a: 'No — we don&rsquo;t mow, we transform. Our program strengthens roots, improves soil health, and builds turf density so your lawn stays green, thick, and resilient without you ever touching a mower.' },
  { q: 'What makes Hamann lawn care different?', a: 'Most companies use the same generic treatments. We use advanced turf science, premium golf-course-level products, and applications that are mapped, timed, and customized to your soil, turf type, and stress patterns.' },
  { q: 'What does a treatment program include?', a: 'Advanced turf nutrition, growth hormone bio stimulants, fungicide protection, soil amendments, wetting agents, and grub control — plus built-in stress recovery in every service.' },
  { q: 'Will my lawn survive Texas heat and drought?', a: 'Yes. Our wetting agents, stronger roots, healthier soil, and advanced bio stimulants give your lawn the ability to recover from heat waves, drought, heavy rain, cold snaps, and foot traffic all year long.' },
  { q: 'Are your products safe and professional-grade?', a: 'Absolutely. We don&rsquo;t cut corners, we don&rsquo;t water down products, and we don&rsquo;t rely on outdated methods. Every application is performed by licensed, certified technicians.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function LawnCareServices() {

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌿 Lawn Care &amp; Weed Control • Arlington &amp; North Texas Since 2006</span>
            <h1>Premium <span className="headline-3d">Lawn Care</span> Services</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Advanced Lawn Treatments • No Mowing • Science-Driven Results</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>We don&rsquo;t mow — we transform. Hamann Lawn Care &amp; Weed Control delivers a modern, science-based approach that strengthens roots, improves soil health, boosts turf density, and builds a lawn that stays <b>green, thick, and resilient all year long</b>. Want a lawn that looks professionally maintained without ever touching a mower? You&rsquo;re in the right place.</p>
          </div>
        </div>
      </section>

      {/* OUTPERFORM CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Real Lawn Care. Real, Visible Results.</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>Most lawn companies use the same generic treatments. Hamann doesn&rsquo;t. We use advanced turf science, premium products, and golf-course-level technology to build a lawn that performs under heat, drought, rain, and seasonal stress. No cut corners ✔ No watered-down products ✔ No outdated methods.</p>
        </div>
      </div>

      {/* WHY WE OUTPERFORM */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ Engineered To Outperform</p>
          <h2 className="sec-h">Why Our Lawn Care <span className="o">Outperforms Everyone Else</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Our program is built for homeowners who want a lawn that looks consistently healthy — not just &ldquo;okay&rdquo; after a treatment. Every application is mapped, timed, and customized to your soil, turf type, and stress patterns.</p>
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {treatments.map((f) => (
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

      {/* STRESS RECOVERY */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">Built Into Every Service</p>
          <h2 className="sec-h">Year-Round Stress <span className="o">Recovery</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Heat waves, drought, heavy rain, cold snaps, foot traffic — your lawn faces stress all year long. Our lawn care services include built-in stress-recovery treatments that help your turf bounce back faster and stay green longer.</p>
          <div style={{ maxWidth: 820, margin: '24px auto 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
              <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🌡️</div>
              <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>Stronger Roots</b><span style={{ color: 'var(--muted)' }}>Deep, vigorous root systems give your lawn the foundation it needs to survive Texas extremes.</span></div>
            </div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
              <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🪱</div>
              <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>Healthier Soil</b><span style={{ color: 'var(--muted)' }}>Amended, biologically active soil holds water and nutrients so grass can thrive year-round.</span></div>
            </div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
              <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🧬</div>
              <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>Advanced Bio Stimulants</b><span style={{ color: 'var(--muted)' }}>Recovery chemistry that helps your lawn bounce back from anything the season throws at it.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HAMANN ADVANTAGE */}
      <section>
        <div className="wrap">
          <p className="eyebrow">The Hamann Advantage</p>
          <h2 className="sec-h">The Same Technology <span className="o">Golf Courses Trust</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', maxWidth: 980, marginLeft: 'auto', marginRight: 'auto' }}>
            {advantages.map((a) => (
              <div key={a.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{a.ic}</div>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR + DIY */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>A Lawn That Stands Out</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Engineered For <span style={{ color: 'var(--orange-lt)' }}>Consistent Health</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Our program is engineered for homeowners who want a lawn that looks consistently healthy — not just &ldquo;okay&rdquo; after a treatment. Every application is mapped, timed, and customized to your soil, turf type, and stress patterns for a thicker, greener, more resilient lawn.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Why Science Beats Guesswork</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Modern Turf <span style={{ color: 'var(--orange-lt)' }}>Science</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>We don&rsquo;t cut corners, we don&rsquo;t water down products, and we don&rsquo;t rely on outdated methods. We deliver real lawn care services that create real, visible results using growth hormones, soil conditioners, wetting agents, and advanced nutrient systems.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Lawn Care FAQs</p>
          <h2 className="sec-h">Your Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}><summary>{f.q}</summary><div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }} /></details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/&rsquo;/g, '’') } })) }) }} />
      </section>

      {/* CTA */}
            <section style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <p className="eyebrow">From Our Blog</p>
          <h2 className="sec-h">Learn More About <span className="o">Lawn Care</span></h2>
          <div className="bi-grid" style={{ marginTop: 36 }}>
            <a className="bi-card" href="/blogs/life-cycle-why-breaking-reproduction-is-the-key-to-control"><h3>Life Cycle Why Breaking Reproduction Is the Key to Control</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/micronutrients-and-soil-health-the-missing-piece-in-most-lawn-programs"><h3>Micronutrients and Soil Health the Missing Piece in Most Lawn Programs</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/spring-lawn-treatments-the-most-important-application-of-the-year"><h3>Spring Lawn Treatments the Most Important Application of the Year</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/the-complete-year-round-lawn-treatment-schedule"><h3>The Complete Year Round Lawn Treatment Schedule</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-to-measure-your-lawn-accurately-before-any-treatment-and-why-most-homeowners-get-it-wrong"><h3>How to Measure Your Lawn Accurately Before Any Treatment and Why Most Homeowners Get It Wrong</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-professional-lawn-care-creates-a-healthier-stronger-yard"><h3>How Professional Lawn Care Creates a Healthier Stronger Yard</h3><span>Read more &rarr;</span></a>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}><a href="/blogs" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>View all lawn &amp; pest articles &rarr;</a></p>
        </div>
      </section>

    </main>
  );
}
