import React from 'react'
import FeaturedWork from '../sections/FeaturedWork'
import Capabilities from '../sections/Capabilities'
import ExperiencePreview from '../sections/ExperiencePreview'
import ContactSection from './ContactSection'
import { profile } from '../data/portfolio'
import { ArrowRight, MapPin } from 'lucide-react'

export default function Home(){
  return (
    <div>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="availability-line"><span /> AI Product Manager</div>
          <h1>Building AI products that help enterprises <em>make smarter decisions.</em></h1>
          <p className="hero-lead">{profile.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured-work" className="button-primary">{profile.ctas[0]} <ArrowRight size={16} /></a>
            <a href="./Mimisha-Mittal-Resume.pdf" className="button-secondary" download>{profile.ctas[1]}</a>
            <a href="#contact" className="text-link">{profile.ctas[2]}</a>
          </div>
        </div>
        <div className="hero-person" aria-label="About Mimisha">
          <div className="hero-photo">
            <img src="./mimisha-mittal.png" alt="Mimisha Mittal" />
            <div className="hero-photo-label">
              <strong>{profile.name}</strong>
              <span><MapPin size={12} /> {profile.location}</span>
            </div>
          </div>
          <div className="current-role">
            <span className="status-dot" />
            <div>
              <small>Currently</small>
              <p>Product Manager 3 at HPE Aruba Networking</p>
            </div>
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Career highlights">
        {profile.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <FeaturedWork />
      <Capabilities />
      <ExperiencePreview />
      <ContactSection />
    </div>
  )
}
