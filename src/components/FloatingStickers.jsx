export default function FloatingStickers() {
  const stickers = [
    // Top left - Figma-style icon
    {
      position: "top-8 left-12",
      rotation: "-rotate-12",
      animation: "animate-[bounce_3s_ease-in-out_infinite]",
      content: (
        <div className="w-16 h-16 bg-[#A259FF] border-4 border-black rounded-2xl shadow-[6px_6px_0_0_#000] flex items-center justify-center hover:rotate-[360deg] hover:scale-110 transition-all duration-500 cursor-pointer group">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 bg-[#FF7262] rounded-full border-2 border-black group-hover:bg-[#FFD233]"></div>
            <div className="w-3 h-3 bg-[#1ABCFE] rounded-full border-2 border-black group-hover:bg-[#F8A9CF]"></div>
            <div className="w-3 h-3 bg-[#0ACF83] rounded-full border-2 border-black group-hover:bg-[#E14A2C]"></div>
            <div className="w-3 h-3 bg-[#F24E1E] rounded-full border-2 border-black group-hover:bg-[#FFD233]"></div>
          </div>
        </div>
      )
    },
    // Top right - Eye icon
    {
      position: "top-6 right-20",
      rotation: "rotate-6",
      animation: "animate-[pulse_2s_ease-in-out_infinite]",
      content: (
        <div className="w-20 h-20 bg-[#FFD233] border-4 border-black rounded-full shadow-[6px_6px_0_0_#000] flex items-center justify-center hover:bg-[#F8A9CF] hover:scale-125 transition-all duration-300 cursor-pointer group">
          <div className="relative">
            <div className="w-10 h-6 border-4 border-black rounded-full bg-white overflow-hidden">
              <div className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:animate-[wiggle_0.5s_ease-in-out]"></div>
            </div>
          </div>
        </div>
      )
    },
    // Bottom left - Message bubble
    {
      position: "bottom-8 left-16",
      rotation: "-rotate-3",
      animation: "animate-[float_3s_ease-in-out_infinite]",
      content: (
        <div className="w-16 h-14 bg-[#1ABCFE] border-4 border-black rounded-2xl shadow-[6px_6px_0_0_#000] relative hover:bg-[#F8A9CF] hover:scale-110 transition-all duration-300 cursor-pointer group">
          <div className="absolute -bottom-2 left-4 w-4 h-4 bg-[#1ABCFE] border-l-4 border-b-4 border-black rotate-45 group-hover:bg-[#F8A9CF] transition-colors duration-300"></div>
          <div className="flex items-center justify-center h-full gap-1">
            <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:animate-[bounce_0.6s_ease-in-out_infinite]"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:animate-[bounce_0.6s_ease-in-out_infinite_0.2s]"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:animate-[bounce_0.6s_ease-in-out_infinite_0.4s]"></div>
          </div>
        </div>
      )
    },
    // Bottom right - Star
    {
      position: "bottom-6 right-24",
      rotation: "rotate-45",
      animation: "animate-[pulse_2.5s_ease-in-out_infinite]",
      content: (
        <div className="w-16 h-16 bg-[#F8A9CF] border-4 border-black shadow-[6px_6px_0_0_#000] hover:bg-[#FFD233] hover:rotate-[405deg] hover:scale-125 transition-all duration-500 cursor-pointer relative" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
        </div>
      )
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden z-0">
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`absolute ${sticker.position} ${sticker.rotation} ${sticker.animation} pointer-events-auto`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {sticker.content}
        </div>
      ))}
    </div>
  );
}
