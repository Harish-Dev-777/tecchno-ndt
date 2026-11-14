import SEOHead from "../components/common/SEOHead";
import { pageSEO } from "../data/seoData";

export default function TermsPage() {
  const seo = pageSEO.terms;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        breadcrumbs={seo.breadcrumbs}
      />
      <div className="w-full pt-[88px] bg-cream min-h-screen">
        <section className="py-10 bg-secondary text-ink">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">Terms &amp; Conditions</h1>
            <p className="text-ink-soft">Last updated: May 2026</p>
          </div>
        </section>

        <section className="py-8">
          <article className="max-w-[800px] mx-auto px-6 space-y-12 text-ink-soft">
            
            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                By accessing and utilizing the services provided by Techno NDT Technical Services ("TNTS", "we", "us"), the client accepts and agrees to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">2. Services Description</h2>
              <p className="leading-relaxed mb-4">
                TNTS provides specialized Non-Destructive Testing (NDT) services including RT, UT, PT, MPT, and PWHT. The exact scope, timeline, and standard compliance (e.g., ASME, API, AWS) of each project will be documented in a separate formal Work Order or Contract.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">3. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                While we guarantee adherence to international testing codes, TNTS shall not be liable for any indirect, incidental, or consequential damages resulting from the interpretation of test results by third parties or inherent material failures present prior to our inspection.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All testing methodologies, internal reports, and proprietary documentation utilized by TNTS remain the intellectual property of Techno NDT Technical Services. Clients retain ownership over their physical assets and provided engineering drawings.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">5. Governing Law</h2>
              <p className="leading-relaxed mb-4">
                These Terms shall be governed by and defined following the laws of India. Techno NDT Technical Services and yourself irrevocably consent that the courts of Chennai, Tamil Nadu shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">6. Changes to Terms</h2>
              <p className="leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
              </p>
            </div>

          </article>
        </section>
      </div>
    </>
  );
}
