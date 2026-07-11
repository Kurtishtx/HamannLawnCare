'use client';
import { useState } from 'react';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';
const LEAD_ACCOUNT = '951ab5cd-c78a-4d90-9015-30f7c2197ac5';
const LEAD_FN = 'https://knjdbgroiyhvqwrpqzcx.supabase.co/functions/v1/submit-web-lead';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '13px 15px', border: '3px solid var(--ink)', borderRadius: 12,
  fontSize: 16, fontFamily: 'inherit', background: '#fff', marginBottom: 12, boxSizing: 'border-box', color: 'var(--text)',
};

function EstimateForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [err, setErr] = useState('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(''); setStatus('sending');
    const form = e.currentTarget;
    const d: Record<string, string> = { account: LEAD_ACCOUNT };
    Array.from(form.elements).forEach((el) => {
      const i = el as HTMLInputElement;
      if (i.name) d[i.name] = i.value;
    });
    try {
      const r = await fetch(LEAD_FN, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      const res = await r.json();
      if (res && res.ok) setStatus('done');
      else { setErr((res && res.error) || 'Something went wrong. Please try again.'); setStatus('idle'); }
    } catch { setErr('Network error. Please try again.'); setStatus('idle'); }
  }

  if (status === 'done') {
    return (
      <div style={{ background: 'var(--paper)', border: '3px solid var(--ink)', borderRadius: 18, boxShadow: '6px 6px 0 var(--orange-dk)', padding: '40px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 52 }}>🎉</div>
        <h3 style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 28, color: 'var(--ink)', margin: '8px 0 6px' }}>Request Received!</h3>
        <p style={{ color: 'var(--muted)', fontSize: 16 }}>Thanks! We&rsquo;ll reach out shortly about your free estimate &mdash; and your 50% off first application.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ background: 'var(--paper)', border: '3px solid var(--ink)', borderRadius: 18, boxShadow: '6px 6px 0 var(--orange-dk)', padding: '26px 24px' }}>
      <input style={inputStyle} type="text" name="name" placeholder="Full Name *" required />
      <input style={inputStyle} type="email" name="email" placeholder="Email *" required />
      <input style={inputStyle} type="tel" name="phone" placeholder="Phone *" required />
      <input style={inputStyle} type="text" name="address" placeholder="Street Address" />
      <div style={{ display: 'flex', gap: 10 }}>
        <input style={inputStyle} type="text" name="city" placeholder="City" />
        <input style={{ ...inputStyle, maxWidth: 90 }} type="text" name="state" placeholder="State" />
        <input style={{ ...inputStyle, maxWidth: 110 }} type="text" name="zip" placeholder="ZIP" />
      </div>
      <input style={inputStyle} type="text" name="service_interest" placeholder="Service(s) interested in" />
      <select style={inputStyle} name="hear_about" defaultValue="">
        <option value="">How did you hear about us?</option>
        <option>Google</option>
        <option>Facebook</option>
        <option>Referral</option>
        <option>Yard sign</option>
        <option>Other</option>
      </select>
      <textarea style={{ ...inputStyle, minHeight: 90 }} name="message" placeholder="Anything else we should know? (gate code, pets, problem areas…)" />
      <input type="text" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999 }} />
      {err && <p style={{ color: 'var(--red)', fontWeight: 700, marginBottom: 10 }}>{err}</p>}
      <button type="submit" className="btn btn-orange btn-lg" style={{ width: '100%' }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : '🌿 Request My Free Estimate'}
      </button>
    </form>
  );
}

const steps = [
  { n: '1', t: 'Call, Text Or Email Us', d: 'Reach out at (682) 408-9013 or Kurtis@HamannWeedControl.com — friendly service, no pressure, no runaround.' },
  { n: '2', t: 'We Look At Your Yard', d: 'We assess your lawn, weeds, and pest pressure and build the right program for your property.' },
  { n: '3', t: 'Get Your Free Quote', d: 'Clear, transparent pricing with no hidden fees — plus 50% off your first application.' },
];

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 90 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 800 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🎉 50% Off Your First Application</span>
            <h1>Get Your <span className="headline-3d">Free Estimate</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Whether you want a lawn that turns heads or a backyard that&rsquo;s safe for pets and kids, Hamann has you covered. Call or text for a free, no-pressure quote — and claim your 50% off first application.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 90, marginTop: -50 }}>
        <div className="wrap" style={{ maxWidth: 620 }}>
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <p className="eyebrow">Request Online</p>
            <h2 className="sec-h">Get Your <span className="o">Free Quote</span></h2>
            <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />
          </div>
          <EstimateForm />
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="sec-h">Three Easy <span className="o">Steps</span></h2>
          <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 40px' }} />
          <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', color: '#fff', border: '2px solid var(--ink)', fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>{s.t}</b><span style={{ color: 'var(--muted)' }}>{s.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
