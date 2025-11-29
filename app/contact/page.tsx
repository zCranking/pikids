// Shared Button component used for form actions and links
import Button from "@/app/components/Button";

// Contact page: provides a contact form, direct contact
// information, hours, social links, newsletter signup, map,
// and FAQ quick links. Comments explain structure/purpose.
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section
        - Purpose: Page title and brief invitation to reach out.
        - Design: Soft gradient matching brand palette.
      */}
      <section className="bg-gradient-to-br from-pastel-green-light to-pastel-yellow-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Want to get involved? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info
        - Purpose: Two-column layout with a simple contact form and
          supplemental contact channels (email/phone/location), hours,
          and social links.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form
              - Note: Currently client-side only (no handler). Integrate
                with API route or external service when ready.
            */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  >
                    <option value="">Select a topic...</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="workshop">Workshop Registration</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="donation">Donation Question</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll get back to you within 24-48 hours.
                </p>
              </form>
            </div>

            {/* Contact Information
              - Purpose: Alternative ways to reach Pi Kids.
              - Includes: Email, phone, physical address, hours, socials.
            */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6 mb-12">
                <ContactInfo
                  icon="📧"
                  title="Email"
                  content="hello@pikids.org"
                  href="mailto:hello@pikids.org"
                />
                <ContactInfo
                  icon="📞"
                  title="Phone"
                  content="(555) 123-4567"
                  href="tel:+15551234567"
                />
                <ContactInfo
                  icon="📍"
                  title="Location"
                  content="123 Education Way, Learning City, CA 90210"
                />
              </div>

              {/* Hours: office availability summary */}
              <div className="bg-pastel-cream rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🕐</span> Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM PST (Workshop days)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Social Links: external profiles with accessible icons */}
              <div className="bg-pastel-green-light rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <SocialLink
                    name="Instagram"
                    href="https://instagram.com"
                    icon="instagram"
                  />
                  <SocialLink
                    name="Facebook"
                    href="https://facebook.com"
                    icon="facebook"
                  />
                  <SocialLink
                    name="LinkedIn"
                    href="https://linkedin.com"
                    icon="linkedin"
                  />
                  <SocialLink
                    name="Twitter"
                    href="https://twitter.com"
                    icon="twitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup
        - Purpose: Collect emails for updates; form is non-functional
          placeholder pending backend integration.
      */}
      <section className="py-16 bg-pastel-yellow-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-pastel-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📬</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for updates on workshops, volunteer
              opportunities, and ways to support our mission.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                required
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Map Placeholder
        - Purpose: Show location and provide directions link.
        - Replace with embedded map when available.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-pastel-cream rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl">🗺️</span>
              <p className="mt-4 text-gray-600">
                123 Education Way, Learning City, CA 90210
              </p>
              <a 
                href="https://maps.google.com/?q=123+Education+Way+Learning+City+CA+90210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-pastel-green-dark hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links
        - Purpose: Short answers to common questions; consider linking
          to a full FAQ page if content grows.
      */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqCard
              question="How can I enroll my child in a workshop?"
              answer="Check our Programs page for current workshops, then contact us to register. Space is limited!"
            />
            <FaqCard
              question="Is there a cost to participate?"
              answer="All Pi Kids workshops are completely free for participants. We believe tech education should be accessible to all."
            />
            <FaqCard
              question="Do you accept volunteers year-round?"
              answer="Yes! We accept volunteer applications throughout the year. Visit our Get Involved page to apply."
            />
            <FaqCard
              question="Can you come to our school/community center?"
              answer="We'd love to! Contact us about hosting a workshop at your location."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// ContactInfo: row with icon + title + content (linkable)
function ContactInfo({
  icon,
  title,
  content,
  href,
}: {
  icon: string;
  title: string;
  content: string;
  href?: string;
}) {
  const ContentWrapper = href ? "a" : "div";
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-pastel-green-light rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <ContentWrapper
          {...(href ? { href, className: "text-gray-600 hover:text-pastel-green-dark transition-colors" } : { className: "text-gray-600" })}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}

// SocialLink: external social profile with inline SVG icon
function SocialLink({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: string;
}) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    facebook: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-pastel-green-dark hover:shadow-md transition-all"
      aria-label={name}
    >
      {icons[icon]}
    </a>
  );
}

// FaqCard: small Q&A block for quick answers
function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600 text-sm">{answer}</p>
    </div>
  );
}
