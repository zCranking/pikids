// Shared Button component for CTAs across sections
import Button from "@/app/components/Button";

// Programs page: showcases current/upcoming workshops, past events,
// student projects, curriculum preview, and a closing CTA.
// Comments annotate sections and reusable cards.
export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section
        - Purpose: Introduce programs focus and value proposition.
        - Design: Yellow→white gradient and centered text.
      */}
      <section className="bg-gradient-to-br from-pastel-yellow-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Programs
          </h1>
        </div>
      </section>

      {/* Current & Upcoming Workshops
        - Purpose: Promote active offerings with details and status.
        - Component: `WorkshopCard` standardizes workshop presentation.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Current & Upcoming Workshops
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WorkshopCard
              name="Raspberry Pi Coding Camp"
              ageGroup="Ages 8-13"
              dates="December 29, 2025 - January 2, 2026"
              location="Seven Trees Branch Library - 3590 Cas Dr, San Jose, CA 95111"
              description="Learn the fundementals of Raspberry Pi (Mini computers!). In this fun and interactive 4-day class, participants will learn the foundations of coding, build their own mini-games, and develop real problem-solving skills."
              skills={["Python", "Logic", "Games", "Problem-solving"]}
              status="full"
            />
          </div>
        </div>
      </section>

      {/* Past Events
        - Purpose: Showcase past activities via gallery and projects.
        - Components: `GalleryImage`, `ProjectCard`.
      */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Past Events
          </h2>
          
          {/* Photo Gallery: emoji placeholders; replace with images later */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Photo Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GalleryImage caption="Seven Trees Library 2025" />
              <GalleryImage caption="Boys & Girls Club of Oakland 2025" />
              <GalleryImage caption="Boys & Girls Club of Oakland 2024" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// WorkshopCard: full workshop details with status and skills
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

// GalleryImage: simple captioned tile; swap with real photos later
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

// ProjectCard: student project highlight with title and description
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

// CurriculumPoint: checklist bullet for curriculum highlights
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
