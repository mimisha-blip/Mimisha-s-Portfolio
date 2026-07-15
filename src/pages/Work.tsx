import React from 'react'
import { otherProjects } from '../data/portfolio'

export default function Work(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Work</h1>
      <p className="muted">A categorized gallery of projects and experiments across AI, enterprise product management, strategy, and analytics.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {otherProjects.map((project) => (
          <article key={project.name} className="card">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{project.category}</div>
            <h3 className="font-semibold mt-2">{project.name}</h3>
            <p className="muted mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => <span key={tag} className="text-xs px-2 py-1 rounded-full border text-slate-500">{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
