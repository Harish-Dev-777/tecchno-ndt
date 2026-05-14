import { clients } from "../../data/clients";

export default function ClientsGrid() {
  return (
    <section className="py-24 sm:py-32 bg-ink text-cream transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Partners</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-cream">
            Trusted by the Best
          </h2>
          <p className="text-cream/70 text-lg">
            We're proud to have delivered uncompromising inspection services and achieved crucial safety milestones for these industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <div 
              key={client.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
              className="bg-card p-8 rounded-3xl border border-border/50 transition-all hover:border-accent hover:bg-accent group flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
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
