import Button from "@/app/components/Button";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Volunteer Section */}
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
                We welcome volunteers of all backgrounds – teens and adults
                alike. Whether you&apos;re a tech expert or someone who loves
                working with kids, there&apos;s a role for you.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Volunteer Roles
              </h3>
              <div className="space-y-4 mb-8">
                <RoleCard
                  title="Workshop Instructor"
                  description="Lead coding sessions and guide students through projects. Training provided."
                  time="4-6 hours/week"
                />
                <RoleCard
                  title="Teaching Assistant"
                  description="Support instructors by helping individual students who need extra attention."
                  time="2-4 hours/week"
                />
                <RoleCard
                  title="Curriculum Developer"
                  description="Help create and improve our lesson plans and project guides."
                  time="Flexible"
                />
                <RoleCard
                  title="Tech Support"
                  description="Set up equipment, troubleshoot issues, and maintain our Raspberry Pis."
                  time="2-4 hours/week"
                />
                <RoleCard
                  title="Administrative Support"
                  description="Help with registration, communications, and event coordination."
                  time="Flexible"
                />
              </div>
            </div>

            {/* Volunteer Application Form */}
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
                  <label htmlFor="vol-role" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Role *
                  </label>
                  <select
                    id="vol-role"
                    name="role"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pastel-green focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="instructor">Workshop Instructor</option>
                    <option value="ta">Teaching Assistant</option>
                    <option value="curriculum">Curriculum Developer</option>
                    <option value="tech">Tech Support</option>
                    <option value="admin">Administrative Support</option>
                    <option value="any">Open to Any Role</option>
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

      {/* Donate Section */}
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
              Your donation directly funds equipment, materials, and programs
              that bring tech education to underserved communities.
            </p>
          </div>

          {/* Impact Chart */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <ImpactCard
              amount="$25"
              impact="Provides a student kit with basic electronics components"
              icon="🔌"
            />
            <ImpactCard
              amount="$50"
              impact="Covers one student's materials for an entire workshop session"
              icon="📦"
            />
            <ImpactCard
              amount="$100"
              impact="Purchases a Raspberry Pi computer for student use"
              icon="🖥️"
            />
            <ImpactCard
              amount="$500"
              impact="Sponsors a complete workshop for 10 students"
              icon="🎓"
            />
          </div>

          {/* Donation Options */}
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Make a Donation
            </h3>
            <p className="text-gray-600 mb-6">
              Choose a donation amount or enter a custom amount.
            </p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="py-3 rounded-lg bg-pastel-green-light hover:bg-pastel-green transition-colors font-semibold text-gray-800">
                $25
              </button>
              <button className="py-3 rounded-lg bg-pastel-green-light hover:bg-pastel-green transition-colors font-semibold text-gray-800">
                $50
              </button>
              <button className="py-3 rounded-lg bg-pastel-green-light hover:bg-pastel-green transition-colors font-semibold text-gray-800">
                $100
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
              Donate Now (Coming Soon)
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Secure payment processing coming soon. Contact us directly to
              donate.
            </p>
          </div>
        </div>
      </section>

      {/* Host a Workshop Section */}
      <section id="host" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-pastel-red-light px-4 py-2 rounded-full mb-4">
                <span>🏠</span>
                <span className="font-medium text-gray-800">Host a Workshop</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Bring Pi Kids to Your Space
              </h2>
              <p className="text-gray-600 mb-6">
                Do you have a community center, library, school, or other space
                where kids gather? Partner with us to host a Pi Kids workshop!
              </p>
              <ul className="space-y-3 mb-8">
                <CheckItem text="We provide all equipment and curriculum" />
                <CheckItem text="Trained volunteers lead the sessions" />
                <CheckItem text="Flexible scheduling to fit your needs" />
                <CheckItem text="Free for participants" />
              </ul>
              <Button href="/contact" variant="primary">
                Contact Us to Host
              </Button>
            </div>
            <div className="bg-pastel-red-light rounded-2xl p-8">
              <div className="aspect-video bg-pastel-cream rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🏢</span>
                  <p className="mt-4 text-gray-600">Your space + our program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
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
            <div className="mt-6 text-center">
              <Button href="#" variant="outline" size="sm">
                Download Partnership Info Packet (PDF)
              </Button>
            </div>
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
    <div className="bg-pastel-cream rounded-lg p-4">
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
