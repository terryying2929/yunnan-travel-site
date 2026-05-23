import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import './styles.css';
import { resolveAsset as asset, siteConfig } from './siteConfig';

const CONTACT = siteConfig.contact;
const content = siteConfig.content;

function App() {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = content[language];
  const isZh = language === 'zh';

  const navLinks = useMemo(
    () => [
      ['#home', t.nav[0]],
      ['#tours', t.nav[1]],
      ['#destinations', t.nav[2]],
      ['#services', t.nav[3]],
      ['#about', t.nav[4]],
      ['#contact', t.nav[5]],
    ],
    [t],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className={isZh ? 'site zh' : 'site'}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={t.meta.brand}>
          <span className="brand-mark">
            <Globe2 size={22} strokeWidth={2.2} />
          </span>
          <span>
            <strong>{t.meta.brand}</strong>
            <small>{t.meta.tagline}</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-quote" href="#contact" onClick={() => setMenuOpen(false)}>
            {t.labels.quote}
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="language-btn"
            type="button"
            onClick={() => setLanguage(isZh ? 'en' : 'zh')}
            aria-label="Switch language"
          >
            <Globe2 size={17} />
            {t.meta.language}
          </button>
          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-img" src={asset(siteConfig.media.hero)} alt="" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-copy">{t.hero.body}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                {t.hero.primary}
                <ArrowRight size={18} />
              </a>
              <a className="btn btn-secondary" href="#tours">
                {t.hero.secondary}
              </a>
            </div>
            <div className="hero-stats">
              {t.hero.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <a className="scroll-cue" href="#tours" aria-label="Scroll to tours">
            <ChevronDown size={22} />
          </a>
        </section>

        <section className="section intro-strip" id="tours">
          <div className="section-head">
            <p className="eyebrow">{t.labels.tourProducts}</p>
            <h2>{t.categoriesTitle}</h2>
            <p>{t.categoriesIntro}</p>
          </div>
          <div className="category-grid">
            {t.categories.map((item) => (
              <article className="category-card" key={item.title}>
                <img src={asset(item.image)} alt="" />
                <div className="category-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a href="#contact">
                    {t.labels.askAbout}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <p className="lead">{t.about.lead}</p>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="highlight-row">
              {t.about.highlights.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <aside className="service-panel" id="services">
            <div className="panel-icon">
              <ShieldCheck size={28} />
            </div>
            <h3>{t.labels.servicePanelTitle}</h3>
            <ul>
              {t.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="section destination-section" id="destinations">
          <div className="section-head compact">
            <p className="eyebrow">{t.labels.destinations}</p>
            <h2>{t.destinations.title}</h2>
          </div>
          <div className="destination-list">
            {t.destinations.items.map(([name, description], index) => (
              <article key={name} className="destination-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="section-head compact">
            <p className="eyebrow">{t.labels.process}</p>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="process-grid">
            {t.process.map(([title, body], index) => (
              <article className="process-step" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section inquiry-section" id="contact">
          <div className="inquiry-copy">
            <p className="eyebrow">{t.inquiry.eyebrow}</p>
            <h2>{t.inquiry.title}</h2>
            <p>{t.inquiry.body}</p>
            <div className="contact-stack">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} />
                {t.inquiry.whatsapp}
              </a>
              <span>
                <Mail size={18} />
                {CONTACT.email}
              </span>
              <span>
                <Phone size={18} />
                {CONTACT.phone}
              </span>
              <span>
                <MapPin size={18} />
                {CONTACT.address}
              </span>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                {t.inquiry.fields.name}
                <input required name="name" type="text" />
              </label>
              <label>
                {t.inquiry.fields.contact}
                <input required name="contact" type="text" />
              </label>
            </div>
            <div className="form-row">
              <label>
                {t.inquiry.fields.dates}
                <input name="dates" type="text" />
              </label>
              <label>
                {t.inquiry.fields.group}
                <input name="group" type="number" min="1" />
              </label>
            </div>
            <label>
              {t.inquiry.fields.interests}
              <select name="interests" defaultValue="">
                <option value="" disabled>
                  {t.labels.selectOption}
                </option>
                {t.categories.slice(0, 6).map((item) => (
                  <option key={item.title}>{item.title}</option>
                ))}
              </select>
            </label>
            <label>
              {t.inquiry.fields.message}
              <textarea required name="message" rows="5" />
            </label>
            <button className="btn btn-primary form-submit" type="submit">
              <Send size={17} />
              {t.inquiry.submit}
            </button>
            {submitted && <p className="form-success">{t.inquiry.success}</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>{t.meta.brand}</strong>
          <p>{t.meta.tagline}</p>
        </div>
        <div>
          <h3>{t.footer.quick}</h3>
          {navLinks.slice(0, 5).map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <h3>{t.footer.experiences}</h3>
          {t.categories.slice(0, 4).map((item) => (
            <a key={item.title} href="#tours">
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <h3>{t.footer.contact}</h3>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.phone}</p>
          <p>{CONTACT.address}</p>
        </div>
        <div className="newsletter">
          <h3>{t.footer.newsletter}</h3>
          <p>{t.footer.newsletterBody}</p>
          <form>
            <input type="email" placeholder={t.labels.emailAddress} aria-label="Email address" />
            <button type="button">{t.footer.subscribe}</button>
          </form>
        </div>
        <p className="copyright">© 2026 {t.footer.copyright}</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
