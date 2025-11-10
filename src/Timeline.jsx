export default function Timeline() {
  const timelineEvents = [
    {
      era: "1950s-1970s",
      title: "BRUTALIST ARCHITECTURE",
      description: "Raw concrete, exposed structure, honest materials. Le Corbusier coins 'béton brut' (raw concrete). Buildings embrace function over form.",
      color: "bg-[#808080]",
      items: ["Le Corbusier - Unité d'Habitation", "Paul Rudolph - Yale Art & Architecture", "Denys Lasdun - National Theatre London"]
    },
    {
      era: "1990s-2000s",
      title: "EARLY WEB BRUTALISM",
      description: "Craigslist, Drudge Report - raw HTML, minimal styling, pure function. Accidental Brutalism through technical constraints.",
      color: "bg-[#CCCCCC]",
      items: ["Craigslist launched (1995)", "Drudge Report aesthetic", "Plain HTML dominates"]
    },
    {
      era: "2010s",
      title: "DIGITAL REVIVAL",
      description: "Designers react against over-polished corporate web. Pascal Deville launches brutalistwebsites.com (2014). Intentional roughness emerges.",
      color: "bg-[#FFD233]",
      items: ["Brutalist Websites (2014)", "Bloomberg redesign", "Anti-design movement grows"]
    },
    {
      era: "2020s",
      title: "NEO-BRUTALISM EMERGES",
      description: "Refined brutalism meets usability. Thick borders, hard shadows, bright colors. Balenciaga, Gumroad adopt the style. Function + bold aesthetics.",
      color: "bg-[#F8A9CF]",
      items: ["Gumroad rebrand", "Balenciaga digital presence", "Component libraries emerge"]
    },
    {
      era: "2025",
      title: "MAINSTREAM ACCEPTANCE",
      description: "Neo-Brutalism as legitimate design system. Used in startups, portfolios, creative agencies. No longer 'ugly' - intentionally bold.",
      color: "bg-[#E14A2C]",
      items: ["Design system adoption", "Educational resources", "Framework integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3EAE3] text-[#111]">
      {/* ---------- HEADER ---------- */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-end justify-between">
            <h1 className="text-[56px] md:text-[92px] leading-none font-black tracking-tight uppercase">NEO</h1>
            <div className="hidden md:flex items-center gap-3 text-sm font-bold">
              <a href="/" className="underline-offset-4 hover:underline">Home</a>
              <a href="/timeline" className="bg-[#E14A2C] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000]">Timeline</a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-6 text-sm font-bold">
          <a href="/" className="underline-offset-4 hover:underline">Home</a>
          <a href="/timeline" className="underline-offset-4 underline">Timeline</a>
          <a href="/designers" className="underline-offset-4 hover:underline">Designers</a>
          <a href="/about" className="underline-offset-4 hover:underline">About</a>
          <a href="/#gallery" className="underline-offset-4 hover:underline">Gallery</a>
          <a href="/#resources" className="underline-offset-4 hover:underline">Resources</a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="border-b-8 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black leading-none uppercase">
                History<br/>Of<br/>Neo-Brutalism
              </h2>
              <p className="mt-6 text-xl font-bold">
                From raw concrete to raw code: 75 years of honest design
              </p>
            </div>
            <div className="p-8 bg-[#FFD233] border-4 border-black shadow-[10px_10px_0_0_#000]">
              <div className="font-black text-2xl uppercase mb-4">Timeline Spans</div>
              <div className="space-y-2 text-sm font-bold">
                <div>■ 1950s → Architecture Origins</div>
                <div>■ 1990s → Early Web</div>
                <div>■ 2010s → Digital Revival</div>
                <div>■ 2020s → Neo-Brutalism Born</div>
                <div>■ 2025 → Today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-4 items-start">
              {/* Era Badge */}
              <div className="md:col-span-2">
                <div className="inline-block bg-black text-white px-4 py-2 border-4 border-black font-black text-sm">
                  {event.era}
                </div>
              </div>

              {/* Content Card */}
              <div className="md:col-span-10">
                <div className={`${event.color} border-4 border-black shadow-[8px_8px_0_0_#000] p-6`}>
                  <h3 className="text-3xl font-black uppercase mb-3">{event.title}</h3>
                  <p className="text-base font-medium mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="font-black text-sm uppercase">Key Moments:</div>
                    {event.items.map((item, i) => (
                      <div key={i} className="text-sm font-bold">■ {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- KEY INSIGHT ---------- */}
      <section className="bg-[#E14A2C] border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border-4 border-black shadow-[8px_8px_0_0_#000]">
              <div className="text-6xl font-black mb-4">1950s</div>
              <div className="text-xl font-black uppercase">Architecture</div>
              <div className="mt-3 text-sm font-medium">Raw concrete buildings rejecting ornament</div>
            </div>
            <div className="p-8 bg-white border-4 border-black shadow-[8px_8px_0_0_#000]">
              <div className="text-6xl font-black mb-4">2014</div>
              <div className="text-xl font-black uppercase">Digital Revival</div>
              <div className="mt-3 text-sm font-medium">brutalistwebsites.com launches the movement</div>
            </div>
            <div className="p-8 bg-white border-4 border-black shadow-[8px_8px_0_0_#000]">
              <div className="text-6xl font-black mb-4">2025</div>
              <div className="text-xl font-black uppercase">Mainstream</div>
              <div className="mt-3 text-sm font-medium">Neo-Brutalism as legitimate design system</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PHILOSOPHY EVOLUTION ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-black uppercase mb-8">Evolution of Ideas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_0_#000]">
            <h4 className="font-black text-xl uppercase mb-3">Then: Architecture</h4>
            <div className="space-y-2 text-sm">
              <div>■ Truth to materials (show the concrete)</div>
              <div>■ Expose the structure (don't hide beams)</div>
              <div>■ Function over decoration</div>
              <div>■ Raw, unfinished surfaces</div>
              <div>■ Monumental scale</div>
            </div>
          </div>
          <div className="p-6 bg-[#F8A9CF] border-4 border-black shadow-[6px_6px_0_0_#000]">
            <h4 className="font-black text-xl uppercase mb-3">Now: Web Design</h4>
            <div className="space-y-2 text-sm">
              <div>■ Truth to materials (show the HTML/CSS)</div>
              <div>■ Expose the structure (show the grid)</div>
              <div>■ Function over decoration</div>
              <div>■ Raw, bold interfaces</div>
              <div>■ Bold visual scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs font-bold flex items-center justify-between">
          <span>© {new Date().getFullYear()} Neo‑Brutalism Lab</span>
          <span className="uppercase">From Concrete to Code</span>
        </div>
      </footer>
    </div>
  );
}
