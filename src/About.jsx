export default function About() {
  const principles = [
    {
      title: "RAWNESS",
      description: "Unrefined, honest aesthetics. No subtle gradients, no soft shadows. Everything is bold and direct.",
      color: "bg-white text-black",
      textHover: "group-hover:text-[#7B2CBF]",
      examples: ["Thick black borders (3-5px)", "Hard offset shadows", "System fonts", "No polish"]
    },
    {
      title: "STRUCTURE",
      description: "Expose the grid. Show the bones. Make the layout system visible and honest.",
      color: "bg-[#3D3D3D] text-white",
      textHover: "group-hover:text-[#CCFF00]",
      examples: ["Visible borders", "Boxed sections", "Clear compartments", "Grid exposure"]
    },
    {
      title: "CONTRAST",
      description: "High contrast everywhere. Black and white dominant, bright accents. No subtlety.",
      color: "bg-[#3D3D3D] text-white",
      textHover: "group-hover:text-[#CCFF00]",
      examples: ["Stark black/white", "Bright primaries", "Large type scale", "Bold hierarchy"]
    },
    {
      title: "FUNCTION",
      description: "Purpose over decoration. Every element serves a function. Minimal ornament.",
      color: "bg-[#E8E8E8] text-black",
      textHover: "group-hover:text-[#7B2CBF]",
      examples: ["Functional UI", "No decoration", "Clear purpose", "Honest interaction"]
    }
  ];

  const comparison = [
    {
      style: "Swiss Design",
      grid: "Invisible, mathematical",
      spacing: "Generous white space",
      typography: "Refined hierarchy",
      colors: "Minimal, refined",
      borders: "Thin or absent",
      feel: "Professional, elegant"
    },
    {
      style: "Neo-Brutalism",
      grid: "Visible, exposed",
      spacing: "Tight, packed",
      typography: "Abrupt contrast",
      colors: "Stark + bright accents",
      borders: "Thick, black, dominant",
      feel: "Rough, rebellious"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] text-white">
      {/* ---------- HEADER ---------- */}
      <header className="border-b-4 border-black sticky top-0 z-50 bg-gradient-to-r from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-end justify-between">
            <h1 className="text-[56px] md:text-[92px] leading-none font-black tracking-tight uppercase hover:text-[#CCFF00] transition-colors duration-300">NEO</h1>
            <div className="hidden md:flex items-center gap-3 text-sm font-bold">
              <a href="/" className="underline-offset-4 hover:underline hover:scale-110 transition-all duration-200">Home</a>
              <a href="/about" className="bg-[#7B2CBF] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">About</a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-4 md:gap-6 text-sm font-bold overflow-x-auto">
          <a href="/" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#CCFF00] transition-all duration-200 whitespace-nowrap">Home</a>
          <a href="/timeline" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#9D4EDD] transition-all duration-200 whitespace-nowrap">Timeline</a>
          <a href="/designers" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#CCFF00] transition-all duration-200 whitespace-nowrap">Designers</a>
          <a href="/about" className="underline-offset-4 underline scale-110 text-[#CCFF00] whitespace-nowrap">About</a>
          <a href="/#gallery" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#9D4EDD] transition-all duration-200 whitespace-nowrap">Gallery</a>
          <a href="/#resources" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#CCFF00] transition-all duration-200 whitespace-nowrap">Resources</a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="border-b-8 border-black bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black leading-none uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] hover:text-[#CCFF00] transition-colors duration-300">
            What Is<br/>Neo-Brutalism?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <p className="text-xl font-bold leading-relaxed animate-[slideInLeft_0.8s_ease-out_0.2s] opacity-0" style={{ animation: 'slideInLeft 0.8s ease-out 0.2s forwards' }}>
              A digital design movement inspired by Brutalist architecture—raw, honest, stripped-down aesthetics that reject corporate polish.
            </p>
            <div className="p-6 bg-gradient-to-br from-[#CCFF00] via-[#D4FF00] to-[#B8E600] text-black border-4 border-white hover:shadow-[10px_10px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideInRight_0.8s_ease-out_0.4s] opacity-0" style={{ animation: 'slideInRight 0.8s ease-out 0.4s forwards' }}>
              <div className="font-black uppercase text-sm mb-2 hover:text-[#7B2CBF] transition-colors duration-300">Definition:</div>
              <div className="text-sm font-bold">
                Neo-Brutalism = Brutalist architecture principles + modern web usability + bold visual aesthetics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CORE PRINCIPLES ---------- */}
      <section className="bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#C77DFF] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <h3 className="text-3xl font-black uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] text-white">Core Principles</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className={`${principle.color} border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[14px_14px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[fadeInUp_0.8s_ease-out]`} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="border-b-4 border-black p-6">
                <h4 className={`text-4xl font-black uppercase ${principle.textHover} transition-colors duration-300`}>{principle.title}</h4>
              </div>
              <div className="p-6">
                <p className="text-base font-medium mb-4 leading-relaxed">
                  {principle.description}
                </p>
                <div className={`font-black text-sm uppercase mb-2 ${principle.textHover} transition-colors duration-300`}>Examples:</div>
                <div className="space-y-1 text-sm font-bold">
                  {principle.examples.map((example, i) => (
                    <div key={i} className={`hover:translate-x-2 ${principle.textHover} transition-all duration-200`}>■ {example}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ---------- STYLE COMPARISON ---------- */}
      <section className="bg-gradient-to-b from-[#CCFF00] via-[#00D9C8] to-[#008B8B] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(45deg, rgba(61,61,61,0.15) 25%, transparent 25%, transparent 75%, rgba(61,61,61,0.15) 75%, rgba(61,61,61,0.15)), linear-gradient(45deg, rgba(61,61,61,0.15) 25%, transparent 25%, transparent 75%, rgba(61,61,61,0.15) 75%, rgba(61,61,61,0.15))', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <h3 className="text-3xl font-black uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] text-black">Neo-Brutalism vs. Swiss Design</h3>
          <p className="text-lg font-bold mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0 text-black" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>Understanding what Neo-Brutalism reacts against:</p>
          
          <div className="overflow-x-auto">
            <div className="border-4 border-black animate-[fadeInUp_0.8s_ease-out_0.4s] opacity-0 hover:shadow-[10px_10px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 min-w-[600px] bg-[#E8E8E8]" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-0 border-b-4 border-black bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white">
                <div className="p-3 font-black text-sm uppercase border-r-4 border-black">Aspect</div>
                <div className="p-3 font-black text-sm uppercase col-span-3 border-r-4 border-black">Swiss Design</div>
                <div className="p-3 font-black text-sm uppercase col-span-3">Neo-Brutalism</div>
              </div>
              
              {/* Rows */}
              {[
                { aspect: "Grid", swiss: comparison[0].grid, neo: comparison[1].grid },
                { aspect: "Spacing", swiss: comparison[0].spacing, neo: comparison[1].spacing },
                { aspect: "Typography", swiss: comparison[0].typography, neo: comparison[1].typography },
                { aspect: "Colors", swiss: comparison[0].colors, neo: comparison[1].colors },
                { aspect: "Borders", swiss: comparison[0].borders, neo: comparison[1].borders },
                { aspect: "Feel", swiss: comparison[0].feel, neo: comparison[1].feel }
              ].map((row, index) => (
                <div key={index} className={`grid grid-cols-7 gap-0 ${index < 5 ? 'border-b-4 border-black' : ''} group hover:bg-gradient-to-r hover:from-[#9D4EDD] hover:via-[#C77DFF] hover:to-[#9D4EDD] transition-colors duration-200`}>
                  <div className="p-3 font-black text-sm border-r-4 border-black bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] text-white group-hover:bg-gradient-to-br group-hover:from-[#CCFF00] group-hover:via-[#D4FF00] group-hover:to-[#CCFF00] group-hover:text-black transition-all duration-300">
                    {row.aspect}
                  </div>
                  <div className="p-3 font-medium text-sm col-span-3 border-r-4 border-black bg-white text-black">
                    {row.swiss}
                  </div>
                  <div className="p-3 font-medium text-sm col-span-3 bg-[#E8E8E8] group-hover:font-bold transition-all duration-200 text-black">
                    {row.neo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VISUAL CHARACTERISTICS ---------- */}
      <section className="bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <h3 className="text-3xl font-black uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] text-white">Visual Characteristics</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Color */}
          <div className="p-6 bg-[#E8E8E8] text-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[fadeInUp_0.8s_ease-out]">
            <h4 className="font-black text-xl uppercase mb-4 group-hover:text-[#7B2CBF] transition-colors duration-300">Color Palette</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-black border-4 border-black"></div>
                <span className="text-sm font-bold">Black - dominant</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-white border-4 border-black"></div>
                <span className="text-sm font-bold">White - contrast</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#E14A2C] border-4 border-black hover:scale-110 transition-transform duration-200"></div>
                <span className="text-sm font-bold">Tomato - accent</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#FFD233] border-4 border-black hover:scale-110 transition-transform duration-200"></div>
                <span className="text-sm font-bold">Yellow - accent</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                <div className="w-8 h-8 bg-[#F8A9CF] border-4 border-black hover:scale-110 transition-transform duration-200"></div>
                <span className="text-sm font-bold">Pink - accent</span>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="p-6 bg-[#3D3D3D] text-white border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[fadeInUp_0.8s_ease-out_0.15s] opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.15s forwards' }}>
            <h4 className="font-black text-xl uppercase mb-4 group-hover:text-[#CCFF00] transition-colors duration-300">Typography</h4>
            <div className="space-y-2 text-sm font-bold">
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ System fonts (Arial, Helvetica)</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Monospace for code aesthetic</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ ALL CAPS for emphasis</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Huge headings (60-92px)</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Tight line-height (1.2-1.3)</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ High contrast in sizes</div>
            </div>
          </div>

          {/* Layout */}
          <div className="p-6 bg-white text-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#9D4EDD] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[fadeInUp_0.8s_ease-out_0.3s] opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s forwards' }}>
            <h4 className="font-black text-xl uppercase mb-4 group-hover:text-[#7B2CBF] transition-colors duration-300">Layout</h4>
            <div className="space-y-2 text-sm font-bold">
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Thick borders (3-5px black)</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Hard shadows (offset, no blur)</div>
              <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Sharp 90° angles</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Exposed grid structure</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Boxed sections</div>
              <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Tight spacing</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ---------- WHEN TO USE ---------- */}
      <section className="bg-gradient-to-br from-[#9D4EDD] via-[#C77DFF] to-[#9D4EDD] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(199,125,255,0.6) 20px, transparent 20px), radial-gradient(circle at 80% 20%, rgba(199,125,255,0.7) 30px, transparent 30px), radial-gradient(circle at 40% 80%, rgba(157,78,221,0.5) 25px, transparent 25px), radial-gradient(circle at 60% 30%, rgba(199,125,255,0.8) 15px, transparent 15px), radial-gradient(circle at 10% 10%, rgba(157,78,221,0.6) 18px, transparent 18px), radial-gradient(circle at 90% 70%, rgba(199,125,255,0.5) 22px, transparent 22px)', backgroundSize: '200px 200px, 250px 250px, 220px 220px, 180px 180px, 240px 240px, 210px 210px', animation: 'bubbleFloat 18s ease-in-out infinite'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <h3 className="text-3xl font-black uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] text-white hover:text-[#CCFF00] transition-colors duration-300">When to Use Neo-Brutalism</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white text-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[slideInLeft_0.8s_ease-out_0.2s] opacity-0" style={{ animation: 'slideInLeft 0.8s ease-out 0.2s forwards' }}>
              <div className="text-2xl font-black uppercase mb-4 group-hover:text-[#7B2CBF] transition-colors duration-300">✓ Good For:</div>
              <div className="space-y-2 text-sm font-bold">
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Creative portfolios</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Bold brand statements</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Tech/startup products</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Art & culture sites</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Anti-establishment messaging</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Youth-focused brands</div>
              </div>
            </div>
            <div className="p-6 bg-[#3D3D3D] text-white border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[slideInRight_0.8s_ease-out_0.4s] opacity-0" style={{ animation: 'slideInRight 0.8s ease-out 0.4s forwards' }}>
              <div className="text-2xl font-black uppercase mb-4 group-hover:text-[#CCFF00] transition-colors duration-300">✗ Avoid For:</div>
              <div className="space-y-2 text-sm font-bold">
                <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Corporate enterprises (unless intentional)</div>
                <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Medical/healthcare (trust issues)</div>
                <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Financial services (stability concerns)</div>
                <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Traditional industries</div>
                <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Conservative audiences</div>
                <div className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200">■ Subtle brand positioning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KEY TAKEAWAYS ---------- */}
      <section className="bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="p-8 bg-white text-black border-4 border-black shadow-[12px_12px_0_0_#000] hover:shadow-[18px_18px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.8s_ease-out]">
          <h3 className="text-3xl font-black uppercase mb-6 hover:text-[#7B2CBF] transition-colors duration-300">Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-6 text-base font-bold">
            <div className="hover:translate-x-2 transition-transform duration-200">
              <div className="text-[#7B2CBF] font-black uppercase text-sm mb-2">Philosophy:</div>
              <div>Neo-Brutalism is intentionally rough, anti-corporate, and honest about structure. If it looks too polished, it's wrong.</div>
            </div>
            <div className="hover:translate-x-2 transition-transform duration-200">
              <div className="text-[#9D4EDD] font-black uppercase text-sm mb-2">Execution:</div>
              <div>Thick borders, hard shadows, high contrast, system fonts, tight spacing. Function over decoration, always.</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t-4 border-black bg-[#7B2CBF]">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs font-bold flex flex-col sm:flex-row items-center justify-between gap-2 text-white">
          <span>© {new Date().getFullYear()} Neo‑Brutalism Lab</span>
          <span className="uppercase">Boxy • Loud • Functional</span>
        </div>
      </footer>
    </div>
  );
}
