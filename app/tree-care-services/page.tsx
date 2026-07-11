'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const protection = [
  { ic: '🐛', t: 'Insect Control', d: '2 years of protection from beetles, aphids, scale, bagworms, and more — delivered straight into the tree.' },
  { ic: '🍄', t: 'Fungus Control', d: '2 years of immunity from oak wilt, root rot, anthracnose, and leaf spot.' },
  { ic: '🌳', t: 'Fertilization', d: '3 years of deep green-up and growth support. This isn&rsquo;t a one-and-done spray — it&rsquo;s a multi-year strategy to keep your trees thriving.' },
];

const insects = [
  { ic: '🪲', t: 'Boring Beetles', d: 'The silent killers. They tunnel through trunks and limbs, cutting off water flow and leaving sawdust trails and dead branches. Got ash, oak, or elm? You&rsquo;re on their hit list. Our injections stop them cold — for 2 full years.' },
  { ic: '🐜', t: 'Aphids', d: 'They suck the life out of leaves and leave behind a sugary mess called honeydew that attracts ants and mold. We inject systemic treatments that wipe out colonies from the inside.' },
  { ic: '🛡️', t: 'Scale Insects', d: 'They look like harmless bumps on bark, but they&rsquo;re sap-sucking parasites that weaken trees and invite disease. We break their grip and restore flow — fast.' },
  { ic: '🎒', t: 'Bagworms', d: 'They build little pinecone-like cocoons and hang from branches, stripping evergreens like cedars and junipers bare. We inject treatments that stop larvae before they hatch.' },
  { ic: '🕸️', t: 'Webworms &amp; Tent Caterpillars', d: 'They spin messy silk tents in pecans, mulberries, and elms, skeletonizing branches. Our injections kill them from the inside out — no ladders, no flame throwers, no drama.' },
  { ic: '🕷️', t: 'Spider Mites &amp; Stipplers', d: 'These microscopic pests thrive in Arlington&rsquo;s heat. They stipple leaves, cause discoloration, and can defoliate trees if left unchecked. Our treatments knock them out before they take over.' },
];

const fungus = [
  { ic: '🌰', t: 'Oak Wilt', d: 'This one&rsquo;s a killer — especially in North Texas. It spreads underground and through beetles, shutting down water flow and killing trees in weeks. We inject fungicides that block transmission and build resistance.' },
  { ic: '💧', t: 'Root Rot', d: 'Overwatering, poor drainage, and compacted soil create the perfect storm. You&rsquo;ll see thinning leaves, stunted growth, and sudden collapse. We target the infection and stimulate recovery.' },
];

const faqs = [
  { q: 'Do you spray my trees?', a: 'No. We use Arborjet trunk injections that deliver targeted treatments directly into the tree&rsquo;s vascular system. No spraying, no runoff, no wasted product — just long-lasting protection that works from the inside out.' },
  { q: 'How long does insect protection last?', a: 'Our trunk injections deliver 2 years of protection from beetles, aphids, scale, bagworms, and more.' },
  { q: 'How long does fungus protection last?', a: 'Our fungus treatments provide 2 years of immunity from oak wilt, root rot, anthracnose, and leaf spot.' },
  { q: 'How long does the fertilization last?', a: 'Our fertilization injections deliver up to 3 years of deep green-up and growth support.' },
  { q: 'Can you treat oak wilt?', a: 'Yes. Oak wilt is a killer in North Texas — it spreads underground and through beetles, killing trees in weeks. We inject fungicides that block transmission and build resistance.' },
  { q: 'Why injections instead of spraying?', a: 'Spraying causes runoff and wasted product, and it doesn&rsquo;t reach the problem. Injections deliver the treatment right into the tree&rsquo;s vascular system for long-lasting protection from the inside out.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function TreeCareServices() {

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌳 Tree Care Services • Arlington &amp; North Texas Since 2006</span>
            <h1>We Don&rsquo;t Mulch. We <span className="headline-3d">Inject Life</span> Back Into Your Trees</h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>Arborjet Trunk Injections • No Spraying • No Runoff • No Drama</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>Texas doesn&rsquo;t go easy on your trees. From boring beetles tunneling through your oaks to aphids draining your maples, your trees are under constant attack. We deliver targeted treatments straight into the tree&rsquo;s vascular system — <b>long-lasting protection that works from the inside out.</b></p>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>What We Do (And Why It Works)</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>If you&rsquo;ve got trees in Arlington, you&rsquo;ve got enemies — not because trees are fragile, but because Texas weather, soil, and pests are relentless. We use <b>Arborjet trunk injections</b> to fight back at the source. No spraying ✔ No runoff ✔ No wasted product ✔ Just results.</p>
        </div>
      </div>

      {/* PROTECTION / BENEFITS */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Multi-Year Protection, <span className="o">From The Inside Out</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>This isn&rsquo;t a one-and-done spray. It&rsquo;s a multi-year strategy to keep your trees thriving.</p>
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', maxWidth: 980, marginLeft: 'auto', marginRight: 'auto' }}>
            {protection.map((f) => (
              <div key={f.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{f.ic}</div>
                <h3>{f.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: f.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSECTS WE SHUT DOWN */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">Bug Off</p>
          <h2 className="sec-h">Insects We <span className="o">Shut Down</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>Our injections wipe out colonies from the inside — no ladders, no flame throwers, no drama.</p>
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {insects.map((f) => (
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

      {/* FUNGUS */}
      <section>
        <div className="wrap">
          <p className="eyebrow">🍄 Not On Our Watch</p>
          <h2 className="sec-h">Fungus? <span className="o">We Stop It Cold</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            {fungus.map((f) => (
              <div key={f.t} className="svc-card">
                <div className="svc-top" style={{ background: 'var(--red)' }} />
                <div className="svc-ic">{f.ic}</div>
                <h3>{f.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: f.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INJECTIONS */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Why Trunk Injections Win</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Straight To The <span style={{ color: 'var(--orange-lt)' }}>Source</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>We use Arborjet trunk injections to deliver targeted treatments directly into the tree&rsquo;s vascular system. No spraying. No runoff. No wasted product. Just long-lasting protection that works from the inside out — protecting your oaks, maples, pecans, cedars, and more.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Built For Texas</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Relentless Pests, <span style={{ color: 'var(--orange-lt)' }}>Relentless Defense</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Texas weather, soil, and pests are relentless — so we are too. From boring beetles and oak wilt to spider mites thriving in Arlington&rsquo;s heat, we shut down the threats other companies miss. Insect control for 2 years, fungus control for 2 years, and fertilization for 3 years of green-up.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Tree Care FAQs</p>
          <h2 className="sec-h">Your Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}><summary dangerouslySetInnerHTML={{ __html: f.q }} /><div className="faq-a" dangerouslySetInnerHTML={{ __html: f.a }} /></details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q.replace(/&rsquo;/g, '’').replace(/&amp;/g, '&'), acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/&rsquo;/g, '’').replace(/&amp;/g, '&') } })) }) }} />
      </section>

      {/* CTA */}
    </main>
  );
}
