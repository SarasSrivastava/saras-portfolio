const skills = [
  "Manual Testing",
  "SQL",
  "Core Java",
  "API Testing",
  "Selenium",
  "SDLC",
  "STLC",
  "Agile / Scrum",
  "Test Case Design",
  "Bug Reporting",
];

const projects = [
  {
    title: "LOOP — AI Customer-Feedback Intelligence Platform",
    description:
      "A web platform for collecting, analyzing, and understanding customer feedback with an AI-powered workflow.",
    tech: "Next.js • React • PostgreSQL • Prisma • REST API",
  },
  {
    title: "Magicbricks Website Testing",
    description:
      "Software testing practice project covering test scenarios, test cases, functional testing, regression testing, and defect identification.",
    tech: "Manual Testing • Test Cases • Bug Reporting",
  },
  {
    title: "Android Accident Detection & Alert System",
    description:
      "An academic project focused on detecting accidents and generating alerts to improve emergency response.",
    tech: "Android • Java • Application Testing",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold">
            Saras<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-20"
      >
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Software Testing Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-cyan-400">Saras Srivastava</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            B.Tech CSE graduate and Software Testing professional focused on
            building reliable software through effective testing, problem
            solving, and continuous learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            <span>Manual Testing</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>Core Java</span>
            <span>•</span>
            <span>API Testing</span>
            <span>•</span>
            <span>Selenium</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Turning requirements into quality software
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="leading-8 text-slate-300">
              I am a B.Tech Computer Science graduate currently developing my
              career in Software Testing and Quality Assurance. I have
              practical knowledge of manual testing, SQL, Core Java, API
              testing, and Selenium automation.
            </p>

            <p className="leading-8 text-slate-300">
              My testing knowledge includes SDLC, STLC, Agile methodology,
              test case design, functional testing, regression testing,
              smoke testing, sanity testing, defect life cycle, and basic
              database testing.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          My Testing Toolkit
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Featured Work
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                  QA
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <p className="mt-5 text-xs font-medium leading-6 text-cyan-400">
                  {project.tech}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Training & Experience
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">
              Software Testing Training — QSpiders
            </h3>
            <p className="mt-2 text-slate-400">
              Manual Testing • SQL • Core Java • API Testing • Selenium
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">
              Web Development Intern — Zidio
            </h3>
            <p className="mt-2 text-slate-400">
              Developed and delivered the LOOP AI Customer-Feedback
              Intelligence Platform as an internship project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s connect
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            I&apos;m currently looking for an entry-level Software Testing /
            QA opportunity where I can contribute and continue growing my
            technical skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/SarasSrivastava/saras123"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Saras Srivastava. Built with Next.js.
      </footer>
    </main>
  );
}