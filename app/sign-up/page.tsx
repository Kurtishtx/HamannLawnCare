'use client';
import { useEffect, useRef, useState } from 'react';

const SIGNUP_ACCOUNT = '951ab5cd-c78a-4d90-9015-30f7c2197ac5';
const SUPA = 'https://knjdbgroiyhvqwrpqzcx.supabase.co';
const ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuamRiZ3JvaXlodnF3cnBxemN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0OTczMDMsImV4cCI6MjA5NTA3MzMwM30.zoExtkem-XZqU86S4yJjA_xOOaS1G0IPU2M9OAAza2g';
const LEAD_FN = SUPA + '/functions/v1/submit-web-lead';
const SETUP_FN = SUPA + '/functions/v1/stripe-setup-card';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '13px 15px', border: '3px solid var(--ink)', borderRadius: 12,
  fontSize: 16, fontFamily: 'inherit', background: '#fff', marginBottom: 12, boxSizing: 'border-box', color: 'var(--text)',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global { interface Window { Stripe?: any } }

function SignupForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [err, setErr] = useState('');
  const [cardReady, setCardReady] = useState(false);
  const stripeRef = useRef<any>(null);
  const cardRef = useRef<any>(null);
  const csRef = useRef<string>('');
  const custRef = useRef<string>('');
  const brandRef = useRef<string>('');

  useEffect(() => {
    let cancelled = false;
    function boot() {
      fetch(SETUP_FN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + ANON, apikey: ANON },
        body: JSON.stringify({ action: 'signup_intent', account: SIGNUP_ACCOUNT }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (cancelled) return;
          if (d.error || !d.publishable_key) { setErr('Card setup is temporarily unavailable. Please call us at (682) 408-9013.'); return; }
          csRef.current = d.client_secret; custRef.current = d.stripe_customer_id;
          const stripe = window.Stripe(d.publishable_key);
          stripeRef.current = stripe;
          const elements = stripe.elements();
          const card = elements.create('card', { style: { base: { fontSize: '16px', color: '#211a10', '::placeholder': { color: '#9a8f7c' } } } });
          card.mount('#card-element');
          card.on('change', (e: any) => {
            brandRef.current = e.brand || '';
            const el = document.getElementById('card-error');
            if (el) { el.textContent = e.error ? e.error.message : ''; }
          });
          cardRef.current = card;
          setCardReady(true);
        })
        .catch(() => { if (!cancelled) setErr('Network error loading the card field. Please refresh.'); });
    }
    if (window.Stripe) { boot(); }
    else {
      const s = document.createElement('script');
      s.src = 'https://js.stripe.com/v3/'; s.async = true; s.onload = boot;
      document.head.appendChild(s);
    }
    return () => { cancelled = true; };
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr('');
    if (!cardReady || !stripeRef.current || !csRef.current) { setErr('The card field is still loading — please try again in a moment.'); return; }
    setStatus('sending');
    const form = e.currentTarget;
    const d: Record<string, string> = { account: SIGNUP_ACCOUNT, source: 'signup' };
    Array.from(form.elements).forEach((el) => {
      const i = el as HTMLInputElement;
      if (!i.name) return;
      d[i.name] = i.type === 'checkbox' ? (i.checked ? 'true' : 'false') : i.value;
    });

    const res = await stripeRef.current.confirmCardSetup(csRef.current, {
      payment_method: { card: cardRef.current, billing_details: { name: d.name || '', email: d.email || '' } },
    });
    if (res.error) { setErr(res.error.message || 'Your card could not be saved. Please check the details.'); setStatus('idle'); return; }

    d.stripe_customer_id = custRef.current;
    d.card_brand = brandRef.current;
    try {
      const r = await fetch(LEAD_FN, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      const j = await r.json();
      if (j && j.ok) setStatus('done');
      else { setErr((j && j.error) || 'Something went wrong. Please try again.'); setStatus('idle'); }
    } catch { setErr('Network error. Please try again.'); setStatus('idle'); }
  }

  if (status === 'done') {
    return (
      <div style={{ background: 'var(--paper)', border: '3px solid var(--ink)', borderRadius: 18, boxShadow: '6px 6px 0 var(--orange-dk)', padding: '40px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 52 }}>🎉</div>
        <h3 style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 28, color: 'var(--ink)', margin: '8px 0 6px' }}>You&rsquo;re Signed Up!</h3>
        <p style={{ color: 'var(--muted)', fontSize: 16 }}>Your card is securely on file. We&rsquo;ll be in touch to schedule your service &mdash; and you&rsquo;ll get an emailed invoice after each visit before we process payment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ background: 'var(--paper)', border: '3px solid var(--ink)', borderRadius: 18, boxShadow: '6px 6px 0 var(--orange-dk)', padding: '26px 24px' }}>
      <input style={inputStyle} type="text" name="name" placeholder="Full Name *" required />
      <input style={inputStyle} type="email" name="email" placeholder="Email *" required />
      <input style={inputStyle} type="tel" name="phone" placeholder="Phone *" required />
      <input style={inputStyle} type="text" name="address" placeholder="Service Address" />
      <div style={{ display: 'flex', gap: 10 }}>
        <input style={inputStyle} type="text" name="city" placeholder="City" />
        <input style={{ ...inputStyle, maxWidth: 90 }} type="text" name="state" placeholder="State" />
        <input style={{ ...inputStyle, maxWidth: 110 }} type="text" name="zip" placeholder="ZIP" />
      </div>
      <input style={inputStyle} type="text" name="service_interest" placeholder="Service(s) you want" />
      <textarea style={{ ...inputStyle, minHeight: 80 }} name="message" placeholder="Anything else we should know? (gate code, pets, problem areas…)" />

      <label style={{ display: 'block', fontFamily: 'var(--font-anton), sans-serif', fontSize: 18, color: 'var(--ink)', margin: '6px 0 8px' }}>💳 Card on File *</label>
      <div id="card-element" style={{ ...inputStyle, padding: '14px 15px', marginBottom: 6 }} />
      <div id="card-error" style={{ color: 'var(--red)', fontWeight: 700, fontSize: 14, minHeight: 18, marginBottom: 8 }} />
      <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 14 }}>🔒 Secured by Stripe. Your card number is never stored on our website. You are not charged today — only after each service, once we email your invoice.</p>

      <input type="text" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999 }} />
      {/* Stand-alone SMS consent — each opt-in is its own choice, NOT tied to submitting the form (TFV requirement) */}
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', margin: '4px 0 10px', fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.5, fontWeight: 600 }}>
        <input type="checkbox" name="sms_consent_transactional" style={{ marginTop: 3, flexShrink: 0, width: 16, height: 16, accentColor: 'var(--orange)' }} />
        <span>I agree to receive account &amp; service text messages from Hamann Lawn Care at the phone number provided &mdash; appointment reminders, on-my-way alerts, service updates, and billing/account notifications. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help.</span>
      </label>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', margin: '4px 0 12px', fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.5, fontWeight: 600 }}>
        <input type="checkbox" name="sms_consent_marketing" style={{ marginTop: 3, flexShrink: 0, width: 16, height: 16, accentColor: 'var(--orange)' }} />
        <span>I agree to receive promotional/marketing text messages from Hamann Lawn Care. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. <em style={{ fontWeight: 500, color: 'var(--muted)' }}>(Optional)</em></span>
      </label>
      <p style={{ color: 'var(--muted)', fontSize: 12.5, lineHeight: 1.5, margin: '0 0 14px' }}>
        Consent to receive texts is not a condition of purchase. See our <a href="/terms" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>Terms &amp; Conditions</a> and <a href="/privacy" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>Privacy Policy</a>.
      </p>
      {err && <p style={{ color: 'var(--red)', fontWeight: 700, marginBottom: 10 }}>{err}</p>}
      <button type="submit" className="btn btn-orange btn-lg" style={{ width: '100%' }} disabled={status === 'sending' || !cardReady}>
        {status === 'sending' ? 'Saving…' : !cardReady ? 'Loading secure card field…' : '🌿 Complete Sign Up'}
      </button>
    </form>
  );
}

