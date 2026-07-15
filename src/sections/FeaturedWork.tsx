import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/portfolio'

export default function FeaturedWork(){
  return (
    <section id="featured-work" className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Turning complex systems into products people can use.</h2>
      </div>
      <div className="project-list">
        {featuredProjects.map((p, index) => (
          <article key={p.title} className="project-row">
            <div className={`project-visual project-visual-${index + 1}`}>
              {p.slug === 'pantry-buddy' && <img src="./pantrygraph/dashboard.png" alt="PantryGraph live pantry network graph and assistant" className="project-screenshot" />}
              <span>0{index + 1}</span>
              <div>
                <p>{p.category}</p>
                <strong>{p.title}</strong>
                <small>{p.techStack.slice(0, 3).join(' / ')}</small>
              </div>
            </div>
            <div className="project-copy">
              <div className="project-meta">{p.tags.join(' · ')}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-detail">
                <span>My role</span>
                <p>{p.role.slice(0, 4).join(' · ')}</p>
              </div>
              <div className="project-outcome">
                <span>Outcome</span>
                <p>{p.outcome}</p>
              </div>
              {p.links.caseStudy && (
                <Link to={p.links.caseStudy} className="project-link">View case study <ArrowUpRight size={16} /></Link>
              )}
              {p.slug === 'pantry-buddy' && (
                <div className="mt-4 flex flex-wrap gap-5">
                  <a href={p.links.github} target="_blank" rel="noreferrer" className="project-link mt-0">GitHub <ArrowUpRight size={16} /></a>
                  <a href={p.links.devpost} target="_blank" rel="noreferrer" className="project-link mt-0">Devpost <ArrowUpRight size={16} /></a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
