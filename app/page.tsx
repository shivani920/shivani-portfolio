import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '../components/ui/button'
import Image from "next/image"
import React from 'react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Hero Section */}
      <header className="border-b">
        <div className="container px-4 py-8 md:py-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                SHIVANI PATWARI
              </h1>
              <p className="text-xl text-muted-foreground">Frontend Developer</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  shivanipatwari01@gmail.com
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Indore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 md:py-12">
        {/* Summary Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Summary</h2>
          <p className="text-muted-foreground">
            Highly motivated and professional Frontend Developer with 8 months of experience in developing responsive
            and user-friendly websites. Proficient in HTML, CSS, JavaScript, React.js, and Node.js. Experienced in working on
            live projects and collaborating with teams to create intuitive user interfaces. Strong problem-solving skills, with
            a commitment to continuous learning and professional growth.
          </p>
        </section>

        {/* Links Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Links</h2>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">School of Computer Science and IT, DAVV, Indore</h3>
              <p className="text-sm text-muted-foreground">Master of Computer Applications</p>
              <p className="text-sm text-muted-foreground">Graduated in 2020-2023</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Shri Satya Sai College for Women, Bhopal</h3>
              <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-muted-foreground">Graduated in 2018-2021</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "JavaScript",
              "React.js",
              "Basic Node.js",
              "C/C++",
              "Core Java",
              "Responsive Web Design",
              "Version Control (Git)",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Professional Experience</h2>
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <h3 className="font-semibold">Software Developer</h3>
                <p className="text-sm text-muted-foreground">Champcoder</p>
                <p className="text-sm text-muted-foreground">March 2023 - Present</p>
              </div>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Developed responsive websites and work on live projects, including an Enterprise Resource Planning (ERP) system</li>
                <li>Collaborated with teams to create intuitive user interfaces and ensure seamless user experiences</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <h3 className="font-semibold">Frontend Developer Intern</h3>
                <p className="text-sm text-muted-foreground">DJ Technology</p>
                <p className="text-sm text-muted-foreground">January 2023 - March 2023</p>
              </div>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Gained hands-on experience in frontend development using HTML, CSS, and JavaScript</li>
                <li>Developed responsive websites and contributed to live projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 font-semibold">Bridge Point Logistic</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Contributed to the development of a live project aimed at improving user experience and overall functionality
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">React.js</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">JavaScript</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">CSS</span>
              </div>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 font-semibold">Enterprise Resource Planning (ERP) System</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Played a key role in the development of an ERP system from scratch, focusing on frontend design and implementation
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">React.js</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Node.js</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">HTML/CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Additional Information</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Active member of NSS</li>
            <li>Participates actively in sports activities</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

