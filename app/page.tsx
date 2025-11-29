// Shared Button component for CTAs and navigation
import Button from "@/app/components/Button";

// Home page: high-level overview with hero, highlights,
// testimonials, updates, impact preview, and CTA. Comments
// describe each section's purpose and layout for maintainers.
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section
        - Purpose: Primary headline and quick mission framing.
        - Layout: Two-column grid with text and illustrative card.
        - Design: Brand gradient and responsive typography.
      */}
      <section className="relative bg-gradient-to-br from-pastel-green-light via-white to-pastel-yellow-light py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Tech Literacy for{" "}
                <span className="text-pastel-green-dark">Every Kid</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                Empowering the next generation through hands-on coding workshops
                in under-resourced communities, powered by Raspberry Pi TEST
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/get-involved#volunteer" variant="primary" size="lg">
                  Volunteer With Us
                </Button>
                <Button href="/get-involved#host" variant="secondary" size="lg">
                  Host a Workshop
                </Button>
                <Button href="/get-involved#donate" variant="outline" size="lg">
                  Donate Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-pastel-yellow rounded-2xl p-8 shadow-lg">
                <div className="aspect-video bg-pastel-cream rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto bg-pastel-green rounded-full flex items-center justify-center mb-4">
                      <span className="text-4xl">🖥️</span>
                    </div>
                    <p className="text-gray-600">Kids collaborating on Raspberry Pi projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Reel
        - Purpose: Visual snapshots of program activities.
        - Content: Three simple cards with emoji placeholders.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Impact in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Workshop Photo Cards */}
            <div className="bg-pastel-green-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-pastel-cream rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <p className="text-gray-600 text-sm">Coding workshop at Community Center</p>
            </div>
            <div className="bg-pastel-yellow-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-pastel-cream rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🎓</span>
              </div>
              <p className="text-gray-600 text-sm">Students presenting their projects</p>
            </div>
            <div className="bg-pastel-red-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-pastel-cream rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🤝</span>
              </div>
              <p className="text-gray-600 text-sm">Volunteer mentoring session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials
        - Purpose: Social proof from students, parents, volunteers.
        - Component: `TestimonialCard` for consistent formatting.
      */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What People Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I never thought I could code, but now I've made my own game!"
              author="Jordan, Age 12"
              role="Student"
            />
            <TestimonialCard
              quote="Pi Kids gave my daughter confidence she never had before."
              author="Maria S."
              role="Parent"
            />
            <TestimonialCard
              quote="Teaching here has been the most rewarding experience of my life."
              author="Alex T."
              role="Volunteer"
            />
          </div>
        </div>
      </section>

      {/* Important Updates
        - Purpose: Announcements (e.g., recruiting volunteers).
        - Visual: Accent border and icon to draw attention.
      */}
      <section className="py-16 bg-pastel-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pastel-red">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pastel-red rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📢</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Seeking New Volunteers for Winter Term
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our team and help us bring tech education to more kids this winter. 
                  No coding experience required – just a passion for helping children learn!
                </p>
                <Button href="/get-involved#volunteer" variant="primary" size="sm">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Preview
        - Purpose: Teaser metrics; links to full details on About.
        - Component: `StatCard` (local) standardizes presentation.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="500+" label="Students Taught" icon="👨‍🎓" />
            <StatCard number="1,200+" label="Hours Volunteered" icon="⏰" />
            <StatCard number="12" label="Cities Served" icon="🏙️" />
            <StatCard number="85%" label="Low-Income Students" icon="❤️" />
          </div>
          <div className="text-center mt-12">
            <Button href="/about" variant="outline">
              Learn More About Our Impact
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section
        - Purpose: Drive users to get involved or contact.
        - Layout: Dual CTA buttons for primary pathways.
      */}
      <section className="py-20 bg-gradient-to-r from-pastel-green to-pastel-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Every child deserves access to technology education. Join us in making it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-involved" variant="primary" size="lg">
              Get Involved Today
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// TestimonialCard: quote + attribution display
function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <span className="text-4xl text-pastel-green">&ldquo;</span>
      </div>
      <p className="text-gray-600 mb-4 italic">{quote}</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

// StatCard (Home preview): compact metric with icon
function StatCard({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-pastel-green-light rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-gray-800">{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
