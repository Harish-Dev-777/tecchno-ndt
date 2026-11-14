import SEOHead from "../components/common/SEOHead";
import { pageSEO } from "../data/seoData";

export default function PrivacyPolicyPage() {
  const seo = pageSEO.privacyPolicy;

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
            <h1 className="font-heading font-black text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="text-ink-soft">Last updated: May 2026</p>
          </div>
        </section>

        <section className="py-8">
          <article className="max-w-[800px] mx-auto px-6 space-y-12 text-ink-soft">
            
            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                Techno NDT Technical Services collects personal and business information when you voluntarily submit it to us. This may include your name, company name, email address, phone number, and any project documentation you upload through our contact or quote forms.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                The information collected is strictly used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide accurate service estimates.</li>
                <li>Schedule internal personnel deployments based on your site details.</li>
                <li>Send administrative information and project updates.</li>
                <li>Improve our website functionality and customer service.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">3. Data Storage &amp; Security</h2>
              <p className="leading-relaxed mb-4">
                We adopt robust data collection, storage, and processing practices. We secure your data against unauthorized access, alteration, disclosure, or destruction. Project-sensitive data (like isometric drawings or QA flows) are stored on encrypted internal servers accessible only to authorized engineers.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">4. Third-Party Services</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent user identification information to others. We may share generic aggregated demographic information not linked to any personal identification regarding visitors with our trusted affiliates and advertisers.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">5. Contact Us for Privacy Concerns</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <br/>
                <strong>Email:</strong> <a href="mailto:technondtfinance@gmail.com" className="text-accent hover:underline">technondtfinance@gmail.com</a>
              </p>
            </div>

          </article>
        </section>
      </div>
    </>
  );
}
