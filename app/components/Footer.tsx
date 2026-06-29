const PHONE_DISPLAY = '(682) 408-9013';
const PHONE_TEL = '6824089013';

const services = [
  { label: 'Weed Control & Fertilization', href: '/weed-control-and-fertilizer-services' },
  { label: 'Mosquito Control', href: '/mosquito-control-services' },
  { label: 'Flea & Tick Control', href: '/flea-and-tick-control' },
  { label: 'Lawn Care', href: '/lawn-care-services' },
  { label: 'Lawn Disease & Fungus', href: '/lawn-disease-and-fungus-control' },
  { label: 'Tree & Shrub Care', href: '/tree-and-shrub-care' },
];

const areas = [
  'Arlington', 'Mansfield', 'Grand Prairie', 'Hurst', 'Euless', 'Bedford',
  'Colleyville', 'North Richland Hills', 'Watauga', 'Haltom City', 'Kennedale',
];

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-top">
          <div>
            <div className="ftr-logo"><img src="/logo-header.png" alt="Hamann Lawn Care & Weed Control" /></div>
            <p className="ftr-about">Family-owned lawn, weed, and pest control serving Arlington and all of North Texas since 2006. Greener lawns, fewer weeds, and zero mosquitoes &mdash; guaranteed.</p>
          </div>
          <div className="ftr-col">
            <h4>Services</h4>
            {services.map((s) => <a key={s.href} href={s.href}>{s.label}</a>)}
          </div>
          <div className="ftr-col">
            <h4>Service Areas</h4>
            {areas.slice(0, 8).map((a) => <a key={a} href="/#areas">{a}</a>)}
          </div>
          <div className="ftr-col">
            <h4>Get a Free Quote</h4>
            <a className="ftr-phone" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <a href="/services">Our Services</a>
            <a href="/blogs">Lawn &amp; Pest Blog</a>
            <a href="/contact-us">Contact Us</a>
            <p style={{ fontSize: 13, marginTop: 8, color: '#9a8c76' }}>Locally owned in Arlington, TX</p>
          </div>
        </div>
        <div className="ftr-bottom">
          <span>© {yr} Hamann Lawn Care &amp; Weed Control. All rights reserved.</span>
          <span>Weed &middot; Mosquito &middot; Flea &amp; Tick &middot; Lawn Care &mdash; North Texas</span>
        </div>
      </div>
    </footer>
  );
}
