import { clients } from "../../data/clients";

export default function ClientsMarquee() {
  // Duplicate clients array to ensure enough items for continuous seamless loop
  const topRow = [...clients, ...clients, ...clients, ...clients];
  const bottomRow = [...clients].reverse();
  const bottomRowExtended = [...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <section className="py-24 bg-cream-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-12 text-center" data-aos="fade-up">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Industry Trust</span>
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-ink mt-2">
          Trusted By Industry Leaders
        </h2>
      </div>

      <div className="relative group flex flex-col gap-6 w-full mask-edges overflow-hidden">
        {/* Top Row moving Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {topRow.map((client, i) => (
            <div 
              key={`${client.id}-t-${i}`} 
              className="bg-cream border border-border px-8 py-5 rounded-full whitespace-nowrap shadow-sm"
            >
              <span className="font-heading font-bold text-ink text-lg">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom Row moving Right (reverse animation by using negative delay or starting position, simplest is reverse flex direction, but we can animate right) */}
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6 px-3" style={{ animationDirection: 'reverse' }}>
          {bottomRowExtended.map((client, i) => (
            <div 
              key={`${client.id}-b-${i}`} 
              className="bg-ink text-cream px-8 py-5 rounded-full whitespace-nowrap shadow-sm"
            >
              <span className="font-heading font-normal text-cream/90 text-lg">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
