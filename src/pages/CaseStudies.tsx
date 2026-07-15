import React from 'react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/portfolio'

export default function CaseStudies(){
  return (
    <div>
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <p className="muted mt-2">Selected work across enterprise AI, product strategy, analytics, and AI for social good.</p>
      <div className="mt-6 grid gap-6">
        {caseStudies.map((study) => (
          <article key={study.slug} className="card">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{study.eyebrow}</div>
            <h3 className="font-semibold mt-2">{study.title}</h3>
            <p className="muted mt-2">{study.overview}</p>
            <p className="text-sm mt-4 text-slate-600">Outcome: {study.outcome}</p>
            <Link to={`/case-studies/${study.slug}`} className="inline-block mt-4 text-accent font-medium">Read case study</Link>
          </article>
        ))}
      </div>
    </div>
  )
}
