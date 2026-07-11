'use client';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const features = [
  { ic: '⚡', t: 'Fast-Acting Adulticide', d: 'A premium product designed to kill adult fleas and ticks on contact, leaving behind a protective residue that keeps working between visits and holds up against rain, irrigation, and heat.' },
  { ic: '🛡️', t: 'Insect Growth Regulator (IGR)', d: 'We stop eggs and larvae from developing into biting adults. By breaking the life cycle, we shut down infestations before they ever start.' },
  { ic: '🔄', t: 'Dual Mode of Action', d: 'To prevent resistance, we rotate between different active ingredients. This keeps treatments effective long-term and stops pests from adapting.' },
  { ic: '🎯', t: 'Targeted High-Risk Zones', d: 'We treat shaded areas, perimeter zones, and pest harborage sites — the exact places where fleas and ticks hide and breed.' },
  { ic: '🐾', t: 'Pet-Conscious Scheduling', d: 'Pet-conscious scheduling and safety guidelines keep the whole family protected, and we coordinate with your veterinarian’s recommendations when needed.' },
];

const steps = [
  { n: '1', t: 'Adulticide Application', d: 'A premium product kills adult fleas and ticks on contact and leaves a protective residue that keeps working between visits.' },
  { n: '2', t: 'Insect Growth Regulator (IGR)', d: 'We prevent eggs and larvae from developing into biting adults — breaking the life cycle to stop infestations before they start.' },
  { n: '3', t: 'Dual Mode of Action', d: 'We rotate between different active ingredients to prevent resistance and keep treatments effective long-term.' },
  { n: '4', t: 'Targeted Treatment of Hot Spots', d: 'We hit shaded areas, perimeter zones, and pest harborage sites where fleas and ticks thrive.' },
  { n: '5', t: 'Eight Treatments Per Year', d: 'Spaced every 5–6 weeks, our program means no gaps in coverage — a stable barrier that builds stronger with each visit.' },
];

const faqs = [
  { q: 'Why does flea and tick control matter?', a: 'Fleas and ticks are more than simple pests — they’re known carriers of harmful pathogens that can affect both humans and animals, including Babesiosis, Tularemia, Alpha-gal syndrome, Borrelia miyamotoi, tapeworms, cat scratch fever, Mycoplasma haemofelis, and typhoid. Without a professional plan, they multiply quickly and turn your yard into a breeding ground.' },
  { q: 'How many treatments will I get?', a: 'Our program includes eight treatments per year, spaced every five to six weeks. That means no gaps in coverage, continuous suppression of pest populations, and strong protection during peak seasons.' },
  { q: 'Why not just use store-bought sprays?', a: 'Store-bought sprays and powders may offer temporary relief, but they rarely address the full life cycle or provide long-term protection. They also lack the strength, coverage, and durability of professional-grade products.' },
  { q: 'Are your treatments safe for pets?', a: 'Yes — your pets are part of your family, and their safety is a top priority. Our treatments are designed with pet safety in mind, and we’ll guide you on how to manage pets before and after service and coordinate with your veterinarian’s recommendations if needed.' },
  { q: 'Do you offer one-time or full-season options?', a: 'Both. Whether you need a one-time flea treatment or a full-season tick control program, we offer flexible plans that fit your property size, layout, and pest pressure.' },
];

const RedLine = () => <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />;

