import { clients } from "../../data/clients";

export default function ClientsMarquee() {
  // Duplicate clients array to ensure enough items for continuous seamless loop
  const topRow = [...clients, ...clients, ...clients, ...clients];
  const bottomRow = [...clients].reverse();
  const bottomRowExtended = [...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <section className="py-2 bg-background overflow-hidden">
      <div className="relative group flex flex-col gap-6 w-full mask-edges overflow-hidden">
        {/* Top Row moving Left */}
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6 px-3">
          {topRow.map((client, i) => (
            <div 
              key={`${client.id}-t-${i}`} 
              className="bg-cream border border-border px-10 py-7 rounded-full whitespace-nowrap shadow-sm flex items-center gap-6"
            >
              {client.logo && <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain mix-blend-multiply" />}
              <span className="font-heading font-bold text-ink text-xl">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
