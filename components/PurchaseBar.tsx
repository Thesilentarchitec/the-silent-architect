'use client';

export default function PurchaseBar() {
  const gumroadLink = "https://thesilentarchitec.gumroad.com/l/poqmvj?wanted=true";

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] backdrop-blur-md bg-black/50 border-t border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-medium tracking-tight">
          The Silent Architect — $28
        </div>
        <a 
          href={gumroadLink}
          className="bg-white text-black px-6 py-2 rounded-none font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
