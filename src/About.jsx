export default function About() {
  const principles = [
    {
      title: "RAWNESS",
      description: "Unrefined, honest aesthetics. No subtle gradients, no soft shadows. Everything is bold and direct.",
      color: "bg-[#E14A2C]",
      examples: ["Thick black borders (3-5px)", "Hard offset shadows", "System fonts", "No polish"]
    },
    {
      title: "STRUCTURE",
      description: "Expose the grid. Show the bones. Make the layout system visible and honest.",
      color: "bg-[#FFD233]",
      examples: ["Visible borders", "Boxed sections", "Clear compartments", "Grid exposure"]
    },
    {
      title: "CONTRAST",
      description: "High contrast everywhere. Black and white dominant, bright accents. No subtlety.",
      color: "bg-[#F8A9CF]",
      examples: ["Stark black/white", "Bright primaries", "Large type scale", "Bold hierarchy"]
    },
    {
      title: "FUNCTION",
      description: "Purpose over decoration. Every element serves a function. Minimal ornament.",
      color: "bg-white",
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
    <div className="min-h-screen bg-[#F3EAE3] text-[#111]">
      {/* ---------- HEADER ---------- */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-end justify-between">
            <h1 className="text-[56px] md:text-[92px] leading-none font-black tracking-tight uppercase">NEO</h1>
            <div className="hidden md:flex items-center gap-3 text-sm font-bold">
              <a href="/" className="underline-offset-4 hover:underline">Home</a>
              <a href="/about" className="bg-[#E14A2C] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000]">About</a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-6 text-sm font-bold">
          <a href="/" className="underline-offset-4 hover:underline">Home</a>
          <a href="/timeline" className="underline-offset-4 hover:underline">Timeline</a>
          <a href="/designers" className="underline-offset-4 hover:underline">Designers</a>
          <a href="/about" className="underline-offset-4 underline">About</a>
          <a href="/#gallery" className="underline-offset-4 hover:underline">Gallery</a>
          <a href="/#resources" className="underline-offset-4 hover:underline">Resources</a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="border-b-8 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-8xl font-black leading-none uppercase mb-8">
            What Is<br/>Neo-Brutalism?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <p className="text-xl font-bold leading-relaxed">
              A digital design movement inspired by Brutalist architecture—raw, honest, stripped-down aesthetics that reject corporate polish.
            </p>
            <div className="p-6 bg-[#FFD233] text-black border-4 border-white">
              <div className="font-black uppercase text-sm mb-2">Definition:</div>
              <div className="text-sm font-bold">
                Neo-Brutalism = Brutalist architecture principles + modern web usability + bold visual aesthetics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CORE PRINCIPLES ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-black uppercase mb-8">Core Principles</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className={`${principle.color} border-4 border-black shadow-[8px_8px_0_0_#000]`}>
              <div className="border-b-4 border-black p-6">
                <h4 className="text-4xl font-black uppercase">{principle.title}</h4>
              </div>
              <div className="p-6">
                <p className="text-base font-medium mb-4 leading-relaxed">
                  {principle.description}
                </p>
                <div className="font-black text-sm uppercase mb-2">Examples:</div>
                <div className="space-y-1 text-sm font-bold">
                  {principle.examples.map((example, i) => (
                    <div key={i}>■ {example}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- STYLE COMPARISON ---------- */}
      <section className="bg-white border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-black uppercase mb-8">Neo-Brutalism vs. Swiss Design</h3>
          <p className="text-lg font-bold mb-8">Understanding what Neo-Brutalism reacts against:</p>
          
          <div className="border-4 border-black">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-0 border-b-4 border-black bg-[#F8A9CF]">
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
              <div key={index} className={`grid grid-cols-7 gap-0 ${index < 5 ? 'border-b-4 border-black' : ''}`}>
                <div className="p-3 font-black text-sm border-r-4 border-black bg-[#FFD233]">
                  {row.aspect}
                </div>
                <div className="p-3 font-medium text-sm col-span-3 border-r-4 border-black">
                  {row.swiss}
                </div>
                <div className="p-3 font-medium text-sm col-span-3 bg-[#F3EAE3]">
                  {row.neo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISUAL CHARACTERISTICS ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-black uppercase mb-8">Visual Characteristics</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Color */}
          <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_0_#000]">
            <h4 className="font-black text-xl uppercase mb-4">Color Palette</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black border-4 border-black"></div>
                <span className="text-sm font-bold">Black - dominant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white border-4 border-black"></div>
                <span className="text-sm font-bold">White - contrast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#E14A2C] border-4 border-black"></div>
                <span className="text-sm font-bold">Tomato - accent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FFD233] border-4 border-black"></div>
                <span className="text-sm font-bold">Yellow - accent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#F8A9CF] border-4 border-black"></div>
                <span className="text-sm font-bold">Pink - accent</span>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="p-6 bg-[#FFD233] border-4 border-black shadow-[6px_6px_0_0_#000]">
            <h4 className="font-black text-xl uppercase mb-4">Typography</h4>
            <div className="space-y-2 text-sm font-bold">
              <div>■ System fonts (Arial, Helvetica)</div>
              <div>■ Monospace for code aesthetic</div>
              <div>■ ALL CAPS for emphasis</div>
              <div>■ Huge headings (60-92px)</div>
              <div>■ Tight line-height (1.2-1.3)</div>
              <div>■ High contrast in sizes</div>
            </div>
          </div>

          {/* Layout */}
          <div className="p-6 bg-[#E14A2C] text-white border-4 border-black shadow-[6px_6px_0_0_#000]">
            <h4 className="font-black text-xl uppercase mb-4">Layout</h4>
            <div className="space-y-2 text-sm font-bold">
              <div>■ Thick borders (3-5px black)</div>
              <div>■ Hard shadows (offset, no blur)</div>
              <div>■ Sharp 90° angles</div>
              <div>■ Exposed grid structure</div>
              <div>■ Boxed sections</div>
              <div>■ Tight spacing</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHEN TO USE ---------- */}
      <section className="bg-[#F8A9CF] border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-black uppercase mb-8">When to Use Neo-Brutalism</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_0_#000]">
              <div className="text-2xl font-black uppercase mb-4">✓ Good For:</div>
              <div className="space-y-2 text-sm font-bold">
                <div>■ Creative portfolios</div>
                <div>■ Bold brand statements</div>
                <div>■ Tech/startup products</div>
                <div>■ Art & culture sites</div>
                <div>■ Anti-establishment messaging</div>
                <div>■ Youth-focused brands</div>
              </div>
            </div>
            <div className="p-6 bg-black text-white border-4 border-black shadow-[6px_6px_0_0_#000]">
              <div className="text-2xl font-black uppercase mb-4">✗ Avoid For:</div>
              <div className="space-y-2 text-sm font-bold">
                <div>■ Corporate enterprises (unless intentional)</div>
                <div>■ Medical/healthcare (trust issues)</div>
                <div>■ Financial services (stability concerns)</div>
                <div>■ Traditional industries</div>
                <div>■ Conservative audiences</div>
                <div>■ Subtle brand positioning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KEY TAKEAWAYS ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="p-8 bg-black text-white border-4 border-black shadow-[12px_12px_0_0_#000]">
          <h3 className="text-3xl font-black uppercase mb-6">Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-6 text-base font-bold">
            <div>
              <div className="text-[#FFD233] font-black uppercase text-sm mb-2">Philosophy:</div>
              <div>Neo-Brutalism is intentionally rough, anti-corporate, and honest about structure. If it looks too polished, it's wrong.</div>
            </div>
            <div>
              <div className="text-[#F8A9CF] font-black uppercase text-sm mb-2">Execution:</div>
              <div>Thick borders, hard shadows, high contrast, system fonts, tight spacing. Function over decoration, always.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs font-bold flex items-center justify-between">
          <span>© {new Date().getFullYear()} Neo‑Brutalism Lab</span>
          <span className="uppercase">Boxy • Loud • Functional</span>
        </div>
      </footer>
    </div>
  );
}
