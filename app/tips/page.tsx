'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const seasons = [
  {
    ic: '🌧️',
    t: 'Spring (March–May)',
    d: 'Spring rainfall normally keeps the soil moist enough that irrigation isn&rsquo;t needed until the heat arrives. Only water if we hit a dry spell. Rotors usually need no watering at all this time of year. If it does go dry: 20&ndash;25 minutes once per week.',
  },
  {
    ic: '☀️',
    t: 'Early Summer (June)',
    d: 'The heat is creeping in, so step it up. Pop-ups: 2&ndash;3 days per week &mdash; 10&ndash;15 minutes per zone. Rotors: 2&ndash;3 days per week &mdash; 25&ndash;30 minutes per zone.',
  },
  {
    ic: '🔥',
    t: 'Mid-Summer (July–August)',
    d: 'This is the heavy-stress period &mdash; the dog days of a North Texas summer. Pop-ups: 3&ndash;4 days per week &mdash; 15&ndash;20 minutes per zone. Rotors: 3&ndash;4 days per week &mdash; 30&ndash;35 minutes per zone.',
  },
  {
    ic: '🍂',
    t: 'Early Fall (September)',
    d: 'As the heat backs off, dial it down a notch. Rotors: 2&ndash;3 days per week &mdash; 25&ndash;30 minutes per zone.',
  },
  {
    ic: '🍁',
    t: 'Fall (October)',
    d: 'Cooler days mean your lawn needs a lot less. Pop-ups: 1&ndash;2 days per week &mdash; 8&ndash;12 minutes per zone. Rotors: 1&ndash;2 days per week &mdash; 20&ndash;25 minutes per zone.',
  },
  {
    ic: '❄️',
    t: 'Winter (November–February)',
    d: 'Give that sprinkler system a rest. Only water if we go 14+ days without rain. Otherwise, Mother Nature has it handled.',
  },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function LawnCareTips() {
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌱 Pro Tips • Arlington &amp; North Texas</span>
            <h1>Lawn &amp; <span className="headline-3d">Yard Tips</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Water Smart • Save Money • Keep It Green All Year</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>North Texas weather doesn&rsquo;t play around &mdash; so neither should your watering schedule. Here&rsquo;s the season-by-season irrigation game plan Hamann uses to keep yards lush from the spring rains straight through the brutal August heat.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Call {PHONE_DISPLAY}</a>
              <button className="btn btn-ghost btn-lg" onClick={openPromo}>Get 50% Off →</button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>The Hamann Watering Guide</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>Two simple rules: <b>pop-up spray heads</b> need shorter, more frequent runs, and <b>rotor heads</b> need longer ones. Adjust by season, lean on the rain when it shows up, and you&rsquo;ll save water without scorching your turf.</p>
        </div>
      </div>

      {/* SEASONAL TIPS */}
      <section>
        <div className="wrap">
          <p className="eyebrow">💧 Season-by-Season</p>
          <h2 className="sec-h">Your North Texas <span className="o">Watering Schedule</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {seasons.map((s) => (
              <div key={s.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{s.ic}</div>
                <h3>{s.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>Want a Yard You Don&rsquo;t Have to Babysit?</h2>
          <p>Let Hamann dial in your irrigation, lawn care, and pest control so your grass stays green and the bugs stay gone. <b>Claim your 50% off first application!</b></p>
          <div className="btns">
            <a className="btn btn-orange btn-lg" href={`tel:${PHONE_TEL}`}>📞 Get Your Free Quote</a>
            <button className="btn btn-ghost btn-lg" onClick={openPromo}>Claim 50% Off</button>
          </div>
        </div>
      </section>
    </main>
  );
}
