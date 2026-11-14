import { Link } from "react-router-dom";
import { portfolio } from "../../data/portfolio";

export default function PortfolioPreview() {
  const previews = portfolio.slice(0, 4);

  return (
    <section className="py-2 sm:py-4 bg-background text-ink transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8" data-aos="fade-up">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Proven Track Record</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-6 text-ink">
              Our Portfolio
            </h2>
            <p className="text-ink/70 text-lg">
              A glimpse into our extensive inspection experience across critical industrial sectors.
            </p>
          </div>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#25D366] text-white font-bold h-[48px] sm:h-[60px] px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1"
          >
            View All Projects <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {previews.map((project, idx) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative h-[450px] lg:h-[380px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]"
            >
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                <span className="inline-block px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 w-fit">
                  {project.subtitle}
                </span>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
