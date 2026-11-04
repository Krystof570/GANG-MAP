import {
  Camera,
  ChevronRight,
  Compass,
  Image as ImageIcon,
  MapPin,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";

const navigation = [
  { label: "Mapa", icon: Compass, href: "#mapa", active: true },
  { label: "Fotky", icon: ImageIcon, href: "#fotky", active: false },
  { label: "Crew", icon: Users, href: "#crew", active: false },
];

const stats = [
  { label: "Fotky", value: "—", icon: Camera },
  { label: "Členové", value: "—", icon: Users },
  { label: "Místa", value: "—", icon: MapPin },
];

export default function Home() {
  return (
    <div className="app-shell" id="top">
      <main className="main-content">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="CREW MAP – začátek">
            <span className="brand-mark">C</span>
            <span className="brand-name">CREW MAP</span>
          </a>
          <button className="profile-button" type="button" aria-label="Profil">
            K
          </button>
        </header>

        <section className="hero">
          <div className="eyebrow">TVŮJ SVĚT. VAŠE VZPOMÍNKY.</div>
          <h1>
            Vaše zážitky.
            <span>Na jedné mapě.</span>
          </h1>
          <p>Ukládejte společné momenty a místa, na která nechcete zapomenout.</p>
          <button className="primary-action" type="button">
            <Plus size={19} strokeWidth={2.5} />
            Přidat první fotku
          </button>
        </section>

        <section className="stats-grid" aria-label="Přehled crew">
          {stats.map(({ label, value, icon: Icon }) => (
            <div className="stat-card" key={label}>
              <Icon className="stat-icon" size={17} />
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </section>

        <section className="section-card map-card" id="mapa">
          <div className="section-heading">
            <div>
              <div className="section-kicker">VAŠE SPOLEČNÁ MÍSTA</div>
              <h2>Mapa vzpomínek</h2>
            </div>
            <span className="map-pill"><MapPin size={12} /> MAPA</span>
          </div>

          <div className="map-placeholder">
            <div className="map-empty">
              <div className="map-pin-icon">
                <MapPin size={24} />
              </div>
              <h3>Tady vzniknou vaše příběhy</h3>
              <p>Až přidáte fotky s polohou, uvidíte všechna společná místa právě tady.</p>
            </div>
            <span className="map-credit">OPENSTREETMAP</span>
          </div>
          <div className="map-caption">
            <span className="online-dot" />
            Vaše soukromá mapa
          </div>
        </section>

        <section className="section-card crew-card" id="crew">
          <div className="crew-icon"><Sparkles size={19} /></div>
          <div className="section-kicker">ZAČNI S KAMARÁDY</div>
          <h2>Vytvořte si vlastní crew.</h2>
          <p>Pozvi kamarády a ukládejte si společné fotky i místa na jednom místě.</p>
          <button className="secondary-action" type="button">
            <Users size={17} />
            Vytvořit crew
            <ChevronRight size={17} />
          </button>
        </section>

        <section className="photos-section" id="fotky">
          <div className="photos-heading">
            <div>
              <div className="section-kicker">ALBUM</div>
              <h2>Poslední momenty</h2>
            </div>
            <button className="text-action" type="button" aria-label="Zobrazit všechny fotky">
              Všechny <ChevronRight size={15} />
            </button>
          </div>
          <div className="photos-empty">
            <div className="photos-empty-icon"><ImageIcon size={20} /></div>
            <span>Zatím tu nejsou žádné fotky</span>
          </div>
        </section>

        <footer className="app-footer">CREW MAP · PRIVATE MEMORIES</footer>
      </main>

      <nav className="mobile-nav" aria-label="Hlavní navigace">
        {navigation.map(({ label, icon: Icon, href, active }) => (
          <a
            key={label}
            href={href}
            className={`mobile-nav-link ${active ? "active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
