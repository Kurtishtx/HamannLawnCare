'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 90 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 780 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🦟 Free, No-Pressure Quotes</span>
            <h1><span className="headline-3d">Mosquito Control Pricing</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Pricing is based on the size of your yard and the areas we treat — foliage, fence lines, and resting zones. Most homes fall into simple flat seasonal pricing. Call or text for your exact price &mdash; and claim 50% off your first application.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p className="eyebrow">How Pricing Works</p>
          <h2 className="sec-h">Simple, <span className="o">Honest Pricing</span></h2>
          <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 40px' }} />
          <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))' }}>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">📏</div><h3>Based On Your Yard</h3><p>Your price is based on the size of your property and the mosquito control you need &mdash; no guesswork.</p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">💸</div><h3>No Hidden Fees</h3><p>Transparent, flat pricing with no surprises. What we quote is what you pay.</p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">🎉</div><h3>50% Off First App</h3><p>New customers save 50% on their first application. Just mention it when you call.</p></div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 30 }}><a href="/mosquito-control-services" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>Learn more about our mosquito control &rarr;</a></p>
        </div>
      </section>

    </main>
  );
}
