'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';
const CITY = "Arlington";
const SERVICE = "Lawn Insect Control";
const nearby = ["Mansfield","Grand Prairie","Hurst","Euless","Bedford","Colleyville"];
const points = [{"ic":"🐜","t":"Targets Lawn-Destroying Insects","d":"We control chinch bugs, armyworms, grubs, and other pests that thin and brown your turf."},{"ic":"🔍","t":"Identify & Treat","d":"We pinpoint which insect is damaging your lawn and apply the right treatment."},{"ic":"🛡️","t":"Protects Turf Health","d":"Stopping insects early keeps your grass thick, green, and strong."},{"ic":"✅","t":"Safe, Precise Application","d":"Applied with professional equipment at safe, label-correct rates."},{"ic":"🗓️","t":"Seasonal Timing","d":"Timed to North Texas insect cycles for maximum control."},{"ic":"📍","t":"Local Since 2006","d":"Family-owned and protecting Arlington lawns for nearly 20 years."}];
const faqs = [{"q":"How do I know if insects are damaging my lawn?","a":"Signs include irregular brown patches, thinning turf, and visible insects at the soil line."},{"q":"Is lawn insect control safe for pets?","a":"Yes. Once the application has dried, the lawn is safe for children and pets."},{"q":"When should lawn insects be treated?","a":"We treat at the right seasonal timing to stop insects before they cause major turf damage."},{"q":"Are lawn insects common in Arlington?","a":"Yes — chinch bugs, armyworms, and grubs are common in North Texas lawns."}];
const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🐜 Serving {CITY} & North Texas Since 2006</span>
            <h1>{SERVICE} In <span className="headline-3d">{CITY}, Texas</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Wipe out the insects destroying your turf. Hamann&rsquo;s lawn insect control protects Arlington lawns from chinch bugs, armyworms, grubs, and more — local since 2006.</p>
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
