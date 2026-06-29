'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const lawnTreatments = [
  { ic: '🌿', name: 'Weed Control', desc: 'Precision herbicide applications eliminate grassy and broadleaf weeds while protecting desirable turf and ornamentals.' },
  { ic: '🌾', name: 'Fertilizers', desc: 'Nutrient-rich blends engineered for North Texas turf. Designed to deepen color, strengthen roots, and enhance chlorophyll production.' },
  { ic: '🌱', name: 'Growth Hormone Bio Stimulants', desc: 'Advanced stimulants that accelerate root development and fill bare areas fast.' },
  { ic: '🛡️', name: 'Fungicides', desc: 'Full-rate preventives and curatives to stop brown patch, dollar spot, and root decline.' },
  { ic: '🌍', name: 'Soil Amendments', desc: 'Improves soil structure, fertility, and microbial activity — essential for long-term turf health.' },
  { ic: '💧', name: 'Wetting Agents', desc: 'Enhances water penetration and retention in compacted or hydrophobic soils.' },
  { ic: '🐛', name: 'Grub Control', desc: 'Stops root-feeding grubs before they damage turf density and soil structure.' },
  { ic: '🌸', name: 'Landscape & Flower Bed Weed Control', desc: 'We keep your mulch beds, rock beds, shrub beds, and ornamental beds clean and weed-free all year long.' },
];

const pestServices = [
  { ic: '🦟', name: 'Mosquito Control', desc: 'Enjoy your backyard again with our long-lasting barrier treatments.' },
  { ic: '🐾', name: 'Flea & Tick Control', desc: 'Protect your family and pets with powerful outdoor treatments.' },
  { ic: '🌳', name: 'Tree & Shrub Care', desc: 'Strengthen root systems, improve plant health, and protect your landscape investment.' },
];

const whyChoose = [
  { t: 'Local Experts', d: 'We live lawn care every day.' },
  { t: 'Licensed Professionals', d: 'Certified technicians, advanced training.' },
  { t: 'Transparent Pricing', d: 'No surprises, no hidden fees.' },
  { t: '5-Star Service ⭐⭐⭐⭐⭐', d: 'Hundreds of glowing Google reviews.' },
  { t: 'Guaranteed Results', d: "If you're not happy, we fix it for free." },
];

const faqs = [
  { q: 'How often should you treat a lawn for weeds?', a: 'We treat your lawn every 5–7 weeks to keep weeds under control year-round and maintain consistent protection.' },
  { q: 'Is it safe for children and pets?', a: 'Yes. Once the application has dried, the lawn is safe for children and pets to return to. Most applications dry within 1–2 hours.' },
  { q: 'What if weeds come back between visits?', a: 'If weeds pop up between visits, we come back and treat them at no extra charge. We provide free service calls to retreat problem areas and keep your lawn weed-free.' },
  { q: 'How long do mosquito treatments last?', a: 'Most mosquito treatments last around 21–30 days depending on weather, rainfall, and mosquito pressure. Monthly applications provide consistent protection.' },
  { q: 'Do you treat St. Augustine, Bermuda, and Zoysia lawns?', a: 'Yes. We service St. Augustine, Bermuda, and Zoysia lawns with grass-specific product selections and timing for healthy growth without damage.' },
  { q: 'How soon will I see results?', a: 'Fertilization results typically appear within 1–2 weeks, while weed control results vary by weed type but generally begin within 7–14 days.' },
  { q: 'Can I mow after a weed control treatment?', a: "It's best to wait 24–48 hours before mowing so the product has time to fully absorb." },
  { q: 'How do you control fleas and ticks?', a: 'We apply targeted outdoor treatments that eliminate adult fleas and ticks while disrupting their life cycles. Treatments focus on shaded areas, pet activity zones, and high-risk locations.' },
];

