import Button from "@/app/components/Button";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pastel-yellow-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on technology workshops designed to inspire creativity and
            build real-world skills in young learners.
          </p>
        </div>
      </section>

      {/* Current & Upcoming Workshops */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Current & Upcoming Workshops
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WorkshopCard
              name="Intro to Coding with Scratch"
              ageGroup="Ages 8-10"
              dates="January 15 - March 15, 2025"
              location="Community Center, Main St"
              description="Learn the basics of programming through fun, interactive block-based coding. Create animations, games, and stories!"
              skills={["Block coding", "Logic", "Creativity", "Problem-solving"]}
              status="open"
            />
            <WorkshopCard
              name="Build Your First Robot"
              ageGroup="Ages 11-14"
              dates="February 1 - April 1, 2025"
              location="Public Library, Downtown"
              description="Construct and program a simple robot using Raspberry Pi and sensors. Learn about electronics, motors, and automation."
              skills={["Robotics", "Python basics", "Electronics", "Engineering"]}
              status="open"
            />
            <WorkshopCard
              name="Game Development Basics"
              ageGroup="Ages 12-16"
              dates="March 1 - May 1, 2025"
              location="Boys & Girls Club"
              description="Design and build your own video games using Python and Pygame. Learn game logic, graphics, and sound."
              skills={["Python", "Game design", "Graphics", "Sound"]}
              status="coming-soon"
            />
            <WorkshopCard
              name="Web Design for Kids"
              ageGroup="Ages 10-14"
              dates="April 1 - June 1, 2025"
              location="Tech Hub, Oak Street"
              description="Create your own websites using HTML, CSS, and basic JavaScript. Build a portfolio to showcase your work!"
              skills={["HTML", "CSS", "JavaScript basics", "Design"]}
              status="coming-soon"
            />
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Past Events
          </h2>
          
          {/* Photo Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Photo Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GalleryImage caption="Fall 2024 Coding Camp" />
              <GalleryImage caption="Robot Competition" />
              <GalleryImage caption="Summer Workshop" />
              <GalleryImage caption="Graduation Ceremony" />
              <GalleryImage caption="Parent Night" />
              <GalleryImage caption="Guest Speaker Event" />
              <GalleryImage caption="Project Showcase" />
              <GalleryImage caption="Team Building Day" />
            </div>
          </div>

          {/* Student Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Student Project Showcases
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                title="Weather Station"
                student="Alex, Age 13"
                description="A Raspberry Pi-powered weather station that tracks temperature, humidity, and displays data on an LCD screen."
              />
              <ProjectCard
                title="Traffic Light Simulator"
                student="Jamie, Age 11"
                description="An LED-based traffic light that changes colors on a timer, teaching the basics of circuit design."
              />
              <ProjectCard
                title="Space Invaders Clone"
                student="Jordan, Age 14"
                description="A classic arcade game recreated using Python and Pygame, complete with sound effects and high scores."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pastel-green-light rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Curriculum Preview
                </h2>
                <p className="text-gray-600 mb-6">
                  Our curriculum is designed by experienced educators and
                  technology professionals to be engaging, accessible, and
                  effective. Download our overview to learn more about what we
                  teach.
                </p>
                <ul className="space-y-3 mb-8">
                  <CurriculumPoint text="Project-based learning approach" />
                  <CurriculumPoint text="Age-appropriate content for all levels" />
                  <CurriculumPoint text="Focus on creativity and problem-solving" />
                  <CurriculumPoint text="Real-world applications and skills" />
                </ul>
                <Button href="#" variant="primary">
                  Download Curriculum Overview (PDF)
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="aspect-[3/4] bg-pastel-cream rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl">📚</span>
                    <p className="mt-4 text-gray-600">Curriculum Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pastel-yellow to-pastel-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join hundreds of students learning valuable tech skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Register for a Workshop
            </Button>
            <Button href="/get-involved" variant="outline" size="lg">
              Volunteer or Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkshopCard({
  name,
  ageGroup,
  dates,
  location,
  description,
  skills,
  status,
}: {
  name: string;
  ageGroup: string;
  dates: string;
  location: string;
  description: string;
  skills: string[];
  status: "open" | "coming-soon" | "full";
}) {
  const statusStyles = {
    open: "bg-pastel-green text-gray-800",
    "coming-soon": "bg-pastel-yellow text-gray-800",
    full: "bg-pastel-red text-gray-800",
  };

  const statusLabels = {
    open: "Registration Open",
    "coming-soon": "Coming Soon",
    full: "Full",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-medium text-pastel-green-dark">{ageGroup}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <span>📅</span> {dates}
          </p>
          <p className="flex items-center gap-2">
            <span>📍</span> {location}
          </p>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Skills learned:</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-pastel-green-light rounded-full text-xs text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {status === "open" && (
          <Button href="/contact" variant="primary" size="sm" className="w-full">
            Register Now
          </Button>
        )}
      </div>
    </div>
  );
}

function GalleryImage({ caption }: { caption: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square bg-pastel-yellow-light flex items-center justify-center">
        <span className="text-4xl">📸</span>
      </div>
      <p className="p-2 text-sm text-gray-600 text-center">{caption}</p>
    </div>
  );
}

function ProjectCard({
  title,
  student,
  description,
}: {
  title: string;
  student: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-pastel-green-light rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">🏆</span>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-pastel-green-dark mb-3">{student}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function CurriculumPoint({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-6 h-6 bg-pastel-green rounded-full flex items-center justify-center">
        <span className="text-white text-sm">✓</span>
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}
