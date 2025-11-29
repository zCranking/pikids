import Button from "@/app/components/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pastel-green-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Pi Kids
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a more equitable future by bringing technology education to
            every child, regardless of their background.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-pastel-yellow-light rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To bridge the digital divide by providing free, hands-on technology
              education to children in under-resourced communities through
              engaging Raspberry Pi workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                How It Started
              </h3>
              <p className="text-gray-600 mb-6">
                Pi Kids began in 2019 when a group of college students noticed
                that children in their local community had little access to
                technology education. With just five Raspberry Pi computers and a
                borrowed classroom, we ran our first workshop.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Inspiration & Evolution
              </h3>
              <p className="text-gray-600">
                Inspired by the belief that every child deserves access to
                technology, we&apos;ve grown from that single workshop to serving
                hundreds of students across multiple cities. Our curriculum has
                evolved to include coding, robotics, game development, and more.
              </p>
            </div>
            <div className="bg-pastel-green-light rounded-2xl p-8">
              <div className="aspect-video bg-pastel-cream rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🚀</span>
                  <p className="mt-4 text-gray-600">Our journey from 5 kids to 500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Team
          </h2>

          {/* Founders */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Founders
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TeamCard
                name="Sarah Chen"
                title="Co-Founder & Executive Director"
                bio="Former software engineer passionate about education equity. Sarah leads Pi Kids&apos; strategic vision and partnerships."
              />
              <TeamCard
                name="Marcus Johnson"
                title="Co-Founder & Program Director"
                bio="Educator with 10 years of experience in STEM education. Marcus oversees curriculum development and workshop operations."
              />
            </div>
          </div>

          {/* Current Volunteers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Current Volunteers
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <VolunteerCard name="Alex Rivera" title="Lead Instructor" />
              <VolunteerCard name="Jamie Wong" title="Curriculum Developer" />
              <VolunteerCard name="Taylor Smith" title="Workshop Coordinator" />
              <VolunteerCard name="Jordan Lee" title="Tech Support" />
              <VolunteerCard name="Casey Brown" title="Instructor" />
              <VolunteerCard name="Morgan Davis" title="Instructor" />
              <VolunteerCard name="Riley Garcia" title="Admin Support" />
              <VolunteerCard name="Quinn Martinez" title="Outreach Coordinator" />
            </div>
          </div>

          {/* Past Volunteers */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Past Volunteers
            </h3>
            <div className="bg-pastel-green-light rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <PastVolunteer name="Emily Zhang" years="2019-2021" />
                <PastVolunteer name="David Kim" years="2019-2020" />
                <PastVolunteer name="Jessica Patel" years="2020-2022" />
                <PastVolunteer name="Michael Thompson" years="2019-2021" />
                <PastVolunteer name="Amanda Collins" years="2020-2021" />
                <PastVolunteer name="Ryan O&apos;Brien" years="2021-2022" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-pastel-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Boys & Girls Club" />
            <PartnerLogo name="City Public Library" />
            <PartnerLogo name="Tech for Good Foundation" />
            <PartnerLogo name="Local Schools District" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="500+" label="Students Taught" icon="👨‍🎓" color="green" />
            <StatCard number="1,200+" label="Hours Volunteered" icon="⏰" color="yellow" />
            <StatCard number="12" label="Cities Served" icon="🏙️" color="red" />
            <StatCard number="85%" label="Low-Income Students" icon="❤️" color="green" />
          </div>
        </div>
      </section>

      {/* Media & Recognition */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Media & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MediaCard
              title="Pi Kids Featured in Local News"
              source="City Tribune"
              date="March 2024"
            />
            <MediaCard
              title="Innovative Tech Education Award"
              source="Tech Education Foundation"
              date="December 2023"
            />
            <MediaCard
              title="Community Impact Spotlight"
              source="NPR Local"
              date="August 2023"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pastel-green to-pastel-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Help us bring technology education to more children.
          </p>
          <Button href="/get-involved" variant="primary" size="lg">
            Get Involved
          </Button>
        </div>
      </section>
    </div>
  );
}

function TeamCard({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string;
}) {
  return (
    <div className="bg-pastel-green-light rounded-xl p-6 text-center">
      <div className="w-24 h-24 mx-auto bg-pastel-cream rounded-full mb-4 flex items-center justify-center">
        <span className="text-4xl">👤</span>
      </div>
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-pastel-green-dark font-medium mb-3">{title}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
}

function VolunteerCard({ name, title }: { name: string; title: string }) {
  return (
    <div className="bg-pastel-cream rounded-xl p-4 text-center hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mx-auto bg-pastel-green-light rounded-full mb-3 flex items-center justify-center">
        <span className="text-2xl">👤</span>
      </div>
      <h4 className="font-semibold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}

function PastVolunteer({ name, years }: { name: string; years: string }) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="font-medium text-gray-800">{name}</p>
      <p className="text-sm text-gray-500">{years}</p>
    </div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center justify-center aspect-video hover:shadow-md transition-shadow">
      <p className="text-gray-600 font-medium text-center">{name}</p>
    </div>
  );
}

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
    <div className="text-center">
      <div
        className={`w-16 h-16 mx-auto ${bgColors[color]} rounded-full flex items-center justify-center mb-4`}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-gray-800">{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

function MediaCard({
  title,
  source,
  date,
}: {
  title: string;
  source: string;
  date: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-pastel-yellow-light rounded-full flex items-center justify-center mb-4">
        <span className="text-xl">📰</span>
      </div>
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{source}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
}
