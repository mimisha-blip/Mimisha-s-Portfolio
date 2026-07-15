import React from 'react'
import { profile, experience, education } from '../data/portfolio'

export default function Resume(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="muted">Professional focus: AI Product Management, Enterprise SaaS, product strategy, analytics, and customer-centered product delivery.</p>
      <a href="./Mimisha-Mittal-Resume.pdf" download className="button-primary">Download PDF</a>
      <div className="card">
        <h2 className="text-xl font-semibold">{profile.name}</h2>
        <p className="muted mt-1">{profile.title}</p>
        <p className="muted mt-2">{profile.location}</p>
      </div>
      <div className="card">
        <h3 className="font-semibold">Experience</h3>
        <ul className="mt-3 text-sm muted space-y-2">
          {experience.map((item) => <li key={item.company}><strong className="text-slate-800">{item.company}</strong> — {item.role}: {item.summary}</li>)}
        </ul>
      </div>
      <div className="card">
        <h3 className="font-semibold">Education</h3>
        <ul className="mt-3 text-sm muted space-y-1">
          {education.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </div>
    </div>
  )
}
