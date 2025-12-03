export default function NeoBrutalismLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] text-white">
      {/* ---------- HEADER (Gumroad-style) ---------- */}
      <header className="border-b-4 border-black bg-gradient-to-r from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] backdrop-blur-sm bg-opacity-95 sticky top-0 z-50 transition-all duration-300">
        {/* Big wordmark row */}
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-end justify-between">
            <h1 className="text-[56px] md:text-[92px] leading-none font-black tracking-tight uppercase hover:text-[#CCFF00] transition-colors duration-300 cursor-pointer">NEO</h1>
            <div className="hidden md:flex items-center gap-3 text-sm font-bold">
              <a href="#login" className="underline-offset-4 hover:underline hover:text-[#CCFF00] transition-colors duration-200">Login</a>
              <a href="#start" className="bg-[#7B2CBF] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#CCFF00] hover:text-black">Start Exploring</a>
            </div>
          </div>
        </div>
        {/* Nav row */}
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-4 md:gap-6 text-sm font-bold overflow-x-auto">
          <a href="/" className="underline-offset-4 hover:underline hover:text-[#CCFF00] transition-all duration-200 hover:scale-110 whitespace-nowrap">Home</a>
          <a href="/timeline" className="underline-offset-4 hover:underline hover:text-[#9D4EDD] transition-all duration-200 hover:scale-110 whitespace-nowrap">Timeline</a>
          <a href="/designers" className="underline-offset-4 hover:underline hover:text-[#CCFF00] transition-all duration-200 hover:scale-110 whitespace-nowrap">Designers</a>
          <a href="/about" className="underline-offset-4 hover:underline hover:text-[#9D4EDD] transition-all duration-200 hover:scale-110 whitespace-nowrap">About</a>
          <a href="#gallery" className="underline-offset-4 hover:underline hover:text-[#CCFF00] transition-all duration-200 hover:scale-110 whitespace-nowrap">Gallery</a>
          <a href="#resources" className="underline-offset-4 hover:underline hover:text-[#9D4EDD] transition-all duration-200 hover:scale-110 whitespace-nowrap">Resources</a>
          <div className="md:hidden ml-auto">
            <a href="#start" className="bg-black text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000]">Start</a>
          </div>
        </nav>
      </header>

      {/* ---------- HERO (inspired by image #1) ---------- */}
      <section className="border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Copy-led block (pink/yellow cards like Gumroad) */}
          <div className="grid gap-4">
            <div className="p-8 bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#C77DFF] border-4 border-black shadow-[10px_10px_0_0_#000] hover:shadow-[15px_15px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.6s_ease-out] text-white">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Neo‑Brutalism Meets Functionality:
              </h2>
              <p className="mt-3 text-2xl font-black">A UX/UI Aesthetic for 2025</p>
              <p className="mt-4 text-sm max-w-prose font-medium">
                Raw structure, maximal legibility, and bold geometry—translated from béton brut to buttons, cards, and layout systems you can actually ship.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#history" className="bg-[#3D3D3D] text-white px-5 py-3 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#CCFF00] hover:text-black hover:scale-105">Read the History</a>
                <a href="#principles" className="bg-white text-black px-5 py-3 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#7B2CBF] hover:text-white hover:scale-105">Design Principles</a>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#D4FF00] via-[#CCFF00] to-[#B8E600] border-4 border-black shadow-[10px_10px_0_0_#000] font-bold hover:shadow-[15px_15px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.6s_ease-out_0.2s_both] text-black">
              <div className="mb-2">Color Tokens →</div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-[#7B2CBF] border-2 border-black hover:scale-150 hover:rotate-45 transition-transform duration-300 cursor-pointer"/>
                  <span className="text-sm">Purple</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-[#CCFF00] border-2 border-black hover:scale-150 hover:rotate-45 transition-transform duration-300 cursor-pointer"/>
                  <span className="text-sm">Lime</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-[#3D3D3D] border-2 border-black hover:scale-150 hover:rotate-45 transition-transform duration-300 cursor-pointer"/>
                  <span className="text-sm">Charcoal</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-[#E8E8E8] border-2 border-black hover:scale-150 hover:rotate-45 transition-transform duration-300 cursor-pointer"/>
                  <span className="text-sm">Silver</span>
                </div>
              </div>
            </div>
          </div>

          {/* UI window stack (orange accent, black outline) */}
          <div className="relative animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            {/* dashed frame */}
            <div className="absolute inset-2 border-4 border-black border-dashed pointer-events-none animate-[pulse_2s_ease-in-out_infinite]"/>

            <div className="relative mx-auto max-w-lg">
              {/* top window */}
              <div className="-rotate-2 translate-x-2 translate-y-2 hover:rotate-0 hover:scale-105 transition-all duration-500">
                <div className="bg-[#E8E8E8] border-4 border-black shadow-[12px_12px_0_0_#7B2CBF] hover:shadow-[16px_16px_0_0_#CCFF00] transition-all duration-300">
                  <div className="flex items-center gap-2 px-4 py-3 border-b-4 border-black bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF]">
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-black hover:animate-[bounce_0.5s_ease-in-out] cursor-pointer"/>
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-black hover:animate-[bounce_0.5s_ease-in-out] cursor-pointer"/>
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-black hover:animate-[bounce_0.5s_ease-in-out] cursor-pointer"/>
                    <span className="ml-auto font-black text-white uppercase tracking-wide animate-[pulse_1.5s_ease-in-out_infinite]">Loading…</span>
                  </div>
                  <div className="p-5">
                    <div className="h-10 bg-white border-4 border-black rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#CCFF00] via-[#D4FF00] to-[#CCFF00] w-2/3 border-r-4 border-black transition-all duration-1000 hover:w-full" />
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="bg-[#E8E8E8] text-black px-4 py-2 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-[#3D3D3D] hover:text-white transition-all duration-200">Cancel</button>
                      <button className="bg-[#CCFF00] text-black px-4 py-2 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-[#9D4EDD] hover:text-white transition-all duration-200">Click Here</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* search bar card */}
              <div className="mt-6 rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="bg-[#E8E8E8] border-4 border-black shadow-[10px_10px_0_0_#000] p-4 flex items-center gap-3 hover:shadow-[14px_14px_0_0_#CCFF00] transition-all duration-300">
                  <div className="w-8 h-8 border-4 border-black rounded-full hover:bg-[#7B2CBF] transition-colors duration-300 hover:animate-[rotate_1s_linear_infinite]" />
                  <input placeholder="Search brutalist patterns…" className="flex-1 bg-transparent outline-none font-bold placeholder:text-gray-500 focus:placeholder:text-[#7B2CBF] transition-colors duration-300 text-black" />
                  <div className="px-3 py-2 bg-[#CCFF00] text-black border-4 border-black font-black rounded-full hover:bg-[#7B2CBF] hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer">Go</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HISTORY ---------- */}
      <section id="history" className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 p-8 bg-[#E8E8E8] border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideInLeft_0.8s_ease-out] text-black">
          <h3 className="text-3xl font-black uppercase hover:text-[#7B2CBF] transition-colors duration-300">History</h3>
          <p className="mt-4 text-sm leading-relaxed">
            From postwar architectural Brutalism's béton brut to the 2010s web's raw, boxy layouts, designers embraced honesty of structure. In the 2020s, Neo‑Brutalism blends that directness with real usability: strong contrast, huge type, visible grids, and deliberately chunky controls.
          </p>
        </div>
        <aside className="p-6 bg-gradient-to-br from-[#D4FF00] via-[#CCFF00] to-[#B8E600] border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideInRight_0.8s_ease-out] text-black">
          <div className="font-black uppercase hover:text-[#7B2CBF] transition-colors duration-300">Core Traits</div>
          <ul className="mt-3 space-y-1 text-sm font-bold">
            <li className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200 cursor-default">■ Heavy outlines & offset shadows</li>
            <li className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200 cursor-default">■ High-contrast color blocking</li>
            <li className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200 cursor-default">■ Sharp angles or intentional rounds</li>
            <li className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200 cursor-default">■ Exposed grid & boxed sections</li>
            <li className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200 cursor-default">■ Minimal ornament; maximal hierarchy</li>
          </ul>
        </aside>
      </section>

      {/* ---------- PRINCIPLES ---------- */}
      <section id="principles" className="bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#C77DFF] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6 relative z-10">
          {[
            ["Hierarchy", "Let type size and borders carry meaning. Use neon blocks to segment content.", "bg-[#CCFF00]"],
            ["Honesty", "Simple shapes, no soft gradients. If there's depth, it's a hard offset shadow.", "bg-[#E8E8E8]"],
            ["Structure", "Show the layout grid. Boxes stack like slabs; buttons read as components.", "bg-[#3D3D3D]"],
          ].map(([title, text, color], i) => (
            <div 
              key={i} 
              className={`p-6 ${i === 1 ? 'bg-[#3D3D3D] text-white' : 'bg-white text-black'} border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.6s_ease-out] cursor-pointer`}
              style={{ animationDelay: `${i * 0.2}s`, animationFillMode: 'both' }}
            >
              <h4 className={`font-black text-xl uppercase hover:scale-110 transition-transform duration-300 ${i === 1 ? 'hover:text-[#C77DFF]' : ''}`}>{title}</h4>
              <p className={`mt-2 text-sm ${i === 1 ? 'hover:text-[#C77DFF]' : ''}`}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section id="gallery" className="bg-gradient-to-br from-[#D4FF00] via-[#CCFF00] to-[#B8E600] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(45deg, rgba(61,61,61,0.15) 25%, transparent 25%, transparent 75%, rgba(61,61,61,0.15) 75%, rgba(61,61,61,0.15)), linear-gradient(45deg, rgba(61,61,61,0.15) 25%, transparent 25%, transparent 75%, rgba(61,61,61,0.15) 75%, rgba(61,61,61,0.15))', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <h3 className="text-2xl md:text-3xl font-black uppercase hover:text-[#7B2CBF] transition-colors duration-300 animate-[slideInLeft_0.8s_ease-out] text-black">Gallery</h3>
        <p className="mt-3 text-lg font-bold animate-[slideInLeft_0.8s_ease-out_0.2s_both] text-black">Reference examples from the Neo-Brutalist movement</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/images/web-design-trends.jpg", title: "Web Design Trends", desc: "Color blocking example", color: "bg-[#3D3D3D]" },
            { src: "/images/gumroad-example.png", title: "Gumroad", desc: "E-commerce brutalism", color: "bg-[#3D3D3D]" },
            { src: "/images/loading-dialog.webp", title: "Loading Dialog", desc: "UI components", color: "bg-[#3D3D3D]" },
            { src: "/images/design-tutorial.png", title: "Design Tutorial", desc: "Educational content", color: "bg-[#3D3D3D]" },
            { src: "/images/blitz-3d-example.jpg", title: "Blitz 3D", desc: "Typography + 3D", color: "bg-[#3D3D3D]" },
            { src: "/images/ux-design-guide.png", title: "UX/UI Guide", desc: "Design system", color: "bg-[#3D3D3D]" },
            { src: "/images/ui-example.jpg", title: "UI Example", desc: "Form components", color: "bg-[#3D3D3D]" },
            { src: "/images/podcast-interface.webp", title: "Podcast Interface", desc: "Content layout", color: "bg-[#3D3D3D]" }
          ].map((img, i) => (
            <div 
              key={i} 
              className={`bg-[#E8E8E8] border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden hover:shadow-[12px_12px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 cursor-pointer animate-[fadeInUp_0.6s_ease-out] group`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="aspect-[4/3] bg-[#E8E8E8] border-b-4 border-black flex items-center justify-center p-4 overflow-hidden group-hover:bg-[#3D3D3D] transition-colors duration-300">
                <img 
                  src={img.src} 
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center w-full h-full text-white"><div class="font-black text-xl mb-2">${img.title}</div><div class="text-sm font-bold text-center px-4">${img.desc}</div><div class="mt-3 text-xs font-medium">Image: ${img.src.split('/').pop()}</div></div>`;
                  }}
                />
              </div>
              <div className={`p-4 bg-[#E8E8E8] group-hover:${img.color} transition-colors duration-300 text-black group-hover:text-white`}>
                <div className="font-black text-sm uppercase">{img.title}</div>
                <div className="text-xs font-bold mt-1">{img.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-[#3D3D3D] text-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_1s_ease-out]">
          <div className="font-black uppercase text-sm mb-2 hover:text-[#CCFF00] transition-colors duration-300">📁 Add Your Images:</div>
          <div className="text-sm font-medium">
            Place your reference images in <code className="bg-black text-white px-2 py-1 font-bold hover:bg-[#7B2CBF] transition-colors duration-200">/public/images/</code> folder with the following names:
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-bold">
            {['web-design-trends.png', 'gumroad-example.png', 'loading-dialog.png', 'design-tutorial.png', 'blitz-3d-example.png', 'ux-design-guide.png', 'ui-example.png', 'style-comparison.png', 'podcast-interface.png'].map((name, idx) => (
              <div key={idx} className="hover:translate-x-2 hover:text-[#CCFF00] transition-all duration-200 cursor-default">■ {name}</div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ---------- RESOURCES ---------- */}
      <section id="resources" className="bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] border-t-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <h3 className="text-2xl md:text-3xl font-black uppercase text-white">Resources</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
            <ul className="space-y-2 font-bold text-white">
              <li>■ Architectural Brutalism primers</li>
              <li>■ Web brutalism showcases (2014 →)</li>
              <li>■ Component libraries with brutalist DNA</li>
            </ul>
            <div className="p-6 bg-[#E8E8E8] border-4 border-black shadow-[6px_6px_0_0_#000] text-black">
              <div className="font-black uppercase">Starter Tokens</div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#7B2CBF] border-4 border-black p-3 text-center text-white">Purple</div>
                <div className="bg-[#CCFF00] border-4 border-black p-3 text-center text-black">Lime</div>
                <div className="bg-[#3D3D3D] border-4 border-black p-3 text-center text-white">Charcoal</div>
                <div className="bg-[#E8E8E8] border-4 border-black p-3 text-center text-black">Silver</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-black bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs font-bold flex flex-col sm:flex-row items-center justify-between gap-2 text-white relative z-10">
          <span>© {new Date().getFullYear()} Neo‑Brutalism Lab</span>
          <span className="uppercase">Boxy • Loud • Functional</span>
        </div>
      </footer>
    </div>
  );
}
