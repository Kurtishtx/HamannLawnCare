'use client';
import { useState } from 'react';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const openPromo = () => (window as any).__openPromo?.();

  return (
    <header className="hdr">
      <div className="hdr-in">
        <a className="hdr-logo" href="/" aria-label="Hamann Lawn Care & Weed Control">
          <img src="/logo-header.png" alt="Hamann Lawn Care & Weed Control" />
        </a>

        <nav className="hdr-nav">
          {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>

        <div className="hdr-right">
          <div className="hdr-phone">
            <span className="lbl">Call for a free quote</span>
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </div>
          <a className="btn btn-orange" href="/free-estimate" style={{ whiteSpace: 'nowrap' }}>Free Estimate</a>
          <button className="hdr-burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" style={{ display: 'flex' }}>
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a href="/free-estimate" onClick={() => setOpen(false)}>Free Estimate</a>
          <a href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}>📞 {PHONE_DISPLAY}</a>
          <button className="btn btn-orange" onClick={() => { setOpen(false); openPromo(); }}>Claim 50% Off</button>
        </div>
      )}
    </header>
  );
}
