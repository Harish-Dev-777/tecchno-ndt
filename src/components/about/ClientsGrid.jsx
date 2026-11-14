import { clients } from "../../data/clients";

export default function ClientsGrid() {
  return (
    <section className="py-4 sm:py-6 bg-cream text-ink transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-8 max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Partners
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-ink">
            Trusted by the Best
          </h2>
          <p className="text-ink/70 text-lg">
            We're proud to have delivered uncompromising inspection services and
            achieved crucial safety milestones for these industry leaders.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {clients.map((client, idx) => (
            <div
              key={client.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
              className="flex-grow basis-full sm:basis-[calc(50%-1.5rem)] md:basis-[calc(33.333%-1.5rem)] lg:basis-[calc(25%-1.5rem)] bg-card p-8 rounded-3xl border border-border/50 transition-all hover:border-accent hover:bg-accent group flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div className="mb-6 h-16 w-fit min-w-[120px] bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-500">
                {client.logo && (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full w-full object-contain transition-all duration-300"
                  />
                )}
              </div>
              <h3 className="font-heading font-bold text-xl text-ink mb-6 group-hover:text-background transition-colors duration-300">
                {client.name}
              </h3>
              <div className="mt-auto">
                <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-wide rounded-full group-hover:bg-ink group-hover:text-background group-hover:border-ink transition-all duration-300">
                  {client.work}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
