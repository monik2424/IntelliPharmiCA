import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — IntelliPharmiCA",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        ← Back to Home
      </Link>

      <h1 className="mt-8 text-3xl font-bold text-primary">Privacy Policy</h1>
      <p className="mt-2 text-sm text-primary/50">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-primary/75">
        <section>
          <h2 className="text-lg font-semibold text-primary">1. Information We Collect</h2>
          <p className="mt-3">
            When you use our contact form, we collect your name, email address, organization name,
            and the message you submit. We do not collect any other personal data automatically
            unless you provide it voluntarily.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">2. How We Use Your Information</h2>
          <p className="mt-3">
            Information submitted through the contact form is used solely to respond to your inquiry
            and facilitate potential collaboration. We do not sell, rent, or share your personal
            information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">3. Data Storage</h2>
          <p className="mt-3">
            Contact form submissions are transmitted via Resend, a transactional email service.
            We retain contact information only for as long as necessary to respond to your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">4. Cookies</h2>
          <p className="mt-3">
            This website does not use tracking cookies or analytics tools. No personal data is
            collected through cookies or similar technologies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">5. Third-Party Services</h2>
          <p className="mt-3">
            We use Resend (resend.com) to process contact form submissions. Their privacy policy
            governs how they handle data passed through their service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">6. Your Rights</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of any personal information you
            have submitted to us by contacting us directly at the email provided on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">7. Contact</h2>
          <p className="mt-3">
            For any privacy-related questions, please reach out via the contact form on our website.
          </p>
        </section>
      </div>
    </main>
  );
}
