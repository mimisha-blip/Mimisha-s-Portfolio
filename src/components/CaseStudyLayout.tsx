import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'

type CaseStudyMedia = {
  hero: string
  video: string
  github: string
  devpost: string
}

type CaseStudyLayoutProps = {
  title: string
  eyebrow: string
  overview: string
  sections: Array<{ title: string; body: string }>
  media?: CaseStudyMedia
  cover?: { src: string; alt: string; caption: string }
  repository?: string
}

export default function CaseStudyLayout({ title, eyebrow, overview, sections, media, cover, repository }: CaseStudyLayoutProps) {
  return (
    <article className="case-study">
      <header className="case-header">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{overview}</p>
        {media && (
          <div className="case-actions">
            <a href={media.devpost} target="_blank" rel="noreferrer" className="button-primary">View on Devpost <ExternalLink size={15} /></a>
            <a href={media.github} target="_blank" rel="noreferrer" className="button-secondary inline-flex items-center gap-2"><Github size={15} /> Source code</a>
          </div>
        )}
        {repository && (
          <div className="case-actions">
            <a href={repository} target="_blank" rel="noreferrer" className="button-primary"><Github size={15} /> View repository</a>
          </div>
        )}
      </header>

      {cover && (
        <div className="case-cover">
          <figure className="case-hero-figure">
            <div className="case-browser-bar"><span /><span /><span /><p>AI Product Intelligence Copilot</p></div>
            <img src={cover.src} alt={cover.alt} className="case-hero-image" />
            <figcaption>{cover.caption}</figcaption>
          </figure>
        </div>
      )}

      {media && (
        <div className="case-media">
          <figure className="case-hero-figure">
            <div className="case-browser-bar"><span /><span /><span /><p>Pantry network · San Francisco</p></div>
            <img src={media.hero} alt={`${title} interactive pantry map and AI assistant`} className="case-hero-image" />
            <figcaption>Interactive pantry map with inventory signals and conversational search.</figcaption>
          </figure>
          <section className="case-video-section">
            <p className="eyebrow">Product walkthrough</p>
            <h2>From donation intake to food discovery.</h2>
            <video controls preload="metadata" poster={media.hero} className="case-video">
              <source src={media.video} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </section>
        </div>
      )}

      <div className="case-body">
        <aside className="case-nav">
          <div>On this page</div>
          <ul>
            {sections.map((section, index) => (
              <li key={section.title}><a href={`#case-section-${index + 1}`}>0{index + 1} · {section.title}</a></li>
            ))}
          </ul>
        </aside>
        <div className="case-sections">
          {sections.map((section, index) => (
            <section key={section.title} id={`case-section-${index + 1}`}>
              <span>0{index + 1}</span>
              <div><h2>{section.title}</h2><p>{section.body}</p></div>
            </section>
          ))}
        </div>
      </div>

      <footer className="case-footer">
        <Link to="/case-studies">← All case studies</Link>
        <Link to="/work">Explore more work →</Link>
      </footer>
    </article>
  )
}
