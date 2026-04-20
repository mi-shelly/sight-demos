// Shared UI — top bar, footer, small building blocks used across variants
const { useState, useEffect, useRef } = React;

function TopBar({ variant = "A" }) {
  const dark = variant === "C";
  return (
    <header className={`topbar ${dark ? "topbar--dark" : ""}`}>
      <div className="wrap-wide topbar__inner">
        <a className="brand" href="#">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__mark-b">MLI</span>
          </span>
          <span className="brand__text">
            <span className="brand__line1">Maler- und Lackierer-Innung</span>
            <span className="brand__line2">Bremen</span>
          </span>
        </a>

        <nav className="nav">
          <a href="#">Die Innung</a>
          <a href="#" className="nav__hl">Ausbildung</a>
          <a href="#">Für Mitglieder</a>
          <a href="#">Betrieb finden</a>
          <a href="#">Aktuelles</a>
          <a href="#">Kontakt</a>
        </nav>

        <div className="topbar__actions">
          <button className="iconbtn" aria-label="Suche">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
          <a href="#" className="btn btn-ghost btn-sm">Mitglieder-Login</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap-wide">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="brand brand--light">
              <span className="brand__mark brand__mark--light"><span className="brand__mark-b">MLI</span></span>
              <span className="brand__text">
                <span className="brand__line1">Maler- und Lackierer-Innung</span>
                <span className="brand__line2">Bremen</span>
              </span>
            </div>
            <p className="footer__tag">
              Seit 1407 das Handwerk in Bremen. Heute: 112 Mitgliedsbetriebe,
              über 280 Auszubildende, eine gemeinsame Stimme.
            </p>
            <div className="chip-row" style={{marginTop: 18}}>
              <span className="tag blue">Innung</span>
              <span className="tag yellow">Ausbildung</span>
              <span className="tag red">Qualität seit 1407</span>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__h">Für Kunden</h4>
            <a href="#">Betrieb finden</a>
            <a href="#">Leistungen A–Z</a>
            <a href="#">Schlichtungsstelle</a>
            <a href="#">Gütezeichen</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__h">Für Mitglieder</h4>
            <a href="#">Login-Bereich</a>
            <a href="#">Tarifverträge</a>
            <a href="#">Rechtsberatung</a>
            <a href="#">Veranstaltungen</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__h">Für Azubis</h4>
            <a href="#">Ausbildungsplatzbörse</a>
            <a href="#">Berufsbild</a>
            <a href="#">Prüfungstermine</a>
            <a href="#">Überbetriebliche Kurse</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__h">Kontakt</h4>
            <p>Carl-Ronning-Str. 2<br/>28195 Bremen</p>
            <p>0421 · 36 46 44<br/>info@malerinnung-bremen.de</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="mono" style={{color: "rgba(255,255,255,.5)"}}>© 2026 · Maler- und Lackierer-Innung Bremen</span>
          <div className="footer__legal">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">Barrierefreiheit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable: news card
function NewsCard({ tag, tagTone = "", date, title, excerpt, tall=false }) {
  return (
    <article className={`news ${tall ? "news--tall" : ""}`}>
      <div className={`news__media ph ${tagTone}`}>{tag === "Ausbildung" ? "AZUBI-FOTO" : tag === "Veranstaltung" ? "EVENT-FOTO" : "REDAKTIONSFOTO"}</div>
      <div className="news__body">
        <div className="news__meta">
          <span className={`tag ${tagTone}`}>{tag}</span>
          <span className="mono">{date}</span>
        </div>
        <h3 className="news__title">{title}</h3>
        <p className="news__excerpt">{excerpt}</p>
        <a className="news__link" href="#">Weiterlesen →</a>
      </div>
    </article>
  );
}

// Member search block
function MemberFinder({ compact=false }) {
  return (
    <div className={`finder ${compact ? "finder--compact" : ""}`}>
      <div className="finder__head">
        <span className="eyebrow">Betrieb finden</span>
        <h3 className="finder__title">Geprüfter Maler in Ihrer Nähe.</h3>
      </div>
      <div className="finder__grid">
        <label className="field">
          <span className="field__lbl">PLZ oder Ort</span>
          <input type="text" placeholder="28195 Bremen" defaultValue="28195"/>
        </label>
        <label className="field">
          <span className="field__lbl">Leistung</span>
          <select defaultValue="">
            <option value="">Alle Leistungen</option>
            <option>Innenanstriche</option>
            <option>Fassade</option>
            <option>Tapezierarbeiten</option>
            <option>Lackierung</option>
            <option>Bodenbeläge</option>
            <option>Denkmalpflege</option>
          </select>
        </label>
        <button className="btn btn-primary finder__btn">Suchen</button>
      </div>
      <div className="finder__meta mono">112 Innungsbetriebe · Alle mit Meisterbrief · Schlichtungsstelle inklusive</div>
    </div>
  );
}

// Stat tiles
function Stat({ value, label, tone="ink" }) {
  return (
    <div className={`stat stat--${tone}`}>
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

Object.assign(window, { TopBar, Footer, NewsCard, MemberFinder, Stat });
