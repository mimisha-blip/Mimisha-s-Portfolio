import React from 'react'
import { about } from '../data/portfolio'

export default function About(){
  return (
    <article className="about-page">
      <header className="about-hero">
        <div>
          <p className="eyebrow">About me</p>
          <h1>I'm the PM who turns complex systems into products customers can trust.</h1>
          <p>{about.intro}</p>
        </div>
        <figure>
          <img src="./mimisha-mittal.png" alt="Mimisha Mittal" />
          <figcaption>Mimisha Mittal · Sunnyvale, California</figcaption>
        </figure>
      </header>

      <section className="about-story">
        <div className="about-section-label"><span>01</span><p>My journey</p></div>
        <div className="about-story-copy">
          {about.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="about-principles">
        <div className="about-section-label"><span>02</span><p>How I work</p></div>
        <div className="about-principle-list">
          {about.principles.map((principle, index) => (
            <div key={principle.title}>
              <span>0{index + 1}</span>
              <h2>{principle.title}</h2>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-beyond">
        <div className="about-section-label"><span>03</span><p>Beyond the roadmap</p></div>
        <div>
          <h2>I care about building useful technology and stronger communities.</h2>
          <p>{about.community}</p>
          <ul>{about.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
        </div>
      </section>
    </article>
  )
}
