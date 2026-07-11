'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

// Pages where the "get a free estimate" promo shouldn't interrupt the visitor.
const SUPPRESS_ON = ['/sign-up'];

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const suppressed = SUPPRESS_ON.includes(pathname);

  useEffect(() => {
    if (suppressed) return;
    (window as any).__openPromo = () => setOpen(true);
    // auto-show once per browser session, shortly after load
    let t: any;
    try {
      if (!sessionStorage.getItem('hamann_promo_seen')) {
        t = setTimeout(() => {
          setOpen(true);
          sessionStorage.setItem('hamann_promo_seen', '1');
        }, 1400);
      }
    } catch {}
    return () => { clearTimeout(t); delete (window as any).__openPromo; };
  }, [suppressed]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  if (!open || suppressed) return null;

  return (
    <div className="promo-ov" onClick={() => setOpen(false)}>
      <div className="promo-card" onClick={(e) => e.stopPropagation()}>
        <button className="promo-x" aria-label="Close" onClick={() => setOpen(false)}>×</button>
        <div className="promo-top">
          <div className="big">50% OFF</div>
          <div className="sub">Your First Application</div>
        </div>
        <div className="promo-body">
          <p>New customers in North Texas save <b>50% on their first service</b> &mdash; weed control, mosquito, flea &amp; tick, and more. Claim it with your free estimate!</p>
          <a className="btn btn-orange btn-lg" href="/free-estimate" onClick={() => setOpen(false)}>🌿 Get a Free Estimate</a>
          <p className="promo-fine">Locally owned in Arlington since 2006 &middot; New customers only</p>
        </div>
      </div>
    </div>
  );
}
