// Azubi Landing Page — jüngere, mutigere Sprache
// Eigene Seite, verlinkt aus allen Varianten

function AzubiPage() {
  const [active, setActive] = React.useState(0);
  const directions = [
    { k: "Gestaltung & Instandhaltung", desc: "Wände, Decken, Fassaden — klassisches Malerhandwerk mit Gestaltungsfreiheit.", img: "INNENRAUM-WAND", src: "public/Innenraum-Wand.jpg"},
    { k: "Kirchenmalerei & Denkmalpflege", desc: "Historische Bauten, Vergoldung, Restaurierung — für die, die's genau nehmen.", img: "RESTAURIERUNG"},
    { k: "Bauten- & Korrosionsschutz", desc: "Schiffe, Brücken, Stahlhallen — Hochleistungs­beschichtung für draußen.", img: "STAHLBRÜCKE"},
    { k: "Fahrzeuglackierung", desc: "Autos, Oldtimer, Maschinen — Klarlacke, Effektlacke, Feinarbeit.", img: "OLDTIMER"},
    { k: "Kreativ-Techniken", desc: "Illusionsmalerei, Vergoldung, Marmorierung — Kunsthandwerk mit Tradition.", img: "WAND-ORNAMENT"},
  ];

  return (
    <div className="variant variant-azubi">
      <TopBar variant="A" />

      {/* HERO */}
      <section className="az-hero">
        <div className="az-hero__bg"></div>
        <div className="wrap-wide az-hero__grid">
          <div className="az-hero__left">
            <div className="az-hero__stamp">
              <span>40+</span><small>freie Plätze<br/>2026</small>
            </div>
            <div className="mono" style={{color: "rgba(255,255,255,.7)", marginBottom: 20}}>Maler:in & Lackierer:in · 3 Jahre · Bremen</div>
            <h1 className="az-hero__h">
              Werde,<br/>
              was du<br/>
              wirklich<br/>
              <span className="az-hero__accent">siehst</span>.
            </h1>
            <p className="az-hero__p">
              Wände, Autos, Fassaden, Bühnenbilder, Yachten, Denkmäler. Wer Maler:in wird,
              sieht am Ende jedes Tages, was er gemacht hat. Und wird dafür auch noch bezahlt.
            </p>
            <div className="az-hero__ctas">
              <a href="#jobs" className="btn btn-accent">Ausbildungsplatz finden →</a>
              <a href="#" className="btn btn-ghost" style={{borderColor: "rgba(255,255,255,.5)", color: "white"}}>Probetag buchen</a>
            </div>

            <div className="az-hero__facts">
              <div><b>€ 1.055</b><span>1. Lehrjahr</span></div>
              <div><b>€ 1.165</b><span>2. Lehrjahr</span></div>
              <div><b>€ 1.305</b><span>3. Lehrjahr</span></div>
              <div><b>3 Jahre</b><span>bis Geselle</span></div>
            </div>
          </div>
          <div className="az-hero__right">
            <div className="az-hero__img1"><img src="public/Azubiseite-Hero.jpg" alt="Azubi bei der Arbeit" /></div>
            <div className="az-hero__sticker">Farbige<br/>Zukunft.</div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="az-ticker">
        <div className="az-ticker__track">
          {["Das ist kein Bürojob","◼","Du arbeitest mit deinen Händen","◼","Und deinem Kopf","◼","Du siehst was du tust","◼","Keine Theorie ohne Praxis","◼","Meisterperspektive","◼","Weltweit gefragt","◼"].map((s, i) => (
            <span key={i} className={i%2 ? "az-ticker__sep" : ""}>{s}</span>
          ))}
        </div>
      </div>

      {/* 5 GRÜNDE */}
      <section className="az-reasons wrap-wide">
        <div className="az-reasons__head">
          <span className="eyebrow">Fünf gute Gründe</span>
          <h2 className="az-section-h">Warum Maler:in?<br/>Du fragst dich noch?</h2>
        </div>
        <div className="az-reasons__grid">
          {[
            ["01","Du langweilst dich nie.","Jede Baustelle ist anders. Jedes Objekt, jede Farbe, jeder Kunde. Keine zwei Tage gleich."],
            ["02","Du verdienst von Anfang an.","Tariflich — ab Tag 1. Und nach drei Jahren so viel wie viele Studierte."],
            ["03","Du kannst später alles.","Meisterschule, Studium, eigener Betrieb, Ausland. Das Handwerk ist dein Ticket."],
            ["04","Du baust echte Skills.","Chemie, Physik, Design, Maschinen, Kundengespräch. Nix davon verlernt man."],
            ["05","Du wirst gebraucht.","Fachkräfte­mangel ist real — Innungsbetriebe reißen sich um gute Leute."],
          ].map(([n, t, d]) => (
            <div className="az-reason" key={n}>
              <div className="az-reason__n">{n}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FACHRICHTUNGEN */}
      <section className="az-directions">
        <div className="wrap-wide">
          <div className="az-directions__head">
            <span className="eyebrow">Fünf Fachrichtungen</span>
            <h2 className="az-section-h az-section-h--light">Wähl dein Revier.</h2>
          </div>
          <div className="az-directions__grid">
            <div className="az-directions__nav">
              {directions.map((d, i) => (
                <button key={i} className={`az-dir ${i === active ? "az-dir--active" : ""}`} onClick={() => setActive(i)}>
                  <span className="mono">0{i+1}</span>
                  <span className="az-dir__k">{d.k}</span>
                  <span className="az-dir__arr">{i === active ? "●" : "○"}</span>
                </button>
              ))}
            </div>
            <div className="az-directions__preview">
              <div className={`az-directions__img${directions[active].src ? "" : " ph yellow"}`}>
                {directions[active].src
                  ? <img src={directions[active].src} alt={directions[active].k} />
                  : directions[active].img}
              </div>
              <div className="az-directions__text">
                <h3>{directions[active].k}</h3>
                <p>{directions[active].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEG */}
      <section className="az-path wrap-wide">
        <span className="eyebrow">Dein Weg</span>
        <h2 className="az-section-h">So läuft das bei uns.</h2>
        <div className="az-path__steps">
          <div className="az-step"><div className="az-step__n">1</div><h4>Probetag</h4><p>Einen Tag reinschnuppern bei einem Innungsbetrieb in deiner Nähe. Unverbindlich.</p></div>
          <div className="az-step"><div className="az-step__n">2</div><h4>Bewerbung</h4><p>Direkt über unsere Börse — 1 Klick, Betrieb meldet sich in 48h.</p></div>
          <div className="az-step"><div className="az-step__n">3</div><h4>Ausbildung</h4><p>3 Jahre dual: Betrieb + Berufsschule + überbetriebliche Kurse an der MLI.</p></div>
          <div className="az-step"><div className="az-step__n">4</div><h4>Gesellenprüfung</h4><p>Theorie und ein Stück, das du behältst. Willkommen im Handwerk.</p></div>
          <div className="az-step"><div className="az-step__n">5</div><h4>Danach?</h4><p>Meisterschule, eigener Betrieb, Spezialisierung, Ausland — dir steht alles offen.</p></div>
        </div>
      </section>

      {/* STIMMEN */}
      <section className="az-voices">
        <div className="wrap-wide az-voices__grid">
          <article className="az-voice az-voice--1">
            <div className="az-voice__img"><img src="public/Azubi-Portrait-02.jpg" alt="Luka, 2. Lehrjahr" /></div>
            <blockquote>„Ich hab mit Abi angefangen. Kein Tag Reue."</blockquote>
            <div className="mono">Luka, 19 · 2. Lehrjahr · Betrieb Wentzlau</div>
          </article>
          <article className="az-voice az-voice--2">
            <div className="az-voice__img"><img src="public/Azubi-Testimonial-02.jpg" alt="Mira, 3. Lehrjahr" /></div>
            <blockquote>„Ich restauriere gerade ein Haus von 1890. Crazy."</blockquote>
            <div className="mono">Mira, 20 · 3. Lehrjahr · Denkmalpflege</div>
          </article>
          <article className="az-voice az-voice--3">
            <div className="az-voice__img"><img src="public/Azubi-Portrait-03.jpg" alt="Mika, Geselle" /></div>
            <blockquote>„Nach der Ausbildung direkt nach Hamburg — und zurück."</blockquote>
            <div className="mono">Mika, 23 · Geselle · jetzt Vorarbeiter</div>
          </article>
        </div>
      </section>

      {/* JOB LIST */}
      <section id="jobs" className="az-jobs wrap-wide">
        <div className="az-jobs__head">
          <div>
            <span className="eyebrow">Offene Plätze · Start Aug 2026</span>
            <h2 className="az-section-h">Such dir deinen Betrieb.</h2>
          </div>
          <div className="az-jobs__filters">
            <input placeholder="PLZ" defaultValue="28" />
            <select><option>Alle Fachrichtungen</option><option>Gestaltung</option><option>Fahrzeug</option><option>Denkmal</option></select>
            <button className="btn btn-primary">Filtern</button>
          </div>
        </div>
        <div className="az-jobs__list">
          {[
            ["Maler & Lackierer GmbH Wentzlau", "Bremen-Findorff", "Gestaltung & Instandhaltung", "Start Aug 2026", "3 Plätze"],
            ["Bauscher Fahrzeuglackierung", "Bremen-Hemelingen", "Fahrzeuglackierung", "Start Aug 2026", "2 Plätze"],
            ["Rathmann Denkmalpflege", "Bremen-Mitte", "Kirchenmalerei & Denkmalpflege", "Start Sep 2026", "1 Platz"],
            ["Marchal Malerwerkstätten", "Bremen-Walle", "Gestaltung & Instandhaltung", "Start Aug 2026", "4 Plätze"],
            ["Nord Korrosionsschutz KG", "Bremerhaven", "Bauten- & Korrosionsschutz", "Start Aug 2026", "2 Plätze"],
          ].map(([n, o, f, s, p], i) => (
            <a href="#" className="az-job" key={i}>
              <div className="az-job__main">
                <div className="az-job__name">{n}</div>
                <div className="mono">{o}</div>
              </div>
              <div className="az-job__tag"><span className="tag">{f}</span></div>
              <div className="mono">{s}</div>
              <div className="az-job__plz">{p}</div>
              <div className="az-job__arr">→</div>
            </a>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="az-final">
        <div className="wrap-wide az-final__grid">
          <h2 className="az-final__h">Genug<br/>gelesen?</h2>
          <div>
            <p>Buch dir einen Probetag. Kein Anschreiben, kein Lebenslauf. Nur ein Tag, um zu sehen, ob das was für dich ist.</p>
            <a href="#" className="btn btn-accent" style={{marginTop: 24}}>Probetag buchen →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

window.AzubiPage = AzubiPage;