const billing = [
  { n: '💳', t: 'Card Securely on File', d: 'When you sign up, we keep a credit card securely on file through Stripe. Your card details are never stored on our website — and you are not charged anything today.' },
  { n: '📧', t: 'Invoice After Each Service', d: 'Every time we service your property, we email you a clear, itemized invoice so you always know exactly what you paid for — no surprises, no guessing.' },
  { n: '✅', t: 'Automatic Payment', d: 'Shortly after your invoice is sent, we process the payment to the card on file. No checks to write, no logging in, nothing to remember — it just takes care of itself.' },
];

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 90 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 800 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🌱 New Customer Sign-Up</span>
            <h1>Sign Up For <span className="headline-3d">Service</span></h1>
            <p className="hero-sub" style={{ margin: '20px auto 26px' }}>Already got a quote from us, or ready to get started? Sign up in two minutes. We keep a card on file, email you an invoice after every service, then process the payment — simple, transparent, and totally hands-off for you.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <p className="eyebrow">How Billing Works</p>
            <h2 className="sec-h">Simple &amp; <span className="o">Transparent</span></h2>
            <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 40px' }} />
          </div>
          <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {billing.map((s) => (
              <div key={s.t} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '3px solid var(--ink)', borderRadius: 14, padding: '18px 22px', boxShadow: '4px 4px 0 rgba(33,26,16,.12)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 10, background: 'var(--orange)', border: '2px solid var(--ink)', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                <div><b style={{ display: 'block', fontSize: 18, color: 'var(--ink)', marginBottom: 2 }}>{s.t}</b><span style={{ color: 'var(--muted)' }}>{s.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap" style={{ maxWidth: 620 }}>
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <p className="eyebrow">Get Started</p>
            <h2 className="sec-h">Sign Up <span className="o">Now</span></h2>
            <div style={{ height: 4, width: 64, background: 'var(--red)', borderRadius: 2, margin: '14px auto 0' }} />
          </div>
          <SignupForm />
        </div>
      </section>
    </main>
  );
}
