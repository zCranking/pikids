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
          <div className="grid place-items-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Tech Literacy For {" "}
                <span className="text-pastel-green-dark">Every Kid</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                Empowering the next generation through hands-on coding workshops
                in under-resourced communities, powered by Raspberry Pi
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/get-involved#volunteer" variant="primary" size="lg">
                  Volunteer
                </Button>
                <Button href="/get-involved#host" variant="secondary" size="lg">
                  Host a Workshop
                </Button>
                <Button href="/get-involved#donate" variant="outline" size="lg">
                  Donate
                </Button>
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
            </div>
            <div className="bg-pastel-yellow-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-pastel-cream rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🎓</span>
              </div>
            </div>
            <div className="bg-pastel-red-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-pastel-cream rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🤝</span>
              </div>
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
              quote="It’s very rewarding to have Pi Kids come and teach our students Raspberry Pi! There is a lots of enthusiasm and it’s so rewarding to see how this team wants to give back! Thank you for introducing our students to Raspberry Pi! We had 14 children attended the first session and 12 children attended the second session. It was a success and children enjoyed it. Thank you again for your enthusiasm , patience, time and effort."
              author="Mamie Eng"
              role="Henry Waldinger Memorial Library Director"
            />
            <TestimonialCard
              quote="This class was really engaging. It was a great way for kids who weren’t familiar with the Raspberry Pi to get involved and learn more about it. And I think all the participants had a really great time"
              author="Ari Nussbaum"
              role="Hayward Public Library Librarian"
            />
            <TestimonialCard
              quote="The Raspberry Pi is a very interesting class. This class was very fun because we downloaded and played a lot of games on the Raspberry Pi like Minecraft. Not only did we get to play games, but we also coded on the Raspberry Pi. This is very interesting and cool because the games were fun and the coding was very interesting. This is an awesome class and the instructors are super friendly and resourceful. That’s the reason I joined this team to be awesome and learn to code while having fun!! You should attend the class because in the classes, you get to play games and code apps! Another time in the class, we downloaded Pac-Man on the Raspberry Pi! There were many more fun things we did. You should attend this class right now, this is the most fun computer programming class I have ever been to!"
              author="Rutvik Kollipara, 6th Grade"
              role="Biblioteca Library, San Jose"
            />
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
              Get Involved
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
