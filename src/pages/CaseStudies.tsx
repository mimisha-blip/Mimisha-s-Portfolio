import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { caseStudies, productThinking } from '../data/portfolio'

export default function CaseStudies(){
  return (
    <article className="studies-page">
      <header className="studies-intro">
        <p className="eyebrow">Case studies</p>
        <h1>How I approach product problems.</h1>
        <p>These case studies show more than the final solution. They explain how I frame the problem, connect customer and business evidence, make tradeoffs, and turn strategy into something a team can build.</p>
      </header>

      <section className="thinking-section">
        <div className="thinking-heading">
          <p className="eyebrow">How I think about product</p>
          <h2>Clear thinking before feature building.</h2>
        </div>
        <div className="thinking-grid">
          {productThinking.map((principle, index) => (
            <div key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="study-list">
        <div className="study-list-heading">
          <p className="eyebrow">Built and shaped</p>
          <h2>Selected product work.</h2>
        </div>
        {caseStudies.map((study, index) => (
          <Link to={`/case-studies/${study.slug}`} key={study.slug} className="study-row">
            <span>0{index + 1}</span>
            <div>
              <small>{study.eyebrow}</small>
              <h3>{study.title}</h3>
              <p>{study.overview}</p>
            </div>
            <div className="study-row-link">Read case study <ArrowRight size={17} /></div>
          </Link>
        ))}
      </section>
    </article>
  )
}
