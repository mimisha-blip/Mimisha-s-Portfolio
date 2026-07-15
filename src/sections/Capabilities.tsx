import React from 'react'

const capabilities = [
  { title: 'AI Product Management', items: ['RAG','Agent workflows','Prompt design','Eval & guardrails'] },
  { title: 'Enterprise SaaS', items: ['Discovery','Roadmaps','Integrations','Cloud products'] },
  { title: 'Product Strategy', items: ['Market sizing','Pricing','PLG','GTM'] },
  { title: 'Data & Analytics', items: ['Metrics','Dashboards','Adoption','Prioritization'] },
  { title: 'Technical Leadership', items: ['APIs','Vector DBs','LLM systems','Engineered tradeoffs'] }
]

export default function Capabilities(){
  return (
    <section>
      <h2 className="text-2xl font-bold">Capabilities</h2>
      <p className="muted mt-1">Where I contribute most.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {capabilities.map(c=> (
          <div key={c.title} className="card">
            <h3 className="font-semibold">{c.title}</h3>
            <ul className="mt-3 text-sm muted space-y-1">
              {c.items.map(i=> <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
