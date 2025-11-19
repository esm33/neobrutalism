export default function Timeline() {
  const timelineEvents = [
    {
      era: "1950s-1970s",
      title: "BRUTALIST ARCHITECTURE",
      description: "Raw concrete, exposed structure, honest materials. Le Corbusier coins 'béton brut' (raw concrete). Buildings embrace function over form.",
      color: "bg-[#2A2A2A]",
      items: ["Le Corbusier - Unité d'Habitation", "Paul Rudolph - Yale Art & Architecture", "Denys Lasdun - National Theatre London"]
    },
    {
      era: "1990s-2000s",
      title: "EARLY WEB BRUTALISM",
      description: "Craigslist, Drudge Report - raw HTML, minimal styling, pure function. Accidental Brutalism through technical constraints.",
      color: "bg-[#F5F5F5]",
      items: ["Craigslist launched (1995)", "Drudge Report aesthetic", "Plain HTML dominates"]
    },
    {
      era: "2010s",
      title: "DIGITAL REVIVAL",
      description: "Designers react against over-polished corporate web. Pascal Deville launches brutalistwebsites.com (2014). Intentional roughness emerges.",
      color: "bg-[#4A4A4A]",
      items: ["Brutalist Websites (2014)", "Bloomberg redesign", "Anti-design movement grows"]
    },
    {
      era: "2020s",
      title: "NEO-BRUTALISM EMERGES",
      description: "Refined brutalism meets usability. Thick borders, hard shadows, bright colors. Balenciaga, Gumroad adopt the style. Function + bold aesthetics.",
      color: "bg-[#D3D3D3]",
      items: ["Gumroad rebrand", "Balenciaga digital presence", "Component libraries emerge"]
    },
    {
      era: "2025",
      title: "MAINSTREAM ACCEPTANCE",
      description: "Neo-Brutalism as legitimate design system. Used in startups, portfolios, creative agencies. No longer 'ugly' - intentionally bold.",
      color: "bg-[#6B6B6B]",
      items: ["Design system adoption", "Educational resources", "Framework integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] text-white">
      {/* ---------- HEADER ---------- */}
      <header className="border-b-4 border-black bg-gradient-to-r from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-end justify-between">
            <h1 className="text-[56px] md:text-[92px] leading-none font-black tracking-tight uppercase">NEO</h1>
            <div className="hidden md:flex items-center gap-3 text-sm font-bold">
              <a href="/" className="underline-offset-4 hover:underline">Home</a>
              <a href="/timeline" className="bg-[#7B2CBF] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000]">Timeline</a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-4 md:gap-6 text-sm font-bold overflow-x-auto">
          <a href="/" className="underline-offset-4 hover:underline whitespace-nowrap">Home</a>
          <a href="/timeline" className="underline-offset-4 underline whitespace-nowrap">Timeline</a>
          <a href="/designers" className="underline-offset-4 hover:underline whitespace-nowrap">Designers</a>
          <a href="/about" className="underline-offset-4 hover:underline whitespace-nowrap">About</a>
          <a href="/#gallery" className="underline-offset-4 hover:underline whitespace-nowrap">Gallery</a>
          <a href="/#resources" className="underline-offset-4 hover:underline whitespace-nowrap">Resources</a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="border-b-8 border-black bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#C77DFF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-[slideInLeft_0.8s_ease-out]">
              <h2 className="text-5xl md:text-7xl font-black leading-none uppercase hover:text-[#CCFF00] transition-colors duration-300 text-white">
                History<br/>Of<br/>Neo-Brutalism
              </h2>
              <p className="mt-6 text-xl font-bold text-white">
                From raw concrete to raw code: 75 years of honest design
              </p>
            </div>
            <div className="p-8 bg-[#E8E8E8] text-black border-4 border-black shadow-[10px_10px_0_0_#000] hover:shadow-[15px_15px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideInRight_0.8s_ease-out]">
              <div className="font-black text-2xl uppercase mb-4 hover:text-[#7B2CBF] transition-colors duration-300">Timeline Spans</div>
              <div className="space-y-2 text-sm font-bold">
                {['1950s → Architecture Origins', '1990s → Early Web', '2010s → Digital Revival', '2020s → Neo-Brutalism Born', '2025 → Today'].map((item, idx) => (
                  <div key={idx} className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200 cursor-default">■ {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="border-y-8 border-black relative overflow-hidden" style={{
        background: 'linear-gradient(-45deg, #0A0E27, #4A148C, #6A1B9A, #1a1f3a)',
        backgroundSize: '400% 400%',
        animation: 'gradientFlow 15s ease infinite'
      }}>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-12 gap-4 items-start animate-[slideInLeft_0.8s_ease-out] hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              {/* Era Badge */}
              <div className="md:col-span-2">
                <div className="inline-block bg-[#CCFF00] text-black px-4 py-2 border-4 border-black font-black text-base hover:bg-[#3D3D3D] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
                  {event.era}
                </div>
              </div>

              {/* Content Card */}
              <div className="md:col-span-10">
                <div className={`${event.color} border-4 border-black shadow-[8px_8px_0_0_#000] p-6 hover:shadow-[12px_12px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group ${event.color.includes('2A2A2A') || event.color.includes('4A4A4A') || event.color.includes('6B6B6B') ? 'text-white' : 'text-black'}`}>
                  <h3 className="text-3xl font-black uppercase mb-3">{event.title}</h3>
                  <p className="text-base font-medium mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="font-black text-sm uppercase">Key Moments:</div>
                    {event.items.map((item, i) => (
                      <div key={i} className="text-sm font-bold hover:translate-x-2 transition-all duration-200 cursor-default">■ {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ---------- KEY INSIGHT ---------- */}
      <section className="bg-gradient-to-br from-[#9D4EDD] via-[#C77DFF] to-[#9D4EDD] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(199,125,255,0.6) 20px, transparent 20px), radial-gradient(circle at 80% 20%, rgba(199,125,255,0.7) 30px, transparent 30px), radial-gradient(circle at 40% 80%, rgba(157,78,221,0.5) 25px, transparent 25px), radial-gradient(circle at 60% 30%, rgba(199,125,255,0.8) 15px, transparent 15px), radial-gradient(circle at 10% 10%, rgba(157,78,221,0.6) 18px, transparent 18px), radial-gradient(circle at 90% 70%, rgba(199,125,255,0.5) 22px, transparent 22px)', backgroundSize: '200px 200px, 250px 250px, 220px 220px, 180px 180px, 240px 240px, 210px 210px', animation: 'bubbleFloat 18s ease-in-out infinite'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '1950s', title: 'Architecture', desc: 'Raw concrete buildings rejecting ornament', delay: 0 },
              { year: '2014', title: 'Digital Revival', desc: 'brutalistwebsites.com launches the movement', delay: 0.2 },
              { year: '2025', title: 'Mainstream', desc: 'Neo-Brutalism as legitimate design system', delay: 0.4 }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white text-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[14px_14px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.8s_ease-out]" style={{ animationDelay: `${item.delay}s` }}>
                <div className="text-6xl font-black mb-4 hover:text-[#7B2CBF] transition-colors duration-300">{item.year}</div>
                <div className="text-xl font-black uppercase hover:text-[#9D4EDD] transition-colors duration-300">{item.title}</div>
                <div className="mt-3 text-sm font-medium">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PHILOSOPHY EVOLUTION ---------- */}
      <section className="bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <h3 className="text-3xl font-black uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] text-white">Evolution of Ideas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white text-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideInLeft_0.8s_ease-out]">
            <h4 className="font-black text-xl uppercase mb-3 hover:text-[#7B2CBF] transition-colors duration-300">Then: Architecture</h4>
            <div className="space-y-2 text-sm">
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Truth to materials (show the concrete)</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Expose the structure (don't hide beams)</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Function over decoration</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Raw, unfinished surfaces</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Monumental scale</div>
            </div>
          </div>
          <div className="p-6 bg-[#E8E8E8] text-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideInRight_0.8s_ease-out]">
            <h4 className="font-black text-xl uppercase mb-3 hover:text-[#7B2CBF] transition-colors duration-300">Now: Web Design</h4>
            <div className="space-y-2 text-sm">
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Truth to materials (show the HTML/CSS)</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Expose the structure (show the grid)</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Function over decoration</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Raw, bold interfaces</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Bold visual scale</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t-4 border-black bg-[#A259FF]">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs font-bold flex flex-col sm:flex-row items-center justify-between gap-2 text-white">
          <span>© {new Date().getFullYear()} Neo‑Brutalism Lab</span>
          <span className="uppercase">From Concrete to Code</span>
        </div>
      </footer>
    </div>
  );
}
