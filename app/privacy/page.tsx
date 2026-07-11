import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hamann Lawn Care & Weed Control',
  description: 'Privacy Policy for Hamann Lawn Care & Weed Control, including how we handle mobile phone numbers and SMS text messaging.',
};

const sectionStyle: React.CSSProperties = { marginBottom: 26 };
const h2Style: React.CSSProperties = { fontFamily: 'var(--font-anton), sans-serif', fontSize: 24, color: 'var(--ink)', margin: '0 0 8px' };
const pStyle: React.CSSProperties = { color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, margin: '0 0 10px' };

export default function Page() {
  return (
    <main>
      <section className="hero honey" style={{ paddingBottom: 50 }}>
        <div className="hero-in" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: 800 }}>
          <div>
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>🔒 Your Privacy</span>
            <h1>Privacy <span className="headline-3d">Policy</span></h1>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap" style={{ maxWidth: 760, textAlign: 'left' }}>
          <div style={{ background: 'var(--paper)', border: '3px solid var(--ink)', borderRadius: 18, boxShadow: '6px 6px 0 var(--orange-dk)', padding: '32px 30px' }}>
            <p style={{ ...pStyle, marginBottom: 22 }}>
              Hamann Lawn Care &amp; Weed Control (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what
              information we collect, how we use it, and how we protect it &mdash; including how we handle your mobile
              phone number and text messages.
            </p>

            <div style={sectionStyle}>
              <h2 style={h2Style}>Information We Collect</h2>
              <p style={pStyle}>
                We collect the information you provide when you request a quote, sign up for service, or contact us &mdash;
                such as your name, mailing/service address, email address, and phone number &mdash; along with details about
                your property and the services you request. We also collect payment information needed to bill for services,
                processed securely through our payment provider (Stripe).
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>How We Use Your Information</h2>
              <p style={pStyle}>
                We use your information to schedule and provide services, send invoices and process payments, respond to
                your requests, and communicate with you about your account and services. We do not sell your personal
                information.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>SMS / Text Messaging</h2>
              <p style={pStyle}>
                <strong>We will not share or sell your mobile phone number, or your consent to receive text messages, to
                any third parties or affiliates for their marketing or promotional purposes.</strong> Mobile information is
                used solely to deliver the service-related messages you have opted in to receive from Hamann Lawn Care.
              </p>
              <p style={pStyle}>
                If you opt in to receive text messages, we may send you messages such as sign-up/onboarding links,
                appointment and service reminders, service-completion notifications, and billing updates.
                <strong> Message frequency varies. Message and data rates may apply.</strong>
              </p>
              <p style={pStyle}>
                You can opt out at any time by replying <strong>STOP</strong> to any message, and you can reply
                <strong> HELP</strong> for assistance. After you send STOP, we may send a one-time message confirming your
                opt-out.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>How We Protect Your Information</h2>
              <p style={pStyle}>
                We use reasonable administrative and technical safeguards to protect your information. Payment card details
                are handled by our PCI-compliant payment processor and are not stored on our website.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>Contact Us</h2>
              <p style={pStyle}>
                Questions about this policy? Contact Hamann Lawn Care &amp; Weed Control at{' '}
                <a href="tel:6824089013" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>(682) 408-9013</a> or{' '}
                <a href="mailto:Kurtis@HamannWeedControl.com" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>Kurtis@HamannWeedControl.com</a>.
                Arlington &amp; North Texas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
