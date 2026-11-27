import { useEffect, useState } from 'react';
import { NAV, img } from '../data.js';

const REVEAL_SELECTOR =
  'main section .wrap > *, .band .wrap > *, .bx, .dc, .ledger > div, .fp, .m, .r, .sp, .pass, .stat, .ob li, .logos > div';

function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll(REVEAL_SELECTOR).forEach(el => {
      if (el.closest('.hero') || el.closest('.no-rv')) return;
      el.classList.add('rv');
      const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty('--d', `${Math.min(idx, 6) * 0.07}s`);
      io.observe(el);
    });
    document.documentElement.classList.add('js');
    return () => io.disconnect();
  }, []);
}

function Header({ page }) {
  const home = page === 'index.html';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onKey = e => e.key === 'Escape' && setOpen(false);
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('keydown', onKey);
    onScroll();
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('keydown', onKey);
    };
  }, []);

  const href = item => item.page || (home ? `#${item.hash}` : `index.html#${item.hash}`);
  const reg = home ? '#register' : 'index.html#register';
  const close = () => setOpen(false);

  return (
    <header className={scrolled ? 'sc' : ''}>
      <div className="wrap nav">
        <a className="brand" href="index.html" aria-label="BDTS home">
          <span className="logo">
            <img alt="BDTS Bangladesh Tourism Summit" src={img('logo-header.png')} />
          </span>
        </a>
        <nav id="nav" className={open ? 'open' : ''}>
          <ul>
            {NAV.map(item => (
              <li key={item.label}>
                <a href={href(item)} aria-current={item.page === page ? 'page' : undefined} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mcta">
              <a className="btn gold" href={reg} onClick={close}>
                Get your Pass
              </a>
            </li>
          </ul>
        </nav>
        <a className="btn gold sm" href={reg}>
          Get your Pass
        </a>
        <button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>
          Menu
        </button>
      </div>
    </header>
  );
}

function Footer({ page }) {
  const home = page === 'index.html';
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="big">
              <a href="index.html" style={{ display: 'inline', margin: 0, opacity: 1 }}>
                BDTS 2027
              </a>
            </div>
            <p>Organized by Parjatan Bichitra — Tourism Publication | Industry Engagement | Destination Promotion.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="exp">
              {NAV.map(item => (
                <a key={item.label} href={item.page || (home ? `#${item.hash}` : `index.html#${item.hash}`)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:parjatanbichitra@gmail.com">parjatanbichitra@gmail.com</a>
            <a href="mailto:bdtourismsummit@gmail.com">bdtourismsummit@gmail.com</a>
            <a href="tel:+8801819224593">01819224593</a>
            <span className="plain">
              <a href="tel:+8801711698088" style={{ display: 'inline', margin: 0 }}>
                01711698088
              </a>
              ,{' '}
              <a href="tel:+8801730450099" style={{ display: 'inline', margin: 0 }}>
                01730450099
              </a>
            </span>
            <span className="plain">Mohiuddin Helal, Chief Coordinator, BDTS 2027</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=House-97/1%2C%20Shukrabad%2C%20Sher-e-Bangla%20Nagar%2C%20Dhaka-1207"
              target="_blank"
              rel="noopener"
            >
              House-97/1, Shukrabad, Sher-e-Bangla Nagor, Dhaka-1207
            </a>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} Parjatan Bichitra. All rights reserved.</div>
      </div>
    </footer>
  );
}

export function PageHead({ crumb, eyebrow, children }) {
  return (
    <section className="phead forest">
      <div className="wrap">
        <div className="crumbs" role="navigation" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span>/</span>
          <span>{crumb}</span>
        </div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{children}</h1>
      </div>
    </section>
  );
}

export default function Layout({ page, children }) {
  useReveal();
  return (
    <>
      <Header page={page} />
      <main id="top">{children}</main>
      <Footer page={page} />
    </>
  );
}
