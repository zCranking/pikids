// Shared Button component for cross-page CTAs
import Button from "@/app/components/Button";

// Our Why page: explains the problem, our solution, actionable
// steps for visitors, and a closing CTA. Comments annotate
// each section and helper components.
export default function OurWhyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section
        - Purpose: Frame the narrative (problem & solution).
        - Design: Red→white gradient signals urgency.
      */}
      <section className="bg-gradient-to-br from-pastel-red-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Why
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the problem that drives our mission and the solution
            we&apos;re building together.
          </p>
        </div>
      </section>

      {/* The Problem
        - Purpose: Describe the digital divide and its effects.
        - Layout: Left narrative card, right stats grid.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            The Problem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="bg-pastel-red-light rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  The Digital Divide
                </h3>
                <p className="text-gray-600 mb-6">
                  Millions of children in under-resourced communities lack access
                  to technology education. This gap grows wider every year,
                  affecting their future opportunities in an increasingly
                  digital world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                number="17M"
                label="U.S. children lack home internet"
                icon="🏠"
                color="red"
              />
              <StatCard
                number="60%"
                label="Low-income schools lack CS classes"
                icon="🏫"
                color="yellow"
              />
              <StatCard
                number="3x"
                label="Gap in tech job readiness"
                icon="💼"
                color="red"
              />
              <StatCard
                number="$40K"
                label="Average salary gap later in life"
                icon="💰"
                color="yellow"
              />
            </div>
          </div>

          <div className="bg-pastel-cream rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              The Ripple Effect
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ImpactPoint
                title="Limited Career Options"
                description="Without tech skills, students miss out on the fastest-growing job market."
              />
              <ImpactPoint
                title="Widening Wealth Gap"
                description="Tech illiteracy perpetuates cycles of poverty and inequality."
              />
              <ImpactPoint
                title="Lost Innovation"
                description="Diverse perspectives are missing from the tech industry."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution
        - Purpose: Explain Pi Kids approach and differentiation.
        - Layout: Visual card + bullet points + approach tags.
      */}
      <section className="py-16 bg-pastel-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="aspect-video bg-pastel-cream rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl">🌟</span>
                    <p className="mt-4 text-gray-600">Hands-on learning in action</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                What Makes Pi Kids Different
              </h3>
              <ul className="space-y-4">
                <SolutionPoint
                  title="Accessibility First"
                  description="Free workshops in community spaces where kids already go."
                />
                <SolutionPoint
                  title="Hands-On Learning"
                  description="Real projects with Raspberry Pi, not just screen time."
                />
                <SolutionPoint
                  title="Creative Expression"
                  description="Kids build games, art, and tools they actually want to use."
                />
                <SolutionPoint
                  title="Mentorship"
                  description="High-school volunteers who can relate easily to the students."
                />
                <SolutionPoint
                  title="Take-Home Skills"
                  description="Every student leaves with projects they can continue at home."
                />
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Approach
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We build confidence, spark curiosity, and open doors to futures our students never imagined
              possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ApproachTag text="Project-Based" />
              <ApproachTag text="Hands-on Learning" />
              <ApproachTag text="Practical Skills" />
              <ApproachTag text="Low-Cost Materials" />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do
        - Purpose: Concrete actions for visitors (volunteer, donate, partner).
        - Component: `ActionCard` for uniform CTA blocks.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What You Can Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ActionCard
              icon="🙋"
              title="Volunteer"
              description="Share your skills and time to inspire the next generation of tech creators."
              buttonText="Become a Volunteer"
              buttonHref="/get-involved#volunteer"
              color="green"
            />
            <ActionCard
              icon="💝"
              title="Donate"
              description="Your donation provides equipment and program support for students."
              buttonText="Make a Donation"
              buttonHref="/get-involved#donate"
              color="yellow"
            />
            <ActionCard
              icon="🤝"
              title="Partner"
              description="Bring Pi Kids programs to your organization or community."
              buttonText="Partner With Us"
              buttonHref="/get-involved#partner"
              color="red"
            />
          </div>
        </div>
      </section>

      {/* CTA: final encouragement to get involved */}
      <section className="py-20 bg-gradient-to-r from-pastel-red to-pastel-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Every Child Deserves a Digital Future
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join us in making technology education accessible to all.
          </p>
          <Button href="/get-involved" variant="primary" size="lg">
            Get Involved Today
          </Button>
        </div>
      </section>
    </div>
  );
}

// StatCard: small stat tile with color-coded background
function StatCard({
  number,
  label,
  icon,
  color,
}: {
  number: string;
  label: string;
  icon: string;
  color: "green" | "yellow" | "red";
}) {
  const bgColors = {
    green: "bg-pastel-green-light",
    yellow: "bg-pastel-yellow-light",
    red: "bg-pastel-red-light",
  };

  return (
    <div className={`${bgColors[color]} rounded-xl p-6 text-center`}>
      <span className="text-3xl">{icon}</span>
      <p className="text-2xl font-bold text-gray-800 mt-2">{number}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

// ImpactPoint: highlights secondary consequences of the problem
function ImpactPoint({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto bg-pastel-red-light rounded-full flex items-center justify-center mb-3">
        <span className="text-xl">⚠️</span>
      </div>
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// SolutionPoint: checklist-style bullet explaining differentiators
function SolutionPoint({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="w-8 h-8 bg-pastel-green rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white">✓</span>
      </span>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
}

// ApproachTag: badge-style tag describing teaching approach
function ApproachTag({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 bg-pastel-green-light rounded-full text-gray-700 font-medium">
      {text}
    </span>
  );
}

// ActionCard: CTA block with icon, copy, and button
function ActionCard({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  color: "green" | "yellow" | "red";
}) {
  const bgColors = {
    green: "bg-pastel-green-light",
    yellow: "bg-pastel-yellow-light",
    red: "bg-pastel-red-light",
  };

  const iconBgColors = {
    green: "bg-pastel-green",
    yellow: "bg-pastel-yellow",
    red: "bg-pastel-red",
  };

  return (
    <div className={`${bgColors[color]} rounded-2xl p-8 text-center`}>
      <div
        className={`w-16 h-16 mx-auto ${iconBgColors[color]} rounded-full flex items-center justify-center mb-4`}
      >
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button href={buttonHref} variant="primary" size="md">
        {buttonText}
      </Button>
    </div>
  );
}
