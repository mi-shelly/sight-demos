// Variant A — Serious-editorial
// Split hero: big editorial statement left, member finder right.
// Mitglieder-Service & Azubi-Recruiting prominent als eigene Bänder.

function VariantA() {
  return (
    <div className="variant variant-a">
      <TopBar variant="A" />

      {/* ---------- HERO ---------- */}
      <section className="va-hero">
        <div className="wrap-wide va-hero__grid">
          <div className="va-hero__left">
            <div className="va-hero__meta">
              <span className="mono">Bremen · seit 1407</span>
              <span className="va-hero__dot"></span>
              <span className="mono">112 Betriebe</span>
            </div>
            <h1 className="va-hero__h">
              Handwerk<br/>
              mit Haltung<br/>
              <span className="va-hero__accent">Farbe</span> und<br/>
              Zukunft.
            </h1>
            <p className="va-hero__lede">
              Die Maler- und Lackierer-Innung Bremen vertritt 112 Meisterbetriebe
              und bildet über 280 junge Menschen aus. Wir stehen für geprüfte
              Qualität, faire Löhne und ein Handwerk, das man sehen kann.
            </p>
            <div className="va-hero__ctas">
              <a href="#" className="btn btn-primary">Innungsbetrieb finden →</a>
              <a href="#" className="btn btn-ghost">Ausbildung starten</a>
            </div>

            <div className="va-hero__proof">
              <div><b>4.8/5</b><span>Kunden&shy;bewertung</span></div>
              <div><b>112</b><span>Mitglieds&shy;betriebe</span></div>
              <div><b>280+</b><span>Auszu&shy;bildende</span></div>
              <div><b>1407</b><span>Gründungs&shy;jahr</span></div>
            </div>
          </div>
          <div className="va-hero__right">
            <div className="va-hero__img"><img src="public/Handwerker-bei-der-Arbeit.jpg" alt="Handwerker bei der Arbeit" /></div>
            <div className="va-hero__badge">
              <span className="mono">Innungs-Siegel</span>
              <span className="va-hero__badge-b">Geprüfte<br/>Qualität</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE BANDS ---------- */}
      <section className="va-bands wrap-wide">
        <div className="va-band va-band--customer">
          <span className="eyebrow">Für Kunden</span>
          <h2>Den richtigen Betrieb finden.</h2>
          <p>112 Innungsbetriebe in Bremen und umzu. Alle mit Meisterbrief, Schlichtungsstelle und Innungs-Gütezeichen.</p>
          <a href="#" className="va-band__cta">Betriebssuche öffnen →</a>
        </div>
        <div className="va-band va-band--member">
          <span className="eyebrow" style={{color: "rgba(255,255,255,.7)"}}>Für Mitglieder</span>
          <h2>Service, der Zeit spart.</h2>
          <p>Tarifauskunft, Rechtsberatung, Weiterbildung, Kalkulationshilfen — direkt im Mitgliederbereich. Neu: digitale Lehrlingsrolle.</p>
          <a href="#" className="va-band__cta va-band__cta--light">Zum Mitglieder-Login →</a>
        </div>
        <div className="va-band va-band--azubi">
          <span className="eyebrow" style={{color: "rgba(0,0,0,.7)"}}>Für Azubis</span>
          <h2>Farbe bekennen. Jetzt.</h2>
          <p>Ausbildung mit Zukunft: 3 Jahre, übertariflich, Meisterperspektive. Über 40 offene Plätze in Bremen.</p>
          <a href="#" className="va-band__cta">Zur Ausbildungsbörse →</a>
        </div>
      </section>

      {/* ---------- MEMBER FINDER + NEWS ---------- */}
      <section className="wrap va-finder-row">
        <MemberFinder />
      </section>

      {/* ---------- VORTEILE FÜR MITGLIEDER ---------- */}
      <section className="va-benefits wrap">
        <div className="va-benefits__head">
          <div>
            <span className="eyebrow">Für Mitglieder</span>
            <h2 className="va-section-h">Was Ihre Mitgliedschaft<br/>wert ist.</h2>
          </div>
          <p className="va-benefits__lede">
            112 Meisterbetriebe teilen sich Wissen, Werkzeuge und eine Stimme.
            Das sind die Leistungen, die Ihnen als Innungs­mitglied im Alltag
            wirklich Zeit und Geld sparen.
          </p>
        </div>

        <div className="va-benefits__grid">
          <div className="va-benefit">
            <span className="va-benefit__n mono">01</span>
            <h3>Rechts­beratung</h3>
            <p>Kostenfrei für Mitglieder — Vertragsrecht, VOB, Inkasso, Arbeitsrecht. Ein Anruf reicht.</p>
          </div>
          <div className="va-benefit">
            <span className="va-benefit__n mono">02</span>
            <h3>Tarif­auskunft &amp; Gehalts­rechner</h3>
            <p>Aktuelle Tarife, Zulagen, Sonderzahlungen — immer aktuell, immer verlässlich berechnet.</p>
          </div>
          <div className="va-benefit">
            <span className="va-benefit__n mono">03</span>
            <h3>Weiter­bildung &amp; Meisterkurse</h3>
            <p>Fach­seminare, Sicherheits­schulungen, Meister­vorbereitung — zu Mitglieds­konditionen.</p>
          </div>
          <div className="va-benefit">
            <span className="va-benefit__n mono">04</span>
            <h3>Digitale Lehrlings­rolle</h3>
            <p>Anmeldung, Prüfung, überbetriebliche Kurse — alles online. Keine Ordner, keine Wartezeit.</p>
          </div>
          <div className="va-benefit">
            <span className="va-benefit__n mono">05</span>
            <h3>Muster­verträge &amp; Vorlagen</h3>
            <p>Werkverträge, AGB, Übergabe­protokolle — rechts­sicher vorformuliert, sofort einsetzbar.</p>
          </div>
          <div className="va-benefit va-benefit--highlight">
            <span className="va-benefit__n mono">06</span>
            <h3>Gütezeichen &amp; Schlichtungsstelle</h3>
            <p>Sichtbares Qualitäts­merkmal gegenüber Kunden — plus kostenfreie Schlichtung im Konfliktfall.</p>
          </div>
        </div>

        <div className="va-benefits__cta">
          <a href="#" className="btn btn-primary">Zum Mitglieder-Login →</a>
          <a href="#" className="btn btn-ghost">Mitgliedschaft anfragen</a>
        </div>
      </section>

      <section className="va-news wrap">
        <div className="va-news__head">
          <div>
            <span className="eyebrow">Aktuelles</span>
            <h2 className="va-section-h">Was uns bewegt.</h2>
          </div>
          <a href="#" className="va-news__more">Alle Beiträge →</a>
        </div>
        <div className="va-news__grid">
          <NewsCard
            tag="Ausbildung" tagTone="yellow" date="18.04.2026"
            title="Farbige Zukunft: Neue Azubi-Kampagne gestartet"
            excerpt="Jacqueline Marchal und Sandra Bauscher zeigen in unserer neuen Video-Reihe, warum Maler:in mehr als nur ein Job ist."
          />
          <NewsCard
            tag="Veranstaltung" tagTone="blue" date="02.05.2026"
            title="Innungsversammlung 2026 — jetzt anmelden"
            excerpt="Am 12. Juni im Swissôtel Bremen. Mit Tarifrunde, Wahlen zum Vorstand und großem Handwerksabend."
          />
          <NewsCard
            tag="Fachthema" tagTone="red" date="28.03.2026"
            title="Neue DIN 18363: Was für Betriebe jetzt wichtig ist"
            excerpt="Die überarbeitete VOB/C für Maler- und Lackiererarbeiten bringt konkrete Änderungen für Ausschreibungen."
          />
        </div>
      </section>

      {/* ---------- AZUBI CTA BIG ---------- */}
      <section className="va-azubi-band">
        <div className="wrap-wide va-azubi-band__grid">
          <div className="va-azubi-band__copy">
            <span className="eyebrow" style={{color: "rgba(255,255,255,.7)"}}>Ausbildung 2026 · 40+ freie Plätze</span>
            <h2 className="va-azubi-band__h">
              Mach was,<br/>
              <span className="va-azubi-band__hl">das bleibt.</span>
            </h2>
            <p>
              Maler:in und Lackierer:in ist einer der vielseitigsten Handwerksberufe überhaupt —
              zwischen Denkmalpflege, Fahrzeuglack und moderner Gestaltung. Wir zeigen dir, was
              möglich ist.
            </p>
            <div className="va-azubi-band__ctas">
              <a href="azubi.html" className="btn btn-accent">Zur Azubi-Seite →</a>
              <a href="#" className="btn btn-ghost" style={{borderColor: "rgba(255,255,255,.5)", color: "white"}}>Probetag buchen</a>
            </div>
          </div>
          <div className="va-azubi-band__grid2">
            <div className="va-azubi-band__tile"><img src="public/Azubi-Portrait-01.jpg" alt="Azubi Portrait" /></div>
            <div className="va-azubi-band__tile"><img src="public/Azubi-Portrait-02.jpg" alt="Azubi Portrait" /></div>
            <div className="va-azubi-band__tile"><img src="public/Azubi-Portrait-03.jpg" alt="Azubi Portrait" /></div>
            <div className="va-azubi-band__tile va-azubi-band__num">
              <div className="va-azubi-band__num-v">€ 1.055</div>
              <div className="va-azubi-band__num-l">Start­gehalt 1. Lehrjahr*</div>
              <div className="mono" style={{color: "rgba(255,255,255,.5)", marginTop: 12}}>*Tarif Bremen 2026</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

window.VariantA = VariantA;
