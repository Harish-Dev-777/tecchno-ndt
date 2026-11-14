import SEOHead from "../components/common/SEOHead";
import { pageSEO } from "../data/seoData";

export default function RefundPolicyPage() {
  const seo = pageSEO.refundPolicy;

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
            <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">Refund Policy</h1>
            <p className="text-ink-soft">Effective Date: May 2026</p>
          </div>
        </section>

        <section className="py-8">
          <article className="max-w-[800px] mx-auto px-6 space-y-12 text-ink-soft">
            
            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">1. Service Nature</h2>
              <p className="leading-relaxed mb-4">
                Techno NDT Technical Services provides project-based industrial inspection, manpower supply, and technical testing services. Due to the labor-intensive and irrevocable nature of these engineering services, standard e-commerce refund policies do not apply.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">2. Refund Eligibility Conditions</h2>
              <p className="leading-relaxed mb-4">
                Refunds or fee adjustments will only be considered under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>If the testing project is cancelled by the client at least 72 hours prior to personnel mobilization.</li>
                <li>If Techno NDT fails to deploy personnel on the agreed contractual date without force majeure exceptions.</li>
                <li>Overpayments or billing errors.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">3. Refund Request Process</h2>
              <p className="leading-relaxed mb-4">
                To request a refund or raise a dispute regarding an invoice, clients must submit a formal request via email to <a href="mailto:technondtfinance@gmail.com" className="text-accent hover:underline font-semibold">technondtfinance@gmail.com</a> within 7 days of the invoice date, citing the Work Order Number and the specific reason.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">4. Payment Terms</h2>
              <p className="leading-relaxed mb-4">
                Advance payments made for mobilization or equipment leasing are strictly non-refundable once personnel or equipment are in transit or on-site.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">5. Non-Refundable Items</h2>
              <p className="leading-relaxed mb-4">
                Any NDT consumables (dyes, films, probes) procured specifically for a client's custom project are entirely non-refundable once purchased.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">6. Contact for Refund Queries</h2>
              <p className="leading-relaxed mb-4">
                For any queries regarding invoicing, billing adjustments, or refunds, please reach out to our finance department directly at <a href="tel:+919841506600" className="text-accent hover:underline font-semibold">+91 98415 06600</a>.
              </p>
            </div>

          </article>
        </section>
      </div>
    </>
  );
}
