'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const services = [
  { ic: '🌱', name: 'Lawn Care', href: '/lawn-care-services', d: 'Science-driven, full-program lawn care for a thick, green Texas lawn.' },
  { ic: '🌿', name: 'Weed Control & Fertilization', href: '/weed-control-and-fertilizer-services', d: 'Kill the weeds, feed the grass — pre & post-emergent plus custom fertilization.' },
  { ic: '🦟', name: 'Mosquito Control', href: '/mosquito-control-services', d: 'Long-lasting barrier treatments that take your backyard back.' },
  { ic: '🐾', name: 'Flea & Tick Control', href: '/flea-and-tick-control', d: 'Powerful outdoor treatments that protect your family and pets.' },
  { ic: '🪲', name: 'Flea Control', href: '/flea-control', d: 'Targeted outdoor flea treatments that break the lifecycle.' },
  { ic: '🍄', name: 'Lawn Disease & Fungus Control', href: '/lawn-disease-and-fungus-control', d: 'Stop brown patch, dollar spot, and root decline before they spread.' },
  { ic: '🌳', name: 'Tree & Shrub Care', href: '/tree-and-shrub-care', d: 'Pruning, feeding, and protection for healthy trees and shrubs.' },
  { ic: '🌲', name: 'Tree Care Services', href: '/tree-care-services', d: 'Trunk-injection insect, fungus, and fertilization — no spray-and-pray.' },
  { ic: '🌸', name: 'Flower Bed Weed Control', href: '/flower-bed-weed-control', d: 'Clean, weed-free flower beds without the back-breaking hand pulling.' },
  { ic: '🪻', name: 'Landscape Bed Weed Control', href: '/landscape-bed-weed-control', d: 'Permanent weed control built for North Texas mulch and rock beds.' },
];

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 90 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 860 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>⭐ Arlington &amp; North Texas Since 2006</span>
            <h1>Our <span className="headline-3d">Services</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>One local company for everything your yard needs — lawn care, weed &amp; pest control, tree &amp; shrub care, and more. Every service backed by science-driven products and a satisfaction guarantee.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">What We Do</p>
          <h2 className="sec-h">Everything Your <span className="o">Yard Needs</span></h2>
          <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 44px' }} />
          <div className="svc-grid">
            {services.map((s) => (
              <a key={s.href} className="svc-card" href={s.href}>
                <div className="svc-top" />
                <div className="svc-ic">{s.ic}</div>
                <h3>{s.name}</h3>
                <p>{s.d}</p>
                <span className="more">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
