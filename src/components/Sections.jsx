import { Fragment, useState } from 'react';
import { FOOTER_LINKS } from '../data.js';
import { ChevronDownIcon, ChevronForwardIcon, HomeIcon } from './Icons.jsx';

const FOOTER_LOGO = `${import.meta.env.BASE_URL}images/reward-gateway-edenred.png`;

export function Breadcrumbs({ trail = [], current }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <a href="#" aria-label="Home"><HomeIcon size={16} color="#056BCC" /></a>
      {trail.map((t) => (
        <Fragment key={t}>
          <ChevronForwardIcon />
          <a href="#" className="crumb-link">{t}</a>
        </Fragment>
      ))}
      <ChevronForwardIcon />
      <span className="crumb-current" aria-current="page">{current}</span>
    </nav>
  );
}

export function Faq({ items, className = '' }) {
  const [open, setOpen] = useState(0);
  return (
    <section className={`faq ${className}`} aria-labelledby="faq-title">
      <div className="faq-inner">
        <h2 id="faq-title" className="section-title">Frequently asked questions</h2>
        <div className="accordion">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`accordion-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="accordion-header"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDownIcon className="accordion-chevron" />
                </button>
                {isOpen && <p className="accordion-body">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links" aria-label="Footer">
        {FOOTER_LINKS.map((l) => (
          <a href="#" key={l}>{l}</a>
        ))}
      </nav>
      <img src={FOOTER_LOGO} width="230" height="50" alt="Reward Gateway | Edenred" />
    </footer>
  );
}
