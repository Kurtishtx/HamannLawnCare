'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';
const CITY = "Grand Prairie";
const SERVICE = "Lawn Disease & Fungus Control";
const nearby = ["Arlington","Mansfield","Hurst","Euless","Bedford","Colleyville"];
const points = [{"ic":"🛡️","t":"Preventive & Curative Fungicides","d":"Full-rate treatments that stop brown patch, dollar spot, gray leaf spot, and take-all root rot."},{"ic":"🔍","t":"Accurate Diagnosis","d":"We identify whether you have fungus or heat stress — and treat the real problem."},{"ic":"💧","t":"Root-Level Protection","d":"We protect turf before disease weakens roots and spreads across your lawn."},{"ic":"🌱","t":"Grass-Specific Care","d":"Tailored to St. Augustine, Bermuda, and Zoysia lawns common in Grand Prairie."},{"ic":"🗓️","t":"Seasonal Timing","d":"Disease spreads fast in North Texas heat and humidity — we time treatments to get ahead of it."},{"ic":"📍","t":"Local Since 2006","d":"Family-owned and saving Grand Prairie lawns for nearly 20 years."}];
const faqs = [{"q":"How do I know if my lawn has fungus?","a":"Common signs are circular brown patches, yellowing, and spots that spread quickly — often confused with heat stress."},{"q":"Is fungus treatment safe for pets?","a":"Yes. Once the application has dried, the lawn is safe for children and pets."},{"q":"Why does lawn fungus keep coming back?","a":"Fungus returns with watering mistakes, mowing habits, shade, and humidity — we treat and help correct the conditions."},{"q":"Does fungus spread fast in Grand Prairie?","a":"Yes — North Texas heat and humidity cause lawn disease to spread quickly, so early treatment is critical."}];
const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🍄 Serving {CITY} & North Texas Since 2006</span>
            <h1>{SERVICE} In <span className="headline-3d">{CITY}, Texas</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Stop brown patch, dollar spot, and root decline before they spread. Hamann&rsquo;s full-rate fungicide program protects Grand Prairie lawns from costly turf disease — local since 2006.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Why {CITY} Chooses Hamann</p>
          <h2 className="sec-h">The Best {SERVICE} In <span className="o">{CITY}</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {points.map((p) => (
              <div key={p.t} className="svc-card"><div className="svc-top" /><div className="svc-ic">{p.ic}</div><h3>{p.t}</h3><p>{p.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="areas honey">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: 'var(--orange-lt)' }}>One Call Away</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>Serving {CITY} &amp; <span style={{ color: 'var(--orange-lt)' }}>Nearby Towns</span></h2>
          <p className="sec-sub" style={{ color: '#d8c9b2' }}>Proudly serving {CITY} and the surrounding North Texas communities.</p>
          <div className="area-chips">
            <a href="#" style={{ background: 'var(--orange)', borderColor: 'var(--orange)', color: '#fff' }}>📍 {CITY}, TX</a>
            {nearby.map((n) => <a key={n} href="#">📍 {n}, TX</a>)}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 {SERVICE} FAQs</p>
          <h2 className="sec-h">{CITY} Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (<details className="faq-item" key={f.q}><summary>{f.q}</summary><div className="faq-a">{f.a}</div></details>))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      </section>

    </main>
  );
}
