// Shared CTA Button component used for navigation/actions
// Path is resolved via Next.js/TS path aliases
import Button from "@/app/components/Button";

// AboutPage: renders the About content with semantic sections and
// Tailwind utility classes. Comments explain purpose and structure
// for future maintainers/content editors.
export default function AboutPage() {
  return (
    // Page wrapper ensures minimum full viewport height
    <div className="min-h-screen">
      {/* Hero Section
        - Purpose: Immediate intro and mission tagline.
        - Design: Soft gradient from brand pastel green to white.
        - Layout: Centered content with generous vertical spacing.
      */}
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

      {/* Mission Statement
        - Purpose: Clearly state organization mission in a highlighted block.
        - Accessibility: Strong heading contrast, relaxed line height.
        - Container: Narrower width for improved readability.
      */}
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

      {/* Our Story
        - Purpose: Provide origin and growth narrative for credibility.
        - Layout: Two-column grid (text + simple visual) from md breakpoint.
        - Visual: Emoji-based card avoids heavy media dependencies.
      */}
      <section className="py-16 bg-pastel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Founder's Story
              </h3>
              <p className="text-gray-600 mb-6">
                I was born in Queens, NY, but have lived in California since middle school. School districts in NY and CA that rank among the best are a privilege for me. As I was ready for school, my parents moved to Long Island, NY. Many parents move to better public school districts for their children. I asked my parents once. What motivates parents to move to better schools? Why are those schools better? Better school districts have better funding, my parents explain. With more funding, they have better teachers, guidance, and technology. School districts that were underfunded weren’t as good as those that were. Some areas lack funding. Lack of funding, etc. The second experience came through Racheal. She cleaned our Long Island house. When she was a little girl, she would help her mom clean the house, and then play with me. She was in middle school, I was in elementary school. Sometimes my mom brought her with her to pick me up from school. She would listen to me tell her stories about the auditorium, computers, library, holiday parties, and talk shows by big authors. She used to be amazed by my school stories. All of these weren’t at her school. Her school didn’t host any famous authors. I never believed her in elementary school. In my opinion, all schools should be the same. Mom was so happy when she called from New York and told her she was accepted! She gave me the example of Rachel, who had limited school resources, but made it to medical school despite it. Here I am again asking the same question! How about most of the country? Hard work pays off for some students, but not for others. Doesn’t every student deserve the same quality of public school education? It shouldn’t be based on where they were born! - Sayam De
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

      {/* Our Team
        - Purpose: Humanize the organization via founders and volunteers.
        - Structure: Founders (bios), Current Volunteers (roles), Past Volunteers (recognition).
        - Note: If the list grows, consider pagination or dedicated page.
      */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Team
          </h2>

          {/* Founders: key leaders with names, titles, and short bios */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Founders
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TeamCard
                name="Sayam De"
                title="Founder"
                bio="I am passionate about the intersection of technology and business. In the past few years, my Python data projects on Raspberry Pi have won awards at the Contra Costa County Science and Engineering Fair. In order to bridge the US’s educational equity gap, I leveraged these skills and accomplishments. My program, Pi Kids, spreads technology initiatives to the next generation. Moreover, I’m a believer. LF member, I believe collaboration makes a difference!"
              />
              <TeamCard
                name="Shlok Kulkarni"
                title="Co-Founder"
                bio="I am an entrepreneur, researcher, and biotechnology-enthusiast with extensive interest in gene sequencing and gene modification. Outside of school, I have done Taekwondo for around 9 years, and am currently a 2nd degree black belt. I am an amateur guitarist and enjoy playing in my free time. I also enjoy skateboarding."
              />
            </div>
          </div>

          {/* Current Volunteers: active contributors and their roles */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Current Volunteers
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <VolunteerCard name="Ayush Talapatra" title="President" />
              <VolunteerCard name="Rajveer Grover" title="Workshop Instructor" />
            </div>
          </div>

          {/* Past Volunteers: recognizes prior service with years */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Past Volunteers
            </h3>
            <div className="bg-pastel-green-light rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <PastVolunteer name="Shreyas Kommuri"/>
                <PastVolunteer name="Rahul Racharia"/>
                <PastVolunteer name="Manav Divakar"/>
                <PastVolunteer name="Apoorva Kulshreshta"/>
                <PastVolunteer name="Shreyan Biswas"/>
                <PastVolunteer name="Sri Paturi"/>
                <PastVolunteer name="Lalitha Kalle"/>
                <PastVolunteer name="Rutvik Kollipara"/>
                <PastVolunteer name="Jay Saluja"/>
                <PastVolunteer name="Ayush Chackroborty"/>
                <PastVolunteer name="Harika Chodavarapu"/>
                <PastVolunteer name="Michelle Lee"/>
                <PastVolunteer name="Emma Hongkham"/>
                <PastVolunteer name="Maitri Singhal"/>
                <PastVolunteer name="Shreyas Sharma"/>
                <PastVolunteer name="Jai Velukuru"/>
                <PastVolunteer name="Arshia Singh"/>
                <PastVolunteer name="Arnab Datta Chowdhury"/>
                <PastVolunteer name="Sanjay Darshan Ramkumar"/>
                <PastVolunteer name="Spoorthi Bedadam"/>
                <PastVolunteer name="Shreyas Potturu"/>
                <PastVolunteer name="Saketh Potturu"/>
                <PastVolunteer name="Hritvik Hooda"/>
                <PastVolunteer name="Brindha Kumar"/>
                <PastVolunteer name="Akshaj Chirathanagandla"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners
        - Purpose: List collaborating organizations; swap placeholders with logos later.
        - Layout: Responsive grid for equal visual weight.
      */}
      <section className="py-16 bg-pastel-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Previous Workshop Locations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Boys & Girls Club of Oakland - Anna Marie Whalen Branch"/>
            <PartnerLogo name="Seven Trees Library"/>
            <PartnerLogo name="Henry Waldinger Memorial Library - Valley Stream, NY"/>
            <PartnerLogo name="West Valley Library"/>
            <PartnerLogo name="Bascom Library"/>
            <PartnerLogo name="Educational Park Library"/>
            <PartnerLogo name="Joyce Ellington Library"/>
            <PartnerLogo name="Edenvale Branch Library"/>
            <PartnerLogo name="Oakland Public Library"/>
            <PartnerLogo name="Hayward Library"/>
            <PartnerLogo name="Biblioteca Latinoamerica Library"/>
          </div>
        </div>

      {/* CTA (Call To Action)
        - Purpose: Encourage visitors to get involved.
        - Routing: `Button` navigates to `/get-involved`.
      */}
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

// TeamCard: reusable profile card for founders/staff
// Props: `name` (string), `title` (string), `bio` (string)
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

// VolunteerCard: lightweight card for current volunteers
// Props: `name` (string), `title` (role string)
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

// PastVolunteer: acknowledges past volunteers and service years
// Props: `name` (string), `years` (string range)
function PastVolunteer({ name, years }: { name: string; years: string }) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="font-medium text-gray-800">{name}</p>
      <p className="text-sm text-gray-500">{years}</p>
    </div>
  );
}

// PartnerLogo: placeholder name-only logo tile; swap to image later
// Props: `name` (string)
function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center justify-center aspect-video hover:shadow-md transition-shadow">
      <p className="text-gray-600 font-medium text-center">{name}</p>
    </div>
  );
}

// StatCard: compact metric visualization (icon + number + label)
// Props: `number` (string), `label` (string), `icon` (string), `color` ("green" | "yellow" | "red")
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

// MediaCard: press/award item display (icon, title, source, date)
// Props: `title` (string), `source` (string), `date` (string)
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
