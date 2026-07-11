'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';
const CITY = "Watauga";
const SERVICE = "Mosquito Control";
const nearby = ["Arlington","Mansfield","Grand Prairie","Hurst","Euless","Bedford"];
const points = [{"ic":"🏆","t":"Golf-Course-Grade Products","d":"The same premium technology trusted by golf courses — longer protection with fewer applications for Watauga yards."},{"ic":"⚡","t":"Fast-Acting Knockdown","d":"We reduce active mosquito populations within hours — not days — so you can enjoy your yard again fast."},{"ic":"🛡️","t":"Long-Lasting Barrier","d":"Our residual barrier keeps working for weeks, stopping new mosquitoes from taking over your Watauga property."},{"ic":"🗓️","t":"Just 7 Visits a Year","d":"While competitors spray every 21 days, we protect you with 7 stronger applications spaced every 5–6 weeks."},{"ic":"✅","t":"Safe for Family & Pets","d":"Applied with professional equipment and safe for kids and pets once dry."},{"ic":"📍","t":"Local Since 2006","d":"Family-owned and treating Watauga and North Texas yards for nearly 20 years."}];
const faqs = [{"q":"How long do mosquito treatments last?","a":"Around 45 days depending on weather and mosquito pressure."},{"q":"Is it safe for pets?","a":"Yes — once dry, pets and children can return to treated areas."},{"q":"Do you offer recurring mosquito control in Watauga?","a":"Yes. For consistent season-long protection, our recurring program treats every 5–6 weeks from spring through fall."},{"q":"Does it help with other pests?","a":"Yes — it also reduces gnats, no-see-ums, and other biting insects."}];
const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🦟 Serving {CITY} & North Texas Since 2006</span>
            <h1>{SERVICE} In <span className="headline-3d">{CITY}, Texas</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Take your backyard back. Hamann delivers premium, long-lasting mosquito control for Watauga homes — golf-course-grade products, fewer applications, and a local crew that&rsquo;s treated North Texas yards since 2006.</p>
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
