import { Link } from "react-router-dom";
import { portfolio } from "../../data/portfolio";

export default function PortfolioPreview() {
  const previews = portfolio.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-ink text-cream transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Proven Track Record</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-6 text-cream">
            Our Portfolio
          </h2>
          <p className="text-cream/70 text-lg">
            A glimpse into our extensive inspection experience across critical industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {previews.map((project, idx) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 flex flex-col justify-end h-full">
                <span className="inline-block px-4 py-1.5 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                  {project.subtitle}
                </span>
                <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Link 
            to="/portfolio" 
            className="group relative z-10 flex w-fit mx-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-border bg-card px-8 h-[48px] sm:h-[60px] text-sm font-bold tracking-wide text-ink shadow-xl transition-colors duration-300 hover:border-accent hover:text-white before:absolute before:w-full before:-left-full hover:before:left-0 before:rounded-full before:bg-accent before:transition-all before:duration-700 hover:before:scale-150 hover:before:duration-700 before:-z-10 before:aspect-square"
          >
            View All Projects <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
