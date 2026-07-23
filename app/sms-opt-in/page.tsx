'use client';
import { useState } from 'react';

// Dedicated SMS opt-in page for A2P 10DLC review: no payment step, no purchase,
// consent is the sole purpose of the form. Referenced in the campaign message_flow.

const LEAD_ACCOUNT = '951ab5cd-c78a-4d90-9015-30f7c2197ac5';
const LEAD_FN = 'https://knjdbgroiyhvqwrpqzcx.supabase.co/functions/v1/submit-web-lead';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '13px 15px', border: '3px solid var(--ink)', borderRadius: 12,
  fontSize: 16, fontFamily: 'inherit', background: '#fff', marginBottom: 12, boxSizing: 'border-box', color: 'var(--text)',
};

function OptInForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [err, setErr] = useState('');
  const [consent, setConsent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr('');
    if (!consent) { setErr('Please check the consent box to opt in to text messages.'); return; }
    setStatus('sending');
    const form = e.currentTarget;
    const d: Record<string, string> = { account: LEAD_ACCOUNT, source: 'sms-opt-in' };
    Array.from(form.elements).forEach((el) => {
      const i = el as HTMLInputElement;
      if (i.name) d[i.name] = i.type === 'checkbox' ? (i.checked ? 'true' : 'false') : i.value;
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
        <div style={{ fontSize: 52 }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 28, color: 'var(--ink)', margin: '8px 0 6px' }}>You&rsquo;re Opted In!</h3>
        <p style={{ color: 'var(--muted)', fontSize: 16 }}>
          You&rsquo;ll now receive service text messages from Hamann Lawn Care &amp; Exterior Pest Control at the number you provided.
          Message frequency varies. Msg &amp; data rates may apply. Reply <b>STOP</b> at any time to opt out, or <b>HELP</b> for help.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ background: 'var(--paper)', border: '3px solid var(--ink)', borderRadius: 18, boxShadow: '6px 6px 0 var(--orange-dk)', padding: '26px 24px' }}>
      <input style={inputStyle} type="text" name="name" placeholder="Full Name *" required />
      <input style={inputStyle} type="tel" name="phone" placeholder="Mobile Phone *" required />
      <input style={inputStyle} type="email" name="email" placeholder="Email (optional)" />
      <input type="text" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999 }} />

      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', margin: '4px 0 10px', fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.5, fontWeight: 600 }}>
        <input
          type="checkbox"
          name="sms_consent_transactional"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: 3, flexShrink: 0, width: 16, height: 16, accentColor: 'var(--orange)' }}
        />
        <span>
          I agree to receive account &amp; service text messages from Hamann Lawn Care &amp; Exterior Pest Control at the phone
          number provided &mdash; appointment reminders, on-my-way alerts, service updates, important service announcements,
          and billing/account notifications. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out,
          HELP for help.
        </span>
      </label>
      <p style={{ color: 'var(--muted)', fontSize: 12.5, lineHeight: 1.5, margin: '0 0 14px' }}>
        Consent is not a condition of purchase. See our{' '}
        <a href="/terms" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>Terms &amp; Conditions</a> and{' '}
        <a href="/privacy" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>Privacy Policy</a>.
      </p>
      {err && <p style={{ color: 'var(--red)', fontWeight: 700, marginBottom: 10 }}>{err}</p>}
      <button type="submit" className="btn btn-orange btn-lg" style={{ width: '100%' }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : '📱 Opt In to Text Updates'}
      </button>
    </form>
  );
}

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 90 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 800 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>📱 Text Message Updates</span>
            <h1>Sign Up For <span className="headline-3d">Text Updates</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>
              Get appointment reminders, on-my-way alerts, and service updates from Hamann Lawn Care &amp; Exterior Pest
              Control by text. Opting in is free and optional &mdash; you can reply STOP at any time.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 90, marginTop: -50 }}>
        <div className="wrap" style={{ maxWidth: 620 }}>
          <OptInForm />
        </div>
      </section>
    </main>
  );
}
