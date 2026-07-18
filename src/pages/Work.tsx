import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '../data/portfolio'

const projectKinds: Record<string, string> = {
  'ai-canvas': 'Enterprise concept · NDA-safe',
  'pantry-buddy': 'DigitalOcean hackathon · Working build',
  'ai-product-intelligence-copilot': 'Built end to end · Working prototype'
}

const projectRoles: Record<string, string> = {
  'ai-canvas': 'Product strategy · Research · Prototype · Executive storytelling',
  'pantry-buddy': 'Product strategy · UX · Feature prioritization · Demo storytelling',
  'ai-product-intelligence-copilot': 'Product strategy · AI workflow · Architecture · Prototype development'
}

export default function Work(){
  return (
    <article className="work-page">
      <header className="work-intro">
        <p className="eyebrow">Work</p>
        <h1>What I've <em>built and shaped.</em></h1>
        <p>Selected work across enterprise AI, product intelligence, and technology for social impact. Open any project for the problem, decisions, tradeoffs, architecture, and what I learned.</p>
      </header>

      <section className="work-project-grid" aria-label="Selected projects">
        {featuredProjects.map((project, index) => (
          <Link to={project.links.caseStudy} key={project.slug} className="work-project-card">
            <div className="work-card-top">
              <div className="work-project-name"><span>{project.title.charAt(0)}</span>{project.title}</div>
              <p>{projectKinds[project.slug]}</p>
            </div>
            <div className="work-project-role">{projectRoles[project.slug]}</div>
            <p className="work-project-description">{project.description}</p>
            <div className="work-project-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="work-project-link">Read the breakdown <ArrowRight size={17} /></div>
            <span className="work-card-index">0{index + 1}</span>
          </Link>
        ))}
      </section>

      <section className="additional-work">
        <div className="additional-work-heading">
          <p className="eyebrow">Additional product work</p>
          <h2>Enterprise programs and product decisions.</h2>
        </div>
        <div className="additional-work-list">
          {otherProjects.map((project, index) => (
            <article key={project.name}>
              <span>0{index + 1}</span>
              <div><h3>{project.name}</h3><p>{project.description}</p></div>
              <small>{project.tags.join(' · ')}</small>
            </article>
          ))}
        </div>
      </section>
    </article>
  )
}
