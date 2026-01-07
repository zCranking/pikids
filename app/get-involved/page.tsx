// Shared Button component for CTAs throughout this page
import Button from "@/app/components/Button";

// Get Involved page: central hub for volunteering, donating,
// hosting, and partnering. Sections include forms and info
// cards. Comments clarify intent and future integration points.
export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section
        - Purpose: Introduce engagement pathways succinctly.
        - Design: Brand gradient and centered content.
      */}
      <section className="bg-gradient-to-br from-pastel-green-light to-pastel-yellow-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in bringing technology education to every child. There are
            many ways to contribute to our mission.
          </p>
        </div>
      </section>

      {/* Volunteer Section
        - Purpose: Explain volunteer roles and collect applications.
        - Layout: Roles list on left, application form on right.
        - Note: Form is a placeholder; wire to API or service later.
      */}
      <section id="volunteer" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-pastel-green-light px-4 py-2 rounded-full mb-4">
                <span>🙋</span>
                <span className="font-medium text-gray-800">Volunteer</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Share Your Skills
              </h2>
              <p className="text-gray-600 mb-6">
                We welcome volunteers of all backgrounds. Whether you&apos;re a tech expert or someone who loves
                working with kids, there&apos;s a role for you.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Skills and Traits We Look For
              </h3>
              <div className="space-y-3 mb-8">
                <SkillItem text="Technical expertise in Raspberry Pi, Python, or embedded systems" />
                <SkillItem text="Ability to communicate complex concepts in child-friendly language" />
                <SkillItem text="Patience and enthusiasm for working with young learners" />
                <SkillItem text="Experience in education, mentoring, or youth programs" />
                <SkillItem text="Problem-solving skills and hands-on technical troubleshooting" />
                <SkillItem text="Reliability and commitment to consistent participation" />
                <SkillItem text="Collaborative mindset and willingness to work as part of a team" />
              </div>
              <p className="text-sm text-gray-600">
                Don&apos;t have all of these skills? That&apos;s okay! If you&apos;re passionate about tech education, we&apos;d love to hear from you. Fill out the application and tell us about your background.
              </p>
            </div>

            {/* Volunteer Application Form
              - Fields: name, email, phone, age group, preferred role,
                experience.
              - Future: validation, submit handler, success feedback.
            */}
            <div className="bg-pastel-green-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Apply to Volunteer
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="vol-name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="vol-email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="vol-phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="vol-age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age Group *
                  </label>
                  <select
                    id="vol-age"
                    name="age"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="teen">Teen (14-17)</option>
                    <option value="young-adult">Young Adult (18-25)</option>
                    <option value="adult">Adult (26+)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vol-experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="vol-experience"
                    name="experience"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                    placeholder="Share your background, experience, and why you want to volunteer..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section
        - Purpose: Show impact tiers and collect donations.
        - Note: Payment flow pending; buttons are non-functional.
      */}
      <section id="donate" className="py-16 bg-pastel-yellow-light scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pastel-yellow px-4 py-2 rounded-full mb-4">
              <span>💝</span>
              <span className="font-medium text-gray-800">Donate</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Support Our Mission
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your donation directly funds equipment and programs
              that bring tech education to underserved communities.
            </p>
          </div>

          {/* Impact Chart: donation tiers and tangible outcomes */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <ImpactCard
              amount="$35"
              impact="Purchases a Raspberry Pi computer for student use"
              icon="🖥️"
            />
            <ImpactCard
              amount="$50"
              impact="Provides additional hardware (sensors, HATs) used in our sessions"
              icon="🔧"
            />
            <ImpactCard
              amount="$85"
              impact="Combo: Raspberry Pi plus additional hardware for hands-on learning"
              icon="✨"
            />
            <ImpactCard
              amount="$250"
              impact="Sponsors a complete workshop for 10 students"
              icon="🎓"
            />
          </div>

          {/* Donation Options
            - Purpose: Quick-select amounts + custom input.
            - Future: Integrate payment processor and validation.
          */}
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Make a Donation
            </h3>
            <p className="text-gray-600 mb-6">
              Choose a donation amount or enter a custom amount.
            </p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="py-3 rounded-lg bg-pastel-green-light hover:bg-pastel-green transition-colors font-semibold text-gray-800">
                $35
              </button>
              <button className="py-3 rounded-lg bg-pastel-green-light hover:bg-pastel-green transition-colors font-semibold text-gray-800">
                $50
              </button>
              <button className="py-3 rounded-lg bg-pastel-green-light hover:bg-pastel-green transition-colors font-semibold text-gray-800">
                $85
              </button>
              <button className="py-3 rounded-lg bg-pastel-green-light hover:bg-pastel-green transition-colors font-semibold text-gray-800">
                $250
              </button>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Custom amount"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent text-center"
              />
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Donate Now
            </Button>
          </div>
        </div>
      </section>


      {/* Partner With Us Section
        - Purpose: Describe partnership types and collect inquiries.
        - Layout: Partner type cards + form.
      */}
      <section id="partner" className="py-16 bg-pastel-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pastel-sage px-4 py-2 rounded-full mb-4">
              <span>🤝</span>
              <span className="font-medium text-gray-800">Partner With Us</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Organizational Partnerships
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schools, libraries, community organizations, and businesses – we&apos;d
              love to collaborate with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <PartnerTypeCard
              icon="🏫"
              title="Schools"
              description="Integrate Pi Kids into your after-school or enrichment programs."
            />
            <PartnerTypeCard
              icon="📚"
              title="Libraries"
              description="Offer free tech workshops as part of your community programming."
            />
            <PartnerTypeCard
              icon="🏢"
              title="Businesses"
              description="Sponsor programs, provide volunteers, or host events."
            />
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Partnership Inquiry
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="org-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="org-name"
                    name="org_name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="org-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Type *
                  </label>
                  <select
                    id="org-type"
                    name="org_type"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="school">School</option>
                    <option value="library">Library</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact_name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="partnership-message" className="block text-sm font-medium text-gray-700 mb-1">
                  How would you like to partner with us?
                </label>
                <textarea
                  id="partnership-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  placeholder="Tell us about your organization and partnership ideas..."
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pastel-green to-pastel-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We&apos;d love to hear from you. Reach out anytime!
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

function RoleCard({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="bg-pastel-cream rounded-lg p-4">n
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <span className="text-xs bg-pastel-green-light px-2 py-1 rounded-full text-gray-600">
          {time}
        </span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function ImpactCard({
  amount,
  impact,
  icon,
}: {
  amount: string;
  impact: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
      <span className="text-4xl">{icon}</span>
      <p className="text-2xl font-bold text-gray-800 mt-2">{amount}</p>
      <p className="text-sm text-gray-600 mt-2">{impact}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-6 h-6 bg-pastel-green rounded-full flex items-center justify-center">
        <span className="text-white text-sm">✓</span>
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function SkillItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 bg-pastel-cream rounded-lg p-4">
      <span className="text-pastel-green-dark font-bold mt-1">•</span>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function PartnerTypeCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 mx-auto bg-pastel-sage rounded-full flex items-center justify-center mb-4">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