export default function FleaAndTickControl() {

  return (
    <main>
      {/* HERO */}
      <section className="hero honey" style={{ paddingBottom: 96 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 880 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🐜 Flea &amp; Tick Control • Arlington &amp; North Texas Since 2006</span>
            <h1>Professional <span className="headline-3d">Flea &amp; Tick Control</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 10px', fontWeight: 700, color: '#fff' }}>We Kill the Adults &amp; Stop the Eggs From Hatching • Guaranteed Results</p>
            <p className="hero-sub" style={{ margin: '0 auto 26px' }}>We don&rsquo;t just knock down adult fleas and ticks — <b>we stop the eggs, larvae, and future generations before they ever become a problem.</b> Our program delivers strong, long-lasting protection across your entire property, keeping your yard comfortable, your pets protected, and your outdoor spaces safe all season long.</p>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <div className="strip" style={{ padding: '22px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 26, textShadow: '2px 2px 0 var(--orange-dk)' }}>Reliable Protection For Your Home &amp; Yard</h2>
          <p style={{ color: '#fff', fontWeight: 700, maxWidth: 760, margin: '8px auto 0' }}>Warm weather, moisture, shaded areas, and everyday outdoor activity create ideal conditions for fleas and ticks to thrive. These pests aren&rsquo;t just irritating — they&rsquo;re persistent, fast-reproducing, and capable of spreading serious diseases to both pets and people. That&rsquo;s why our program is built to deliver strong, long-lasting protection.</p>
        </div>
      </div>

      {/* PROVEN TREATMENT SYSTEM */}
      <section>
        <div className="wrap">
          <p className="eyebrow">⭐ The Hamann Advantage</p>
          <h2 className="sec-h">Our Proven <span className="o">Treatment System</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>We use a strategic combination of fast-acting adulticides and long-lasting insect growth regulators to eliminate active pests and stop future generations.</p>
          <div className="svc-grid" style={{ marginTop: 44 }}>
            {features.map((f) => (
              <div key={f.t} className="svc-card">
                <div className="svc-top" />
                <div className="svc-ic">{f.ic}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="diff">
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="sec-h">Our Flea &amp; Tick Control <span className="o">Process</span></h2>
          <RedLine />
          <p className="sec-sub" style={{ marginTop: 18 }}>We don&rsquo;t just spray and leave — we eliminate fleas and ticks at every stage of their lifecycle.</p>
          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>{s.t}</b><span style={{ color: 'var(--muted)' }}>{s.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EIGHT TREATMENTS */}
      <section>
        <div className="wrap">
          <p className="eyebrow">Season-Long Coverage</p>
          <h2 className="sec-h">Eight Treatments Per Year — <span className="o">Consistent Protection</span></h2>
          <RedLine />
          <div className="svc-grid" style={{ marginTop: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">🚫</div><h3>No Gaps in Coverage</h3><p>Eight treatments per year, spaced every five to six weeks, mean continuous suppression of pest populations.</p></div>
            <div className="svc-card"><div className="svc-top" style={{ background: 'var(--red)' }} /><div className="svc-ic">📈</div><h3>A Barrier That Builds</h3><p>Strong protection during peak seasons and a stable barrier that gets tougher with every single visit.</p></div>
            <div className="svc-card"><div className="svc-top" /><div className="svc-ic">🎯</div><h3>Reliable, Proven Results</h3><p>This consistent approach is one of the reasons our flea and tick control program delivers such dependable results.</p></div>
          </div>
        </div>
      </section>

      {/* WHY DIY FALLS SHORT + EXPERT CARE */}
      <section className="areas honey">
        <div className="wrap diff-in" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Why Professional Beats DIY</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Why DIY Products <span style={{ color: 'var(--orange-lt)' }}>Fall Short</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Store-bought sprays and powders may offer temporary relief, but they rarely address the full life cycle or provide long-term protection. Our technicians are trained to identify early signs of infestation, target high-risk areas, adjust treatments based on seasonal changes, and apply products with precision and consistency. That&rsquo;s the kind of accuracy you can&rsquo;t get from a DIY approach.</p>
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left', color: 'var(--orange-lt)' }}>Expert Care You Can Depend On</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 16 }}>Tailored To <span style={{ color: 'var(--orange-lt)' }}>Your Property</span></h2>
            <p style={{ color: '#e7dccb', fontSize: 16, lineHeight: 1.8 }}>Our team understands pest behavior, environmental conditions, and the factors that drive flea and tick activity. Every treatment is tailored to your property&rsquo;s needs, ensuring fast knockdown and long-lasting results. We take pride in dependable service, clear communication, and a pest-free outdoor experience.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <p className="eyebrow">💬 Flea &amp; Tick Control FAQs</p>
          <h2 className="sec-h">Your Questions, <span className="o">Answered</span></h2>
          <RedLine />
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}><summary>{f.q}</summary><div className="faq-a">{f.a}</div></details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      </section>

      {/* CTA */}
            <section style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <p className="eyebrow">From Our Blog</p>
          <h2 className="sec-h">Learn More About <span className="o">Flea &amp; Tick Control</span></h2>
          <div className="bi-grid" style={{ marginTop: 36 }}>
            <a className="bi-card" href="/blogs/how-flea-treatments-work-adulticide-igr-and-residual-protection-explained"><h3>How Flea Treatments Work Adulticide Igr and Residual Protection Explained</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-long-flea-treatments-last-and-what-affects-their-duration"><h3>How Long Flea Treatments Last and What Affects Their Duration</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/why-fleas-keep-coming-back-the-real-causes-of-reinfestations"><h3>Why Fleas Keep Coming Back the Real Causes of Reinfestations</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/indoor-vs-outdoor-flea-control-what-homeowners-need-to-know"><h3>Indoor vs Outdoor Flea Control What Homeowners Need to Know</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/how-weather-shade-and-wildlife-affect-flea-pressure-in-your-yard"><h3>How Weather Shade and Wildlife Affect Flea Pressure in Your Yard</h3><span>Read more &rarr;</span></a>
            <a className="bi-card" href="/blogs/flea-eggs-larvae-and-pupae-where-they-hide-in-your-yard"><h3>Flea Eggs Larvae and Pupae Where They Hide in Your Yard</h3><span>Read more &rarr;</span></a>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}><a href="/blogs" style={{ color: 'var(--orange-dk)', fontWeight: 800 }}>View all lawn &amp; pest articles &rarr;</a></p>
        </div>
      </section>

    </main>
  );
}