const areas = ['Arlington', 'Mansfield', 'Grand Prairie', 'Hurst', 'Euless', 'Bedford', 'Colleyville', 'North Richland Hills', 'Richland Hills', 'Watauga', 'Haltom City', 'Kennedale'];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function Home() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey">
        <div className="hero-in">
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>⭐ Lawn Care • Weed Control • Pest Control • Mosquito Control ⭐</span>
            <h1>Welcome To <span className="headline-3d">Hamann Lawn Care &amp; Weed Control</span></h1>
            <p className="hero-sub">North Texas&apos;s trusted name for expert lawn care, weed control, pest control, and mosquito control. We&apos;re local, we&apos;re reliable, and we&apos;re ready to treat your property with <b>science-driven precision</b>.</p>
            <div className="hero-cta">
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, color: '#c9bba4', fontSize: 14, fontWeight: 700 }}>
              <span>✔ Licensed &amp; Insured</span>
              <span>✔ Locally Owned</span>
              <span>✔ ⭐⭐⭐⭐⭐ Google Reviews</span>
            </div>
          </div>
          <div className="hero-art">
            <img src="/pig.png" alt="Hamann the cowboy pig mascot" />
            <div className="stamp"><b>2006</b><span>Serving<br />Since</span></div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="strip">
        <div className="strip-track">
          <span>Free Quotes</span><span>Since 2006</span><span>Locally Owned</span><span>Science-Driven</span><span>Satisfaction Guaranteed</span>
          <span>Free Quotes</span><span>Since 2006</span><span>Locally Owned</span><span>Science-Driven</span><span>Satisfaction Guaranteed</span>
        </div>
      </div>

      {/* CORE SERVICES */}
      <section id="services">
        <div className="wrap">
          <p className="eyebrow">✅ Our Core Services</p>
          <h2 className="sec-h">Proven <span className="o">Lawn Care &amp; Pest Control</span> Solutions</h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>At Hamann, every lawn and yard gets a tailored, science-based treatment plan. Our programs are engineered for North Texas soil, weather, and pest pressure — and no other company offers the advanced products and technology we use. You will notice the Hamann difference.</p>
          <h3 style={{ textAlign: 'center', fontSize: 26, color: 'var(--ink)', margin: '6px 0 34px' }}>🌱 Included In Our Lawn Care Treatments</h3>
          <div className="svc-grid">
            {lawnTreatments.map((s) => (
              <div key={s.name} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{s.ic}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEST & MOSQUITO */}
      <section className="diff" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ paddingTop: 70 }}>
          <p className="eyebrow">🦟 Exterior Pest &amp; Mosquito Control Services</p>
          <h2 className="sec-h">Take Your <span className="o">Backyard Back</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 40 }}>
            {pestServices.map((s) => (
              <div key={s.name} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{s.ic}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why">
        <div className="wrap">
          <p className="eyebrow">🌟 Why Choose Hamann</p>
          <h2 className="sec-h">Why Choose <span className="o">Hamann Lawn Care &amp; Weed Control</span>?</h2>
          <RedLine />
          <ul className="diff-list" style={{ marginTop: 40, maxWidth: 780, marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 18 }}>
            {whyChoose.map((d) => (
              <li key={d.t}><span className="ck">✓</span><span><b>{d.t}</b>{d.d}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* THE HAMANN DIFFERENCE — SCIENCE */}
      <section className="areas honey">
        <div className="wrap diff-in">
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>🧪 The Hamann Difference</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(30px,4.6vw,46px)', marginBottom: 18 }}>Science Meets <span style={{ color: 'var(--orange-lt)' }}>Lawn Care</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 18, lineHeight: 1.7 }}>We&apos;re leading the way in new technology for lawn care and pest control. We use products <b style={{ color: '#fff' }}>nobody else in the area is using</b> — growth hormones, soil amendments, wetting agents, and more. These are the same technologies trusted by golf courses, and you will notice the Hamann difference.</p>
            <div style={{ marginTop: 26 }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Talk To A Lawn Pro</a>
            </div>
          </div>
          <div className="diff-art">
            <img src="/logo.png" alt="Hamann Lawn Care & Weed Control" />
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <p className="eyebrow">Where We Treat</p>
          <h2 className="sec-h">Serving All Of <span className="o">North Texas</span></h2>
          <p className="sec-sub">Proudly serving Arlington and the surrounding DFW communities. Don&apos;t see your town? Give us a holler.</p>
          <div className="area-chips" style={{ marginTop: 0 }}>
            {areas.map((a) => <a key={a} href="#contact" style={{ background: '#fff', borderColor: 'var(--border)', color: 'var(--ink)' }}>📍 {a}, TX</a>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">Straight Answers, No Runaround</p>
          <h2 className="sec-h">Frequently Asked <span className="o">Questions</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }) }}
        />
      </section>

      {/* CTA BAND */}
      <section id="contact" className="cta-band">
        <div className="wrap">
          <h2>💬 Ready For A Lawn That Works As Hard As You Do?</h2>
          <p>Whether you want a lawn that turns heads or a backyard that&apos;s safe for pets and kids, Hamann Lawn Care &amp; Weed Control has you covered. Friendly customer service is always here to help — email, text, or call. Give us a try… you won&apos;t regret it. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
