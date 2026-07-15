import React from 'react'
import { writing } from '../data/portfolio'

export default function Writing(){
  return (
    <div>
      <h1 className="text-3xl font-bold">Writing</h1>
      <p className="muted mt-2">Coming soon.</p>
      <div className="mt-6 grid gap-4">
        {writing.map((title) => (
          <article key={title} className="card">
            <h3 className="font-semibold">{title}</h3>
            <div className="muted text-sm mt-1">Coming soon</div>
          </article>
        ))}
      </div>
    </div>
  )
}
