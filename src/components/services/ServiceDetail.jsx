import { Link } from "react-router-dom";

export default function ServiceDetail({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <div 
      id={`service-${service.id}`} 
      className={`scroll-mt-32 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
    >
      <div className="flex-1 w-full" data-aos={isEven ? 'fade-right' : 'fade-left'}>
        <span className="font-heading font-black text-6xl md:text-8xl text-ink/10 block mb-4">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="font-heading font-black text-3xl md:text-4xl text-ink mb-6">
          {service.name}
        </h2>
        <p className="text-xl font-bold text-accent mb-6 leading-snug">
          {service.shortDesc}
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
          {service.detailedDesc}
        </p>
        <Link 
          to="/contact" 
          state={{ selectedService: service.name }}
          className="inline-flex items-center gap-2 bg-ink text-background hover:bg-accent hover:text-white px-8 py-3 rounded-full font-bold transition-all"
        >
          Request this service
        </Link>
      </div>

      <div className="flex-1 w-full" data-aos={isEven ? 'fade-left' : 'fade-right'}>
        <div className="grid grid-cols-2 gap-4">
          <img 
            src={service.images[0]} 
            alt={`${service.name} - View 1`} 
            className="w-full aspect-[4/5] object-cover rounded-[2rem] rounded-tl-none shadow-lg"
          />
          <img 
            src={service.images[1]} 
            alt={`${service.name} - View 2`} 
            className="w-full aspect-[4/5] object-cover rounded-[2rem] rounded-br-none shadow-lg mt-8"
          />
        </div>
      </div>
    </div>
  );
}
