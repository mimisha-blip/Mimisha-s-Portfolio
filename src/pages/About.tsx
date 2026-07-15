import React from 'react'

export default function About(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="muted">I’m an AI and enterprise SaaS Product Manager with a background in software engineering and business analytics. I enjoy turning complex technical systems into products that help people make faster, clearer decisions.</p>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold">My journey</h3>
          <p className="muted mt-2">From software engineering to product leadership, focused on AI copilots and enterprise platforms.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Beyond work</h3>
          <p className="muted mt-2">Hackathons, mentoring, running, hot yoga, and technology for social impact.</p>
        </div>
      </section>
    </div>
  )
}
