'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';
const CITY = "Watauga";
const SERVICE = "Weed Control & Fertilization";
const nearby = ["Arlington","Mansfield","Grand Prairie","Hurst","Euless","Bedford"];
const points = [{"ic":"🌿","t":"Pre + Post-Emergent Control","d":"We prevent new weeds before they sprout and eliminate existing ones — a complete program at the right seasonal timing."},{"ic":"🌾","t":"Custom Fertilization","d":"Nutrient-rich blends engineered for North Texas turf to deepen color, strengthen roots, and thicken your lawn."},{"ic":"🌱","t":"Grass-Specific Programs","d":"Tailored product selection for St. Augustine, Bermuda, and Zoysia lawns common in Watauga."},{"ic":"🔁","t":"Free Retreats Between Visits","d":"If weeds pop up between treatments, we come back and treat them at no extra charge."},{"ic":"🗓️","t":"Treated Every 5–7 Weeks","d":"Consistent, perfectly-timed applications keep weeds down and turf healthy all year."},{"ic":"📍","t":"Local Since 2006","d":"Family-owned and greening up Watauga lawns for nearly 20 years."}];
const faqs = [{"q":"How often should my lawn be treated for weeds?","a":"We treat your lawn every 5–7 weeks to keep weeds under control year-round and maintain consistent protection."},{"q":"How soon will I see results?","a":"Fertilization results typically appear within 1–2 weeks, while weed control results generally begin within 7–14 days."},{"q":"Can I mow after a treatment?","a":"It's best to wait 24–48 hours before mowing so the product has time to fully absorb."},{"q":"Will weed control hurt my grass?","a":"No. Our products are designed for St. Augustine, Bermuda, and Zoysia lawns and applied at safe, label-correct rates."}];
const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function Page() {
  const openPromo = () => (window as any).__openPromo?.();
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌿 Serving {CITY} & North Texas Since 2006</span>
            <h1>{SERVICE} In <span className="headline-3d">{CITY}, Texas</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Kill the weeds, feed the grass. Hamann&rsquo;s science-based weed control and fertilization program gives Watauga lawns a thick, green, weed-free look year-round — engineered for North Texas turf since 2006.</p>
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
          <h2>Give Watauga The Best Lawn On The Block</h2>
          <p>Science-driven weed control and fertilization that delivers. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
