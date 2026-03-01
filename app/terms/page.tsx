import Link from "next/link";

export const metadata = {
  title: "Terms of Use — IntelliPharmiCA",
};

export default function TermsOfUse() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        ← Back to Home
      </Link>

      <h1 className="mt-8 text-3xl font-bold text-primary">Terms of Use</h1>
      <p className="mt-2 text-sm text-primary/50">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-primary/75">
        <section>
          <h2 className="text-lg font-semibold text-primary">1. Acceptance of Terms</h2>
          <p className="mt-3">
            By accessing or using the IntelliPharmiCA website, you agree to be bound by these
            Terms of Use. If you do not agree with any part of these terms, please do not use
            this website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">2. Intellectual Property</h2>
          <p className="mt-3">
            All content on this website — including text, graphics, logos, and software — is the
            property of IntelliPharmiCA and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or create derivative works without our express
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">3. Use of the Website</h2>
          <p className="mt-3">
            You agree to use this website only for lawful purposes. You may not use it in any
            way that could damage, disable, or impair the site, or interfere with any other
            party&apos;s use of the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">4. Disclaimer of Warranties</h2>
          <p className="mt-3">
            This website and its content are provided on an &quot;as is&quot; basis without warranties
            of any kind, either express or implied. IntelliPharmiCA does not warrant that the
            site will be uninterrupted or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">5. Limitation of Liability</h2>
          <p className="mt-3">
            IntelliPharmiCA shall not be liable for any indirect, incidental, or consequential
            damages arising from your use of this website or its content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">6. External Links</h2>
          <p className="mt-3">
            This website may contain links to external sites. IntelliPharmiCA is not responsible
            for the content or privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">7. Changes to Terms</h2>
          <p className="mt-3">
            We reserve the right to update these Terms of Use at any time. Continued use of the
            website after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">8. Contact</h2>
          <p className="mt-3">
            If you have any questions about these terms, please contact us via the form on our
            website.
          </p>
        </section>
      </div>
    </main>
  );
}
