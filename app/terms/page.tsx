import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Hamann Lawn Care & Weed Control',
  description: 'Terms of Service for Hamann Lawn Care & Weed Control, including SMS text messaging terms and conditions.',
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
            <span className="hero-kick" style={{ borderColor: 'var(--red)' }}>📄 The Fine Print</span>
            <h1>Terms of <span className="headline-3d">Service</span></h1>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap" style={{ maxWidth: 760, textAlign: 'left' }}>
          <div style={{ background: 'var(--paper)', border: '3px solid var(--ink)', borderRadius: 18, boxShadow: '6px 6px 0 var(--orange-dk)', padding: '32px 30px' }}>
            <p style={{ ...pStyle, marginBottom: 22 }}>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website and services of Hamann Lawn Care &amp;
              Weed Control (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By requesting a quote, signing up for service, or using
              our website, you agree to these Terms.
            </p>

            <div style={sectionStyle}>
              <h2 style={h2Style}>Our Services</h2>
              <p style={pStyle}>
                We provide lawn care, weed control, fertilization, mosquito, and flea &amp; tick services in Arlington and
                North Texas. Estimates and pricing are based on the information you provide and may be adjusted after an
                on-site assessment of your property. Scheduling is subject to weather and availability.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>Billing &amp; Payment</h2>
              <p style={pStyle}>
                When you sign up, we keep a payment card securely on file through our PCI-compliant processor (Stripe); we
                do not store your full card number. After each completed service, we email you an itemized invoice and then
                charge the card on file. You are responsible for keeping a valid payment method on file. You may cancel
                recurring service by contacting us.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>SMS Text Messaging Terms</h2>
              <p style={pStyle}>
                By providing your mobile number and opting in, you agree to receive service-related text messages from
                Hamann Lawn Care &mdash; such as sign-up/onboarding links, appointment and service reminders,
                service-completion notifications, and billing updates. <strong>Consent to receive texts is not a condition
                of purchase.</strong>
              </p>
              <p style={pStyle}>
                <strong>Message frequency varies. Message and data rates may apply.</strong> You can opt out at any time by
                replying <strong>STOP</strong>, and reply <strong>HELP</strong> for assistance. We will not share or sell
                your mobile number or opt-in data to third parties or affiliates for marketing purposes; see our{' '}
                <a href="/privacy" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>Privacy Policy</a>. Carriers are
                not liable for delayed or undelivered messages.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>Satisfaction</h2>
              <p style={pStyle}>
                We stand behind our work. If you&rsquo;re not satisfied with a service, contact us and we&rsquo;ll make it
                right. Results may vary based on property conditions, weather, and factors outside our control.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>Changes to These Terms</h2>
              <p style={pStyle}>
                We may update these Terms from time to time. Continued use of our services after changes take effect
                constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={h2Style}>Contact Us</h2>
              <p style={pStyle}>
                Questions? Contact Hamann Lawn Care &amp; Weed Control at{' '}
                <a href="tel:6824089013" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>(682) 408-9013</a> or{' '}
                <a href="mailto:Kurtis@HamannWeedControl.com" style={{ color: 'var(--orange-dk)', fontWeight: 700 }}>Kurtis@HamannWeedControl.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
