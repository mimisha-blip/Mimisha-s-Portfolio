import React from 'react'
import { capabilities } from '../data/portfolio'

export default function Capabilities(){
  return (
    <section className="section-block capabilities-section">
      <div className="section-heading">
        <p className="eyebrow">Capability matrix</p>
        <h2>What I bring to the team.</h2>
      </div>
      <div className="capability-grid">
        {capabilities.map((c, index) => (
          <div key={c.title} className="capability-item">
            <span>0{index + 1}</span>
            <h3>{c.title}</h3>
            <ul>
              {c.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
