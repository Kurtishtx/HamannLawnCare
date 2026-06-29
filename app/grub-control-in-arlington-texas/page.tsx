'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';
const CITY = "Arlington";
const SERVICE = "Grub Control";
const nearby = ["Mansfield","Grand Prairie","Hurst","Euless","Bedford","Colleyville"];
const points = [{"ic":"🐛","t":"Stops Root-Feeding Grubs","d":"We eliminate grubs before they damage turf density and soil structure."},{"ic":"🌱","t":"Protects Your Roots","d":"Grubs feed on grass roots underground — our treatment stops the damage at the source."},{"ic":"🛡️","t":"Preventive & Curative","d":"Whether you have an active problem or want to prevent one, we time treatments for maximum impact."},{"ic":"✅","t":"Safe, Precise Application","d":"Applied with professional equipment at safe, label-correct rates."},{"ic":"🗓️","t":"Seasonal Timing","d":"Applied at the right time of year to break the grub lifecycle in North Texas."},{"ic":"📍","t":"Local Since 2006","d":"Family-owned and protecting Arlington lawns for nearly 20 years."}];
const faqs = [{"q":"How do I know if I have grubs?","a":"Signs include spongy turf, brown patches that lift easily, and increased birds or animals digging in the lawn."},{"q":"Is grub control safe for pets?","a":"Yes. Once the application has dried, the lawn is safe for children and pets."},{"q":"When should grubs be treated?","a":"We apply treatments at the right seasonal timing to stop grubs before they cause major damage."},{"q":"Do Arlington lawns commonly get grubs?","a":"Yes — grubs are common in North Texas turf, especially in warm, irrigated lawns."}];
const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function Page() {
  const openPromo = () => (window as any).__openPromo?.();
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🐛 Serving {CITY} & North Texas Since 2006</span>
            <h1>{SERVICE} In <span className="headline-3d">{CITY}, Texas</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Stop root-feeding grubs before they destroy your turf. Hamann&rsquo;s grub control protects Arlington lawns from the hidden insects that thin grass and weaken roots — local since 2006.</p>
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
          <h2>Protect Arlington Turf From Grubs</h2>
          <p>Stop root-feeding grubs before they ruin your lawn. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
