import React, { useEffect, useState } from 'react'

export function App() {
  const [theme, setTheme] = useState('night')

  useEffect(() => {
    document.body.classList.toggle('theme-day', theme === 'day')
    document.body.classList.toggle('theme-night', theme === 'night')
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'night' ? 'day' : 'night'))
  }


  return (
    <div className="page">
      <header className="nav">
        <div className="nav-brand">John Doe</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          className="btn ghost"
          onClick={toggleTheme}
          aria-label="Toggle day and night theme"
        >
          {theme === 'night' ? 'Day Mode' : 'Night Mode'}
        </button>
      </header>


      <main className="hero" id="about">
        <section className="hero-content">
          <p className="badge">Full‑Stack Developer</p>
          <h1>
            Crafting clean,
            <span className="accent"> scalable</span> web experiences.
          </h1>
          <p className="subtitle">
            I&apos;m John Doe, a developer focused on building fast, accessible,
            and maintainable applications using modern web technologies.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Tech Stack</span>
              <span className="meta-value">TypeScript, React, Node.js</span>
            </div>
            <div>
              <span className="meta-label">Location</span>
              <span className="meta-value">Remote · Worldwide</span>
            </div>
          </div>
        </section>

        <section className="hero-card" aria-label="Profile overview">
          <div className="hero-card-inner">
            <div className="avatar">JD</div>
            <h2>Let&apos;s build something great.</h2>
            <p>
              Available for freelance work, remote roles, and interesting
              collaborations.
            </p>
            <ul className="highlights">
              <li>5+ years building web apps</li>
              <li>Performance‑first, UX‑driven</li>
              <li>Clean, testable code</li>
            </ul>
          </div>
        </section>
      </main>

      <section className="section" id="projects">
        <h2>Selected Projects</h2>
        <p className="section-intro">
          A few things I&apos;ve been working on recently.
        </p>
        <div className="grid">
          <article className="card">
            <h3>DevTracker</h3>
            <p>
              A productivity dashboard for developers with real‑time Git
              integration and focus analytics.
            </p>
            <p className="tagline">React · Node.js · PostgreSQL</p>
          </article>
          <article className="card">
            <h3>UI Patterns</h3>
            <p>
              A collection of accessible, copy‑paste‑ready UI components for
              modern web apps.
            </p>
            <p className="tagline">TypeScript · React · Storybook</p>
          </article>
          <article className="card">
            <h3>InsightBoard</h3>
            <p>
              Lightweight analytics dashboards for startups to track key product
              metrics.
            </p>
            <p className="tagline">Next.js · API Design</p>
          </article>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Let&apos;s Talk</h2>
        <p className="section-intro">
          Have a role, project, or idea in mind? Reach out and let&apos;s see how
          we can work together.
        </p>
        <div className="contact-row">
          <a
            className="btn primary"
            href="mailto:john.doe@example.com?subject=Project%20Inquiry%20from%20Portfolio"
          >
            Email Me
          </a>
          <div className="contact-links">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
