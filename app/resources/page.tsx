// Shared Button component for CTAs and links
import Button from "@/app/components/Button";

// Resources page: aggregates tools, videos, parent guides,
// volunteer resources, and a contact CTA. Comments document
// each section and reusable card components.
export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section
        - Purpose: Introduce available resources and audience.
        - Design: Yellow→white gradient and centered text.
      */}
      <section className="bg-gradient-to-br from-pastel-yellow-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free tools, guides, and learning materials to support tech education
            at home and beyond.
          </p>
        </div>
      </section>

      {/* Free Learning Tools
        - Purpose: Curated list of external learning platforms.
        - Components: `FilterTag` (UI only), `ToolCard` (external links).
      */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Free Learning Tools
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Curated resources for learners of all ages and skill levels.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToolCard
              name="Scratch"
              description="Block-based coding for beginners. Create games, animations, and interactive stories."
              url="https://scratch.mit.edu"
              level="Beginners"
              icon="🐱"
            />
            <ToolCard
              name="Code.org"
              description="Free coding curriculum with Hour of Code activities and full courses."
              url="https://code.org"
              level="All Levels"
              icon="💻"
            />
            <ToolCard
              name="Raspberry Pi Projects"
              description="Official project tutorials for Raspberry Pi, from beginner to advanced."
              url="https://projects.raspberrypi.org"
              level="Intermediate"
              icon="🥧"
            />
            <ToolCard
              name="Khan Academy Computing"
              description="Free courses on programming, algorithms, and computer science fundamentals."
              url="https://www.khanacademy.org/computing"
              level="All Levels"
              icon="📚"
            />
            <ToolCard
              name="Codecademy"
              description="Interactive coding lessons in Python, JavaScript, HTML/CSS, and more."
              url="https://www.codecademy.com"
              level="Intermediate"
              icon="🎯"
            />
            <ToolCard
              name="Tynker"
              description="Game-based learning platform with coding courses for kids."
              url="https://www.tynker.com"
              level="Beginners"
              icon="🎮"
            />
          </div>
        </div>
      </section>

      {/* For Parents
        - Purpose: Guidance and FAQs tailored to parents.
        - Components: `ResourceCard` and `FaqItem` entries.
      */}
      <section className="py-16 bg-pastel-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            FAQs for Parents
          </h2>

          <div className="mt-12 bg-white rounded-2xl p-8">
            <div className="space-y-4">
              <FaqItem
                question="Do I need to know coding to help my child?"
                answer="Not at all! Our workshops are designed so children can learn independently with instructor guidance. At home, simply showing interest and asking about their projects is enough."
              />
              <FaqItem
                question="What equipment does my child need at home?"
                answer="While we provide all equipment during workshops, having a computer or tablet at home can help. If your child develops an interest for Raspberry Pis, you could look into purchasing one."
              />
              <FaqItem
                question="Does my child need prior experience?"
                answer="We welcome all skill levels! Our curriculum is adaptive to those learning it, so beginners can join without any prior coding experience."
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Volunteers
        - Purpose: Members-only resource portal (placeholder).
        - Note: Wire up authentication and portal link later.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pastel-yellow-light rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="grid grid-cols-1 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4">
                    <span>🔐</span>
                    <span className="font-medium text-gray-800">Members Only</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Volunteer Resources
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Access training documents, curriculum materials, and the
                    volunteer portal. Login required.
                  </p>
                  <ul className="space-y-2 mb-6 flex flex-col items-center">
                    <li className="flex items-center gap-2 text-gray-600">
                      <span>📋</span> Onboarding checklist
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span>📚</span> Full curriculum library
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <span>📅</span> Schedule & sign-up
                    </li>
                  </ul>
                  <Button href="#" variant="primary" className="mx-auto">
                    Volunteer Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: invite users to reach out with questions */}
      <section className="py-20 bg-gradient-to-r from-pastel-yellow to-pastel-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Need help finding the right resources? We&apos;re here to help!
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

// FilterTag: pill-style tag for UI filtering (non-functional)
function FilterTag({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-4 py-2 rounded-full font-medium transition-colors ${
        active
          ? "bg-pastel-green text-gray-800"
          : "bg-white text-gray-600 hover:bg-pastel-green-light"
      }`}
    >
      {label}
    </button>
  );
}

// ToolCard: external resource link with icon and level badge
function ToolCard({
  name,
  description,
  url,
  level,
  icon,
}: {
  name: string;
  description: string;
  url: string;
  level: string;
  icon: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-pastel-yellow-light rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <span className="text-xs bg-pastel-green-light px-2 py-1 rounded-full text-gray-600">
              {level}
            </span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}

// VideoCard: tutorial tile with level + duration
function VideoCard({
  title,
  duration,
  level,
}: {
  title: string;
  duration: string;
  level: string;
}) {
  const levelColors: Record<string, string> = {
    Beginner: "bg-pastel-green-light",
    Intermediate: "bg-pastel-yellow-light",
    Advanced: "bg-pastel-red-light",
  };

  return (
    <div className="bg-pastel-cream rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
          <span className="text-3xl ml-1">▶</span>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs px-2 py-1 rounded-full ${levelColors[level]} text-gray-700`}>
            {level}
          </span>
        </div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

// ResourceCard: informational card with optional action button
function ResourceCard({
  icon,
  title,
  description,
  buttonText,
}: {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button href="#" variant="outline" size="sm">
        {buttonText}
      </Button>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h4 className="font-semibold text-gray-800 mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
