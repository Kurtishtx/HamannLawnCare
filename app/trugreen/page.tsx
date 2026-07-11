'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const differences = [
  { ic: '🏡', t: 'Local &amp; Family-Owned Since 2006', d: 'We&rsquo;re an Arlington family that has cared for North Texas lawns for nearly two decades. When you call Hamann, you reach the family who actually owns the company &mdash; not a national call center three states away.' },
  { ic: '🤝', t: 'The Same Friendly Crew Every Visit', d: 'You&rsquo;ll get to know your technician by name. The same trusted faces treat your yard every time, so they know your lawn, your dog&rsquo;s name, and exactly what your property needs.' },
  { ic: '⛳', t: 'Premium Golf-Course-Grade Products', d: 'We use the same professional-grade chemistry trusted by golf courses and commercial properties &mdash; longer-lasting protection and stronger results than the standard treatments you&rsquo;ll find on a national route.' },
  { ic: '🔁', t: 'Free Retreats Between Visits', d: 'Notice weeds or pests popping up between scheduled services? We come back and retreat your lawn for free. No arguing, no upcharge &mdash; we just make it right.' },
  { ic: '💵', t: 'Transparent Flat Pricing &mdash; No Hidden Fees', d: 'Honest, upfront pricing with no surprise add-ons buried in the fine print. You know what you&rsquo;re paying before we ever start, and the price we quote is the price you pay.' },
  { ic: '✅', t: 'Iron-Clad Satisfaction Guarantee', d: 'If you&rsquo;re not happy, we&rsquo;re not done. Our satisfaction guarantee means we keep working until your lawn looks the way you want it &mdash; that&rsquo;s the Texas handshake way.' },
  { ic: '📍', t: 'Real Local Accountability', d: 'We live and work right here in North Texas. Our reputation is built one neighbor at a time, so we treat every yard like it&rsquo;s on our own street &mdash; because chances are, it&rsquo;s close.' },
  { ic: '📞', t: 'Talk To A Real Person', d: 'Got a question? You&rsquo;ll talk to someone local who knows your account &mdash; not an automated menu or a script. Fast answers from people who actually care.' },
  { ic: '🌱', t: 'Programs Built For North Texas', d: 'Our treatment schedule is tuned to Arlington soil, weather, and grass types &mdash; not a one-size-fits-all national plan designed for a map you&rsquo;re not even on.' },
];

const faqs = [
  { q: 'Is a local company really better than a big national company?', a: 'For most homeowners, yes. A local, family-owned company gives you the same crew every visit, faster response times, free retreats, and an owner who answers the phone. National chains can be great at scale, but you often get rotating technicians, call centers, and rigid plans. We compete by being accountable to our neighbors.' },
  { q: 'Are your products as good as the big guys&rsquo;?', a: 'They&rsquo;re better than standard treatments. We use premium, golf-course-grade products trusted by commercial properties and courses &mdash; the same professional chemistry that delivers longer-lasting, stronger results. We never cut corners on what goes on your lawn.' },
  { q: 'Will I pay more by going local?', a: 'Usually not &mdash; and you avoid the hidden fees. We offer transparent flat pricing with no surprise add-ons, free retreats between visits, and a satisfaction guarantee. When you factor in the free retreats and premium products, local is a genuinely great value.' },
  { q: 'What if I&rsquo;m already locked into a contract?', a: 'Give us a call &mdash; we&rsquo;ll help you understand your options and make switching simple. Plenty of our customers came to us from a national chain, and we make the transition painless so your lawn never misses a beat.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function TruGreenComparison() {

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🤠 Hamann vs TruGreen • Arlington &amp; North Texas</span>
            <h1>Hamann <span className="headline-3d">vs TruGreen</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Why North Texas Chooses Local</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Comparing the big national chain to your local lawn pros? Here&rsquo;s the honest truth: Hamann is family-owned in Arlington since 2006, we send the <b>same friendly crew every visit</b>, and we use <b>premium golf-course-grade products</b> &mdash; backed by free retreats, flat pricing, and a satisfaction guarantee.</p>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Big Enough To Deliver. Local Enough To Care.</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>National chains have their place &mdash; but North Texas homeowners keep choosing Hamann for the personal touch. Same crew ✔ Premium products ✔ Free retreats ✔ Flat pricing ✔ A real local owner who stands behind every blade of grass.</p>
        </div>
      </div>

      {/* WHAT SETS HAMANN APART */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Difference</p>
          <h2 className="sec-h">What Sets Hamann <span className="o">Apart From The Big Chains</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {differences.map((f) => (
              <div key={f.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{f.ic}</div>
                <h3 dangerouslySetInnerHTML={{ __html: f.t }} />
                <p dangerouslySetInnerHTML={{ __html: f.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL VS NATIONAL */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>The Local Advantage</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Your Neighbors, <span style={{ color: 'var(--orange-lt)' }}>Not A Call Center</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>When you choose Hamann, you get the same trusted crew every visit, an owner who answers the phone, free retreats between services, and a treatment plan built for North Texas soil and weather. We&rsquo;ve earned our reputation one Arlington yard at a time since 2006.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Honest &amp; Fair</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>No Hidden Fees, <span style={{ color: 'var(--orange-lt)' }}>No Surprises</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Big national chains do plenty of lawns &mdash; but homeowners tell us they came to us for transparent flat pricing, premium golf-course-grade products, and a satisfaction guarantee that actually means something. If you&rsquo;re not happy, we keep working until you are.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Hamann vs TruGreen FAQs</p>
          <h2 className="sec-h">Your Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary dangerouslySetInnerHTML={{ __html: f.q }} />
                <div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }} />
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q.replace(/&rsquo;/g, '’'), acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/&rsquo;/g, '’').replace(/&mdash;/g, '—') } })) }) }} />
      </section>

      {/* CTA */}
    </main>
  );
}
