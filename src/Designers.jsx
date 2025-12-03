import FloatingStickers from './components/FloatingStickers';

export default function Designers() {
  const designers = [
    {
      name: "Pascal Deville",
      role: "Curator & Pioneer",
      color: "bg-[#E8E8E8] text-black",
      textColor: "text-black",
      hoverColor: "group-hover:text-[#7B2CBF]",
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
      color: "bg-white text-black",
      textColor: "text-black",
      hoverColor: "group-hover:text-[#9D4EDD]",
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
      color: "bg-[#F5F5F5] text-black",
      textColor: "text-black",
      hoverColor: "group-hover:text-[#7B2CBF]",
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
      color: "bg-[#E8E8E8] text-black",
      textColor: "text-black",
      hoverColor: "group-hover:text-[#9D4EDD]",
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
      color: "bg-white text-black",
      textColor: "text-black",
      hoverColor: "group-hover:text-[#7B2CBF]",
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
      color: "bg-[#F5F5F5] text-black",
      textColor: "text-black",
      hoverColor: "group-hover:text-[#9D4EDD]",
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
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] text-white">
      {/* ---------- HEADER ---------- */}
      <header className="border-b-4 border-black sticky top-0 z-50 bg-gradient-to-r from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="flex items-end justify-between">
            <h1 className="text-[56px] md:text-[92px] leading-none font-black tracking-tight uppercase hover:text-[#CCFF00] transition-colors duration-300">NEO</h1>
            <div className="hidden md:flex items-center gap-3 text-sm font-bold">
              <a href="/" className="underline-offset-4 hover:underline hover:scale-110 transition-all duration-200">Home</a>
              <a href="/designers" className="bg-[#7B2CBF] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">Designers</a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 pb-4 flex items-center gap-4 md:gap-6 text-sm font-bold overflow-x-auto">
          <a href="/" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#CCFF00] transition-all duration-200 whitespace-nowrap">Home</a>
          <a href="/timeline" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#9D4EDD] transition-all duration-200 whitespace-nowrap">Timeline</a>
          <a href="/designers" className="underline-offset-4 underline scale-110 text-[#CCFF00] whitespace-nowrap">Designers</a>
          <a href="/about" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#9D4EDD] transition-all duration-200 whitespace-nowrap">About</a>
          <a href="/#gallery" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#CCFF00] transition-all duration-200 whitespace-nowrap">Gallery</a>
          <a href="/#resources" className="underline-offset-4 hover:underline hover:scale-110 hover:text-[#9D4EDD] transition-all duration-200 whitespace-nowrap">Resources</a>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="border-b-8 border-black bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#C77DFF] relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black leading-tight uppercase mb-6 animate-[fadeInUp_0.8s_ease-out] hover:text-[#CCFF00] transition-colors duration-300 text-white">
            Key Practitioners
          </h2>
          <p className="text-2xl font-black max-w-3xl animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0 text-white" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
            The designers, studios, and brands that defined and refined Neo-Brutalism
          </p>
          <div className="mt-8 inline-block bg-[#3D3D3D] text-white px-6 py-3 border-4 border-black font-black uppercase text-sm hover:bg-[#CCFF00] hover:text-black hover:shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.4s] opacity-0 cursor-default" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
            6 Pioneers + 3 Studios
          </div>
        </div>
      </section>

      {/* ---------- DESIGNER PROFILES ---------- */}
      <section className="bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <h3 className="text-3xl font-black uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] text-white">Individual Designers & Teams</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {designers.map((designer, index) => (
            <div key={index} className={`${designer.color} border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[14px_14px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[fadeInUp_0.8s_ease-out]`} style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Header */}
              <div className={`border-b-4 border-black p-6 ${designer.textColor}`}>
                <h4 className={`text-3xl font-black uppercase leading-tight ${designer.hoverColor} transition-colors duration-300`}>{designer.name}</h4>
                <div className="mt-2 inline-block bg-[#7B2CBF] text-white px-3 py-1 text-xs font-black uppercase group-hover:bg-[#CCFF00] group-hover:text-black transition-colors duration-300">
                  {designer.role}
                </div>
              </div>
              
              {/* Content */}
              <div className={`p-6 ${designer.textColor}`}>
                <div className="mb-4">
                  <div className={`font-black text-sm uppercase mb-2 ${designer.hoverColor} transition-colors duration-300`}>Key Achievements:</div>
                  <div className="space-y-1 text-sm font-bold">
                    {designer.achievements.map((achievement, i) => (
                      <div key={i} className={`hover:translate-x-2 ${designer.hoverColor} transition-all duration-200`}>■ {achievement}</div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-[#7B2CBF] text-white border-4 border-black group-hover:bg-[#9D4EDD] group-hover:text-white transition-colors duration-300">
                  <div className="font-black text-xs uppercase mb-2">Impact:</div>
                  <div className="text-sm font-medium">{designer.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ---------- STUDIOS ---------- */}
      <section className="bg-gradient-to-br from-[#D4FF00] via-[#CCFF00] to-[#B8E600] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <h3 className="text-3xl font-black uppercase mb-8 animate-[fadeInUp_0.8s_ease-out] text-black">Notable Studios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {studios.map((studio, index) => (
              <div key={index} className="p-6 border-4 border-black shadow-[6px_6px_0_0_#000] bg-[#3D3D3D] text-white hover:shadow-[12px_12px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group animate-[fadeInUp_0.8s_ease-out]" style={{ animationDelay: `${index * 0.2}s` }}>
                <h4 className="text-2xl font-black uppercase mb-2 group-hover:text-[#CCFF00] transition-colors duration-300">{studio.name}</h4>
                <div className="inline-block bg-[#CCFF00] text-black px-3 py-1 text-xs font-black uppercase mb-3 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {studio.focus}
                </div>
                <p className="text-sm font-medium">{studio.work}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PHILOSOPHY SECTION ---------- */}
      <section className="bg-gradient-to-br from-[#9D4EDD] via-[#C77DFF] to-[#9D4EDD] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(199,125,255,0.6) 20px, transparent 20px), radial-gradient(circle at 80% 20%, rgba(199,125,255,0.7) 30px, transparent 30px), radial-gradient(circle at 40% 80%, rgba(157,78,221,0.5) 25px, transparent 25px), radial-gradient(circle at 60% 30%, rgba(199,125,255,0.8) 15px, transparent 15px), radial-gradient(circle at 10% 10%, rgba(157,78,221,0.6) 18px, transparent 18px), radial-gradient(circle at 90% 70%, rgba(199,125,255,0.5) 22px, transparent 22px)', backgroundSize: '200px 200px, 250px 250px, 220px 220px, 180px 180px, 240px 240px, 210px 210px', animation: 'bubbleFloat 18s ease-in-out infinite'}}></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="p-8 bg-white border-4 border-black shadow-[10px_10px_0_0_#000] hover:shadow-[16px_16px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.8s_ease-out]">
          <h3 className="text-3xl font-black uppercase mb-4 text-black hover:text-[#7B2CBF] transition-colors duration-300">What Unites Them</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-black">
            <div>
              <div className="font-black uppercase mb-2 hover:text-[#9D4EDD] transition-colors duration-300">Design Philosophy:</div>
              <div className="space-y-1 font-bold">
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Reject corporate polish</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Embrace honest structure</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Function over decoration</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Bold, unapologetic aesthetics</div>
              </div>
            </div>
            <div>
              <div className="font-black uppercase mb-2 hover:text-[#9D4EDD] transition-colors duration-300">Common Techniques:</div>
              <div className="space-y-1 font-bold">
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Thick borders (3-5px black)</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ Hard shadows (no blur)</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ System fonts or bold sans-serif</div>
                <div className="hover:translate-x-2 hover:text-[#7B2CBF] transition-all duration-200">■ High contrast colors</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gradient-to-br from-[#3D3D3D] via-[#4A4A4A] to-[#3D3D3D] border-y-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <FloatingStickers />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center relative z-10">
          <div className="text-3xl font-black uppercase text-white mb-4 animate-[fadeInUp_0.8s_ease-out] hover:scale-105 hover:text-[#CCFF00] transition-all duration-300">
            Want to Join This Movement?
          </div>
          <p className="text-white font-bold text-lg mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
            Study their work. Embrace the rawness. Build something bold.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/timeline" className="bg-[#CCFF00] text-black px-6 py-3 border-4 border-black font-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#7B2CBF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.4s] opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
              VIEW TIMELINE
            </a>
            <a href="/about" className="bg-[#9D4EDD] text-white px-6 py-3 border-4 border-black font-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#CCFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.6s] opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}>
              LEARN THE STYLE
            </a>
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
