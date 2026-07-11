'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const areas = ['Arlington', 'Mansfield', 'Grand Prairie', 'Hurst', 'Euless', 'Bedford', 'Colleyville', 'North Richland Hills', 'Richland Hills', 'Watauga', 'Haltom City', 'Kennedale'];

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 90 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 760 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>📞 We&rsquo;re Ready When You Are</span>
            <h1>Contact <span className="headline-3d">Hamann</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Friendly customer service is always here to help. Call or text for a free, no-pressure quote — and ask about your 50% off first application.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">📞</div><h3>Call or Text</h3><p><a href={`tel:${PHONE_TEL}`} style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>{PHONE_DISPLAY}</a></p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">✉️</div><h3>Email</h3><p><a href="mailto:Kurtis@HamannWeedControl.com" style={{ color: 'var(--orange-dk)', fontWeight: 800, wordBreak: 'break-word' }}>Kurtis@HamannWeedControl.com</a></p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">📍</div><h3>Service Area</h3><p>Arlington &amp; all of North Texas (DFW).</p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">🗓️</div><h3>Family-Owned Since</h3><p>Proudly serving North Texas since 2006.</p></div>
          </div>
        </div>
      </section>

      <section className="areas honey">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: 'var(--orange-lt)' }}>Where We Treat</p>
          <h2 className="sec-h" style={{ color: '#fff' }}>Serving All Of <span style={{ color: 'var(--orange-lt)' }}>North Texas</span></h2>
          <div className="area-chips">
            {areas.map((a) => <a key={a} href="#" >📍 {a}, TX</a>)}
          </div>
        </div>
      </section>

    </main>
  );
}
