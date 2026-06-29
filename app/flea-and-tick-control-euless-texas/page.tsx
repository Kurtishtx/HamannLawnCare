'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';
const CITY = "Euless";
const SERVICE = "Flea & Tick Control";
const nearby = ["Arlington","Mansfield","Grand Prairie","Hurst","Bedford","Colleyville"];
const points = [{"ic":"🎯","t":"Targeted Outdoor Treatment","d":"We treat the shaded areas, pet zones, and high-risk spots in your Euless yard where fleas and ticks actually live."},{"ic":"🔄","t":"Breaks the Lifecycle","d":"Our treatments eliminate adult fleas and ticks while disrupting eggs and larvae so they can't keep coming back."},{"ic":"🐶","t":"Protects Pets & Family","d":"Keep the people and animals you love safe from itchy, disease-carrying pests."},{"ic":"📅","t":"Monthly Protection","d":"Recurring treatments provide the best long-term control, especially for homes with pets."},{"ic":"✅","t":"Safe Once Dry","d":"Professional products applied at safe, label-correct rates — pets return once dry."},{"ic":"📍","t":"Local Since 2006","d":"Family-owned and protecting Euless yards for nearly 20 years."}];
const faqs = [{"q":"How long do flea & tick treatments last?","a":"Most treatments last 30 days. For active infestations or multi-pet households, monthly recurring treatments provide the best control."},{"q":"Is it safe for pets?","a":"Yes. Our products are designed for outdoor use around pets when applied correctly — keep pets off until dry."},{"q":"Do you treat indoors?","a":"We provide outdoor flea & tick control. For indoor infestations, pair our service with a licensed indoor treatment."},{"q":"How soon will I see results in Euless?","a":"Most customers notice a reduction in flea and tick activity within 24–48 hours, with continued improvement after each treatment."}];
const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function Page() {
  const openPromo = () => (window as any).__openPromo?.();
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🐾 Serving {CITY} & North Texas Since 2006</span>
            <h1>{SERVICE} In <span className="headline-3d">{CITY}, Texas</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Protect your family and pets from biting fleas and ticks. Hamann&rsquo;s powerful outdoor flea &amp; tick treatments break the lifecycle and keep Euless yards safe — from a local team serving North Texas since 2006.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
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

      <section className="cta-band">
        <div className="wrap">
          <h2>Keep Euless Pets &amp; Family Bite-Free</h2>
          <p>Powerful outdoor flea &amp; tick control that actually works. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
