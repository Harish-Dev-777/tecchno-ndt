import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-4 bg-cream text-ink relative overflow-hidden transition-colors duration-500">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-[-15deg] translate-x-1/4"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8" data-aos="fade-up">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-6">Our DNA</h2>
          <div className="space-y-6 text-lg text-ink/70 leading-relaxed">
            <p>
              We in Techno NDT Services (TNS) believe in continual improvement and customer satisfaction our objectives are to render efficient service with a Concept of Quality. To all kinds of Industry and to play an effective role in the development of Non-Destructive Testing / Inspection.
            </p>
            <p>
              Techno NDT Services, staffed by Qualified and Experienced Personnel operating the projects at various locations and all such activities are Coordinated from Chennai We Provide assurance to our customer that ‘Quality and Safety’ are achieved and maintained throughout the service.
            </p>
            <p>
              This objective is achieved through Qualified Staff, Teamwork and Effective Training. To be the best Non – Destructive Testing (NDT) service provider to our customers. We believe that our services are strength and customer is asset to develop this organization a one-stop for all our customer requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center text-center bg-white p-10 sm:p-14 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-ink/5">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-background" />
            </div>
            <h3 className="font-heading font-black text-3xl mb-6 text-ink">Our Vision</h3>
            <p className="text-xl leading-relaxed text-ink/80">
              To be the premier Non-Destructive Testing (NDT) service provider to our customers, recognized globally for accuracy, reliability, and innovation.
            </p>
          </div>

          {/* Mission */}
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center text-center bg-accent p-10 sm:p-14 rounded-[2.5rem]">
            <div className="w-16 h-16 bg-background text-accent rounded-full flex items-center justify-center mb-8 shadow-lg transition-colors">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-3xl text-white mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed text-white/90">
              We believe that our services are strength and customer is asset to develop this organization a one-stop for all our customer requirements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
