import { portfolio } from "../../data/portfolio";

export default function PortfolioGrid() {
  return (
    <section className="py-4 bg-background transition-colors duration-500 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 space-y-12">
        {portfolio.map((project, idx) => {
          return (
            <div 
              key={project.id} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative"
            >
              {/* Text Sidebar - Sticky on Desktop */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit" data-aos="fade-up">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[5rem] font-black text-accent/10 leading-none select-none">
                      0{idx + 1}
                    </span>
                    <div className="h-[2px] flex-1 bg-accent/20"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest">
                      {project.subtitle}
                    </span>
                    <h3 className="font-heading font-black text-4xl sm:text-5xl text-ink leading-[1.1] tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-ink/60 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Images - Stacked Vertically (Column-wise) */}
              <div className="lg:col-span-8 flex flex-col gap-12 sm:gap-20">
                <div 
                  className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-24px_rgba(0,0,0,0.15)] group relative aspect-[4/3] sm:aspect-[16/10]"
                  data-aos="fade-up"
                >
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div 
                  className="w-full sm:w-4/5 ml-auto rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-24px_rgba(0,0,0,0.15)] group relative aspect-square sm:aspect-video"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img 
                    src={project.images[1]} 
                    alt={`${project.title} detail`} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative Stats or Element */}
                <div 
                  className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50"
                  data-aos="fade-up"
                >
                  <div>
                    <span className="block text-2xl font-black text-ink">99.8%</span>
                    <span className="block text-[10px] font-bold text-ink/40 uppercase tracking-widest">Detection Accuracy</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-ink">Zero</span>
                    <span className="block text-[10px] font-bold text-ink/40 uppercase tracking-widest">Safety Incidents</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
