import React from 'react'

const projects = [
  {
    title: 'AI Product Insights Copilot',
    desc: 'Decision-support platform that synthesizes customer feedback, Jira, support and usage to recommend priorities.',
    tags: ['LangGraph','RAG','Pinecone','Qwen','Product Analytics'],
    links: { case: '/case-studies/insights', github: '#' }
  },
  {
    title: 'AI Canvas for Enterprise Networking',
    desc: 'Role-based AI experience showing product health, risk and operational performance.',
    tags: ['AI Copilot','Enterprise SaaS','Analytics'],
    nda: true
  },
  {
    title: 'Pantry Buddy',
    desc: 'Copilot for food pantries — inventory, transfers, CV and maps.',
    tags: ['DigitalOcean','Neo4j','Computer Vision'],
    links: { case: '/case-studies/pantry' }
  },
  {
    title: 'Enterprise Product Analytics',
    desc: 'Cross-product metrics framework to inform adoption and revenue decisions.',
    tags: ['Product Analytics','Enterprise SaaS']
  }
]

export default function FeaturedWork(){
  return (
    <section>
      <h2 className="text-2xl font-bold">Featured Work</h2>
      <p className="muted mt-1">Selected projects and highlight case studies.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map((p) => (
          <article key={p.title} className="card hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="muted mt-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border text-slate-500">{t}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                {p.nda && <span className="text-sm text-amber-600">NDA-safe</span>}
                <div className="mt-4 flex flex-col gap-2">
                  {p.links?.case && <a href={p.links.case} className="text-sm text-accent">View Case Study</a>}
                  {p.links?.github && <a href={p.links.github} className="text-sm text-slate-600">GitHub</a>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
