export default function NeoBrutalismLanding() {
  return (
    <div className="min-h-screen bg-[#F3EAE3] text-[#111]">
      {/* ---------- HEADER (Gumroad-style) ---------- */}
      <header className="border-b-4 border-black">
        {/* Big wordmark row */}
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-end justify-between">
            <h1 className="text-[56px] md:text-[92px] leading-none font-black tracking-tight uppercase">NEO</h1>
            <div className="hidden md:flex items-center gap-3 text-sm font-bold">
              <a href="#login" className="underline-offset-4 hover:underline">Login</a>
              <a href="#start" className="bg-black text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">Start Exploring</a>
            </div>
          </div>
        </div>
        {/* Nav row */}
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-6 text-sm font-bold">
          <a href="/" className="underline-offset-4 hover:underline">Home</a>
          <a href="/timeline" className="underline-offset-4 hover:underline">Timeline</a>
          <a href="/designers" className="underline-offset-4 hover:underline">Designers</a>
          <a href="/about" className="underline-offset-4 hover:underline">About</a>
          <a href="#gallery" className="underline-offset-4 hover:underline">Gallery</a>
          <a href="#resources" className="underline-offset-4 hover:underline">Resources</a>
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
            <div className="p-8 bg-[#F8A9CF] border-4 border-black shadow-[10px_10px_0_0_#000]">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Neo‑Brutalism Meets Functionality:
              </h2>
              <p className="mt-3 text-2xl font-black">A UX/UI Aesthetic for 2025</p>
              <p className="mt-4 text-sm max-w-prose font-medium">
                Raw structure, maximal legibility, and bold geometry—translated from béton brut to buttons, cards, and layout systems you can actually ship.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#history" className="bg-[#111] text-white px-5 py-3 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">Read the History</a>
                <a href="#principles" className="bg-white px-5 py-3 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">Design Principles</a>
              </div>
            </div>
            <div className="p-6 bg-[#FFD233] border-4 border-black shadow-[10px_10px_0_0_#000] font-bold">
              Color Tokens → <span className="ml-2 inline-flex items-center gap-2">
                <span className="w-4 h-4 inline-block bg-[#E14A2C] border-2 border-black"/> Tomato
                <span className="w-4 h-4 inline-block bg-[#F8A9CF] border-2 border-black ml-3"/> Pink
                <span className="w-4 h-4 inline-block bg-[#FFD233] border-2 border-black ml-3"/> Yellow
                <span className="w-4 h-4 inline-block bg-[#F3EAE3] border-2 border-black ml-3"/> Canvas
              </span>
            </div>
          </div>

          {/* UI window stack (orange accent, black outline) */}
          <div className="relative">
            {/* dashed frame */}
            <div className="absolute inset-2 border-4 border-black border-dashed pointer-events-none"/>

            <div className="relative mx-auto max-w-lg">
              {/* top window */}
              <div className="-rotate-2 translate-x-2 translate-y-2">
                <div className="bg-white border-4 border-black shadow-[12px_12px_0_0_#000]">
                  <div className="flex items-center gap-2 px-4 py-3 border-b-4 border-black bg-[#E14A2C]">
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-black"/>
                    <span className="w-3 h-3 rounded-full bg-[#F3EAE3] border-2 border-black"/>
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-black"/>
                    <span className="ml-auto font-black text-white uppercase tracking-wide">Loading…</span>
                  </div>
                  <div className="p-5">
                    <div className="h-10 bg-[#F3EAE3] border-4 border-black rounded-full overflow-hidden">
                      <div className="h-full bg-[#E14A2C] w-2/3 border-r-4 border-black" />
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="bg-white px-4 py-2 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000]">Cancel</button>
                      <button className="bg-[#E14A2C] text-white px-4 py-2 border-4 border-black rounded-full font-black shadow-[6px_6px_0_0_#000]">Click Here</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* search bar card */}
              <div className="mt-6 rotate-1">
                <div className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] p-4 flex items-center gap-3">
                  <div className="w-8 h-8 border-4 border-black rounded-full" />
                  <input placeholder="Search brutalist patterns…" className="flex-1 bg-transparent outline-none font-bold" />
                  <div className="px-3 py-2 bg-[#E14A2C] text-white border-4 border-black font-black rounded-full">Go</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HISTORY ---------- */}
      <section id="history" className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 p-8 bg-white border-4 border-black shadow-[8px_8px_0_0_#000]">
          <h3 className="text-3xl font-black uppercase">History</h3>
          <p className="mt-4 text-sm leading-relaxed">
            From postwar architectural Brutalism's béton brut to the 2010s web's raw, boxy layouts, designers embraced honesty of structure. In the 2020s, Neo‑Brutalism blends that directness with real usability: strong contrast, huge type, visible grids, and deliberately chunky controls.
          </p>
        </div>
        <aside className="p-6 bg-[#FFD233] border-4 border-black shadow-[8px_8px_0_0_#000]">
          <div className="font-black uppercase">Core Traits</div>
          <ul className="mt-3 space-y-1 text-sm font-bold">
            <li>■ Heavy outlines & offset shadows</li>
            <li>■ High-contrast color blocking</li>
            <li>■ Sharp angles or intentional rounds</li>
            <li>■ Exposed grid & boxed sections</li>
            <li>■ Minimal ornament; maximal hierarchy</li>
          </ul>
        </aside>
      </section>

      {/* ---------- PRINCIPLES ---------- */}
      <section id="principles" className="bg-white border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
          {[
            ["Hierarchy", "Let type size and borders carry meaning. Use neon blocks to segment content."],
            ["Honesty", "Simple shapes, no soft gradients. If there's depth, it's a hard offset shadow."],
            ["Structure", "Show the layout grid. Boxes stack like slabs; buttons read as components."],
          ].map(([title, text], i) => (
            <div key={i} className="p-6 bg-[#F3EAE3] border-4 border-black shadow-[6px_6px_0_0_#000]">
              <h4 className="font-black text-xl uppercase">{title}</h4>
              <p className="mt-2 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-black uppercase">Gallery</h3>
        <p className="mt-3 text-lg font-bold">Reference examples from the Neo-Brutalist movement</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/images/web-design-trends.jpg", title: "Web Design Trends", desc: "Color blocking example" },
            { src: "/images/gumroad-example.png", title: "Gumroad", desc: "E-commerce brutalism" },
            { src: "/images/loading-dialog.webp", title: "Loading Dialog", desc: "UI components" },
            { src: "/images/design-tutorial.png", title: "Design Tutorial", desc: "Educational content" },
            { src: "/images/blitz-3d-example.jpg", title: "Blitz 3D", desc: "Typography + 3D" },
            { src: "/images/ux-design-guide.png", title: "UX/UI Guide", desc: "Design system" },
            { src: "/images/ui-example.jpg", title: "UI Example", desc: "Form components" },
            { src: "/images/podcast-interface.webp", title: "Podcast Interface", desc: "Content layout" }
          ].map((img, i) => (
            <div key={i} className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden">
              <div className="aspect-[4/3] bg-[#F3EAE3] border-b-4 border-black flex items-center justify-center p-4">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center w-full h-full"><div class="font-black text-xl mb-2">${img.title}</div><div class="text-sm font-bold text-center px-4">${img.desc}</div><div class="mt-3 text-xs font-medium text-gray-600">Image: ${img.src.split('/').pop()}</div></div>`;
                  }}
                />
              </div>
              <div className="p-4 bg-white">
                <div className="font-black text-sm uppercase">{img.title}</div>
                <div className="text-xs font-bold mt-1">{img.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-[#FFD233] border-4 border-black shadow-[8px_8px_0_0_#000]">
          <div className="font-black uppercase text-sm mb-2">📁 Add Your Images:</div>
          <div className="text-sm font-medium">
            Place your reference images in <code className="bg-black text-white px-2 py-1 font-bold">/public/images/</code> folder with the following names:
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-bold">
            <div>■ web-design-trends.png</div>
            <div>■ gumroad-example.png</div>
            <div>■ loading-dialog.png</div>
            <div>■ design-tutorial.png</div>
            <div>■ blitz-3d-example.png</div>
            <div>■ ux-design-guide.png</div>
            <div>■ ui-example.png</div>
            <div>■ style-comparison.png</div>
            <div>■ podcast-interface.png</div>
          </div>
        </div>
      </section>

      {/* ---------- RESOURCES ---------- */}
      <section id="resources" className="bg-[#F0EFEF] border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="text-2xl md:text-3xl font-black uppercase">Resources</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
            <ul className="space-y-2 font-bold">
              <li>■ Architectural Brutalism primers</li>
              <li>■ Web brutalism showcases (2014 →)</li>
              <li>■ Component libraries with brutalist DNA</li>
            </ul>
            <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0_0_#000]">
              <div className="font-black uppercase">Starter Tokens</div>
              <div className="mt-3 grid grid-cols-4 gap-3 text-xs">
                <div className="bg-[#E14A2C] border-4 border-black p-3 text-center text-white">Tomato</div>
                <div className="bg-[#F8A9CF] border-4 border-black p-3 text-center">Pink</div>
                <div className="bg-[#FFD233] border-4 border-black p-3 text-center">Yellow</div>
                <div className="bg-[#F3EAE3] border-4 border-black p-3 text-center">Canvas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs font-bold flex items-center justify-between">
          <span>© {new Date().getFullYear()} Neo‑Brutalism Lab</span>
          <span className="uppercase">Boxy • Loud • Functional</span>
        </div>
      </footer>
    </div>
  );
}
