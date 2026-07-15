import React from 'react'

const posts = [
  { title: 'How Product Managers Should Evaluate RAG Products', meta: 'Reading time: 6m' },
  { title: 'Building an AI Product Copilot with LangGraph', meta: 'Reading time: 8m' }
]

export default function Writing(){
  return (
    <div>
      <h1 className="text-3xl font-bold">Writing</h1>
      <div className="mt-6 grid gap-4">
        {posts.map(p=> (
          <article key={p.title} className="card">
            <h3 className="font-semibold">{p.title}</h3>
            <div className="muted text-sm mt-1">{p.meta}</div>
          </article>
        ))}
      </div>
    </div>
  )
}
