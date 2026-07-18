import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { education, experience } from '../data/portfolio'

export default function Experience(){
  return (
    <article className="experience-page">
      <header className="experience-intro">
        <p className="eyebrow">Experience</p>
        <h1>Engineering foundation. <em>Product leadership.</em></h1>
        <p>More than four years working across enterprise SaaS, networking, analytics, and AI—moving from building complex systems to shaping product strategy, roadmaps, launches, and adoption.</p>
      </header>

      <section className="experience-timeline">
        {experience.map((item, index) => (
          <article key={`${item.company}-${item.role}`} className={index === 0 ? 'experience-role featured' : 'experience-role'}>
            <div className="experience-marker"><span>0{index + 1}</span></div>
            <div>
              <header>
                <div><h2>{item.role}</h2><p>{item.company}</p></div>
                <time>{item.date}</time>
              </header>
              <p className="experience-summary">{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="experience-education">
        <div><p className="eyebrow">Education</p><h2>Business context built on technical depth.</h2></div>
        <div>
          {education.map((item) => {
            const [degree, school, year] = item.split(' · ')
            return <article key={item}><span>{year}</span><h3>{degree}</h3><p>{school}</p></article>
          })}
        </div>
      </section>

      <section className="experience-cta">
        <div><p className="eyebrow">Let's connect</p><h2>Looking for a PM who can bridge product, business, and technology?</h2></div>
        <div>
          <a href="mailto:mimishamittal@gmail.com" className="button-primary">mimishamittal@gmail.com <ArrowUpRight size={16} /></a>
          <a href="https://www.linkedin.com/in/mimisha-mittal/" target="_blank" rel="noreferrer" className="button-secondary inline-flex items-center gap-2">LinkedIn <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </article>
  )
}
