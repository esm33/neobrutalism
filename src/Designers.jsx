export default function Designers() {
  const designers = [
    {
      name: "Pascal Deville",
      role: "Curator & Pioneer",
      color: "bg-[#FFD233]",
      achievements: [
        "Founded brutalistwebsites.com (2014)",
        "Curated 1000+ brutalist web examples",
        "Author of 'Brutalist Websites' book",
        "Defined digital brutalism standards"
      ],
      impact: "Created the definitive archive and legitimized web brutalism as a design movement."
    },
    {
      name: "Balenciaga Digital Team",
      role: "High Fashion Brutalism",
      color: "bg-[#F8A9CF]",
      achievements: [
        "Luxury brand embracing raw aesthetics",
        "Bold typography and stark layouts",
        "No imagery minimalism",
        "Anti-corporate luxury positioning"
      ],
      impact: "Proved brutalism works for high-end brands, not just indie projects."
    },
    {
      name: "Gumroad Design Team",
      role: "E-commerce Innovation",
      color: "bg-[#E14A2C]",
      achievements: [
        "Neo-brutalist e-commerce platform",
        "Bright colors with bold typography",
        "Functional minimalism",
        "Creator-focused UX"
      ],
      impact: "Demonstrated neo-brutalism's viability for complex commercial applications."
    },
    {
      name: "Bloomberg Businessweek",
      role: "Editorial Design",
      color: "bg-[#CCCCCC]",
      achievements: [
        "Bold covers rejecting convention",
        "Raw layouts and unrefined grids",
        "Data-heavy brutalist approach",
        "Anti-design editorial stance"
      ],
      impact: "Brought brutalist principles to mainstream business media and print design."
    },
    {
      name: "David Rudnick",
      role: "Visual Designer",
      color: "bg-[#F3EAE3]",
      achievements: [
        "Music industry brutalist work",
        "Bold typography experiments",
        "Raw digital aesthetics",
        "Counter-culture design approach"
      ],
      impact: "Merged brutalism with contemporary music culture and brand identity."
    },
    {
      name: "Heydon Pickering",
      role: "Inclusive Design Advocate",
      color: "bg-white",
      achievements: [
        "Accessibility-first brutalism",
        "Honest HTML/CSS approach",
        "Performance-focused design",
        "Developer education"
      ],
      impact: "Proved brutalism can be both bold and accessible, function and form united."
    }
  ];

  const studios = [
    {
      name: "Gretel",
      focus: "Motion & Brand",
      work: "Brutalist motion graphics and bold brand systems"
    },
    {
      name: "Tomorrow",
      focus: "Digital Products",
      work: "Neo-brutalist web applications and interfaces"
    },
    {
      name: "Collins",
      focus: "Brand Identity",
      work: "Bold, unrefined brand systems for modern clients"
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
              <a href="/designers" className="bg-[#E14A2C] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000]">Designers</a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-6 text-sm font-bold">
          <a href="/" className="underline-offset-4 hover:underline">Home</a>
          <a href="/timeline" className="underline-offset-4 hover:underline">Timeline</a>
          <a href="/designers" className="underline-offset-4 underline">Designers</a>
          <a href="/about" className="underline-offset-4 hover:underline">About</a>
          <a href="/#gallery" className="underline-offset-4 hover:underline">Gallery</a>
          <a href="/#resources" className="underline-offset-4 hover:underline">Resources</a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="border-b-8 border-black bg-[#FFD233]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-5xl md:text-7xl font-black leading-tight uppercase mb-6">
            Key Practitioners
          </h2>
          <p className="text-2xl font-black max-w-3xl">
            The designers, studios, and brands that defined and refined Neo-Brutalism
          </p>
          <div className="mt-8 inline-block bg-black text-white px-6 py-3 border-4 border-black font-black uppercase text-sm">
            6 Pioneers + 3 Studios
          </div>
        </div>
      </section>

      {/* ---------- DESIGNER PROFILES ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-black uppercase mb-8">Individual Designers & Teams</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {designers.map((designer, index) => (
            <div key={index} className={`${designer.color} border-4 border-black shadow-[8px_8px_0_0_#000]`}>
              {/* Header */}
              <div className="border-b-4 border-black p-6">
                <h4 className="text-3xl font-black uppercase leading-tight">{designer.name}</h4>
                <div className="mt-2 inline-block bg-black text-white px-3 py-1 text-xs font-black uppercase">
                  {designer.role}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="font-black text-sm uppercase mb-2">Key Achievements:</div>
                  <div className="space-y-1 text-sm font-bold">
                    {designer.achievements.map((achievement, i) => (
                      <div key={i}>■ {achievement}</div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-black text-white border-4 border-black">
                  <div className="font-black text-xs uppercase mb-2">Impact:</div>
                  <div className="text-sm font-medium">{designer.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- STUDIOS ---------- */}
      <section className="bg-white border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-black uppercase mb-8">Notable Studios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {studios.map((studio, index) => (
              <div key={index} className="p-6 border-4 border-black shadow-[6px_6px_0_0_#000] bg-[#F3EAE3]">
                <h4 className="text-2xl font-black uppercase mb-2">{studio.name}</h4>
                <div className="inline-block bg-[#E14A2C] text-white px-3 py-1 text-xs font-black uppercase mb-3">
                  {studio.focus}
                </div>
                <p className="text-sm font-medium">{studio.work}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PHILOSOPHY SECTION ---------- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="p-8 bg-[#F8A9CF] border-4 border-black shadow-[10px_10px_0_0_#000]">
          <h3 className="text-3xl font-black uppercase mb-4">What Unites Them</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-black uppercase mb-2">Design Philosophy:</div>
              <div className="space-y-1 font-bold">
                <div>■ Reject corporate polish</div>
                <div>■ Embrace honest structure</div>
                <div>■ Function over decoration</div>
                <div>■ Bold, unapologetic aesthetics</div>
              </div>
            </div>
            <div>
              <div className="font-black uppercase mb-2">Common Techniques:</div>
              <div className="space-y-1 font-bold">
                <div>■ Thick borders (3-5px black)</div>
                <div>■ Hard shadows (no blur)</div>
                <div>■ System fonts or bold sans-serif</div>
                <div>■ High contrast colors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="bg-[#E14A2C] border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <div className="text-3xl font-black uppercase text-white mb-4">
            Want to Join This Movement?
          </div>
          <p className="text-white font-bold text-lg mb-6">
            Study their work. Embrace the rawness. Build something bold.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/timeline" className="bg-white px-6 py-3 border-4 border-black font-black shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">
              VIEW TIMELINE
            </a>
            <a href="/about" className="bg-[#FFD233] px-6 py-3 border-4 border-black font-black shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">
              LEARN THE STYLE
            </a>
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
