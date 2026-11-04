import { Camera, Compass, Image as ImageIcon, MapPin, Plus, Users, ArrowUpRight, Sparkles } from "lucide-react";

const nav = [
  { label: "Mapa", icon: Compass, active: true },
  { label: "Fotky", icon: ImageIcon, active: false },
  { label: "Crew", icon: Users, active: false }
];

export default function Home() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="flex items-center gap-3 px-2 mb-12">
          <div className="brand-mark">C</div>
          <div><div className="font-semibold tracking-[.18em] text-sm">CREW MAP</div><div className="text-[10px] text-[#778078] tracking-widest mt-1">MEMORIES TOGETHER</div></div>
        </div>
        <div className="px-3 mb-3 text-[10px] tracking-[.16em] text-[#68736b] font-semibold">WORKSPACE</div>
        <nav className="space-y-1">{nav.map(({label,icon:Icon,active})=><a key={label} href="#" className={`nav-link ${active?"active":""}`}><Icon size={17}/>{label}</a>)}</nav>
        <div className="mt-auto panel p-4">
          <div className="flex items-center gap-2 text-sm font-medium"><Sparkles size={15} color="#b8f36b"/> Tvoje crew</div>
          <p className="text-xs text-[#858f88] leading-5 mt-2">Vytvoř si skupinu a začni ukládat společné momenty.</p>
          <button className="w-full mt-3 rounded-lg bg-[#b8f36b] text-[#11170d] text-xs font-semibold py-2.5">Vytvořit crew</button>
        </div>
        <div className="mt-5 flex items-center gap-3 px-2"><div className="w-8 h-8 rounded-full bg-[#26352a] grid place-items-center text-xs text-[#b8f36b]">?</div><div className="text-xs text-[#929c94]">Nepřihlášený uživatel</div></div>
      </aside>

      <main className="main-content">
        <header className="flex items-center justify-between gap-4 mb-10">
          <div><div className="eyebrow mb-2">TVŮJ SVĚT. VAŠE VZPOMÍNKY.</div><h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Všechno má <span className="text-[#b8f36b]">své místo.</span></h1><p className="text-sm text-[#89938c] mt-2">Společné momenty, které stojí za to uchovat.</p></div>
          <button className="hidden sm:flex items-center gap-2 rounded-xl bg-[#b8f36b] text-[#11170d] px-4 py-3 text-sm font-semibold"><Plus size={17}/> Přidat fotku</button>
        </header>

        <section className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
          {[{label:"Fotografie",value:"—",icon:Camera},{label:"Členové crew",value:"—",icon:Users},{label:"Místa na mapě",value:"—",icon:MapPin}].map(({label,value,icon:Icon})=><div className="stat-card" key={label}><div className="flex items-center justify-between text-[#89938c]"><span className="text-[10px] sm:text-xs">{label}</span><Icon size={15}/></div><div className="text-2xl sm:text-3xl font-semibold mt-3">{value}</div></div>)}
        </section>

        <section className="panel p-3 sm:p-4 mb-6">
          <div className="flex items-center justify-between px-1 py-1 mb-3"><div><h2 className="font-semibold">Mapa vzpomínek</h2><p className="text-xs text-[#858f88] mt-1">Vaše společná místa na jednom místě</p></div><span className="text-[10px] text-[#b8f36b] border border-[#b8f36b]/20 rounded-full px-3 py-1">MAPA</span></div>
          <div className="map-placeholder grid place-items-center">
            <div className="relative z-10 text-center px-5"><div className="w-12 h-12 rounded-2xl bg-[#b8f36b]/10 border border-[#b8f36b]/20 grid place-items-center mx-auto mb-4"><MapPin color="#b8f36b" size={22}/></div><div className="font-medium">Tvoje mapa teprve čeká na příběhy</div><p className="text-xs text-[#89938c] mt-2 max-w-xs leading-5">Jakmile přidáš první fotografii s polohou, objeví se tady.</p></div>
            <div className="absolute bottom-3 right-3 text-[9px] text-[#657168] tracking-wider">MAP DATA · OPENSTREETMAP</div>
          </div>
        </section>

        <section className="panel p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><div className="eyebrow mb-2">ZAČNI TVOŘIT VZPOMÍNKY</div><h2 className="text-lg font-semibold">Každá crew má svůj příběh.</h2><p className="text-sm text-[#89938c] mt-1">Pozvi kamarády a vytvořte si vlastní mapu společných zážitků.</p></div>
          <button className="shrink-0 flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm hover:border-[#b8f36b]/40"><Users size={16}/> Vytvořit crew <ArrowUpRight size={15}/></button>
        </section>
        <div className="text-center text-[10px] text-[#59635c] mt-8 tracking-wider">CREW MAP · PRIVATE MEMORIES</div>
      </main>

      <nav className="mobile-nav">{nav.map(({label,icon:Icon,active})=><a key={label} href="#" className={`flex flex-col items-center gap-1.5 text-[10px] py-1 ${active?"text-[#b8f36b]":"text-[#849087]"}`}><Icon size={19}/>{label}</a>)}</nav>
    </div>
  );
}
