import React from 'react'

export default function CaseStudies(){
  return (
    <div>
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <p className="muted mt-2">Detailed project write-ups using a reusable case study template.</p>
      <div className="mt-6 grid gap-6">
        <div className="card">Case study: AI Product Insights Copilot (overview)</div>
        <div className="card">Case study: Pantry Buddy (overview)</div>
      </div>
    </div>
  )
}
