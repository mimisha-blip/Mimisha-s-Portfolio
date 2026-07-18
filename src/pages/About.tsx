import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const strengths = [
  'Product Strategy & Roadmaps',
  'AI & LLM Products',
  'Customer Discovery',
  'Product Analytics',
  '0→1 & Product Launches',
  'Cross-functional Leadership'
]

export default function About(){
  return (
    <article className="about-page">
      <header className="about-profile">
        <div className="about-portrait">
          <img src="./mimisha-mittal.png" alt="Mimisha Mittal" />
          <div><span className="status-dot" /> Mimisha · AI Product Manager</div>
        </div>

        <div className="about-intro">
          <p className="eyebrow">Who I am</p>
          <h1>I'm an AI Product Manager who turns complex problems into clear, buildable product strategy.</h1>
          <p className="about-lead">I combine customer discovery, product analytics, business context, and engineering thinking to build enterprise and AI products that solve real customer problems.</p>

          <div className="about-narrative">
            <p>I started my career as a <strong>software engineer building enterprise networking products</strong>, where I learned to think in systems, understand technical tradeoffs, and collaborate closely with engineering. Today, as a <strong>Product Manager at HPE Aruba Networking</strong>, I lead initiatives across AI copilots, product intelligence, analytics, AI governance, and enterprise networking. I connect customer feedback, telemetry, and business insights to shape product strategy, prioritize roadmaps, and deliver AI-powered experiences.</p>
            <p>My approach is rooted in <strong>curiosity and execution</strong>. I enjoy diving deep into customer problems, validating ideas with data, and rapidly prototyping solutions before scaling them. Beyond my day job, I build AI applications using LLMs, RAG, and agentic workflows, including a Product Copilot for roadmap prioritization and Pantry Buddy, an AI platform that helps food pantries reduce food waste through computer vision and voice AI.</p>
            <p>What sets me apart is my ability to <strong>bridge product, business, and technology</strong>. I can lead discovery, prioritization, roadmap planning, and launches while also partnering closely with engineering on architecture, AI workflows, and technical tradeoffs. I believe the best AI products aren't defined by the models they use. They're defined by the customer problems they solve and the value they create.</p>
          </div>

          <div className="about-tags">
            {strengths.map((strength) => <span key={strength}>↗ {strength}</span>)}
          </div>
        </div>
      </header>

      <section className="career-strip">
        <div className="career-strip-heading">
          <p className="eyebrow">The throughline</p>
          <h2>From understanding systems to deciding what they should become.</h2>
        </div>
        <div className="career-rail">
          <div>
            <span>2019–2021</span>
            <strong>Software Engineer</strong>
            <p>Wipro · Cisco enterprise products</p>
            <small>Customer issues · Code reviews · Delivery</small>
          </div>
          <div>
            <span>2022–Present</span>
            <strong>Product Manager 3</strong>
            <p>HPE Aruba Networking</p>
            <small>Enterprise AI · SASE · Analytics · Strategy</small>
          </div>
          <div>
            <span>2023</span>
            <strong>MBA, Business Analytics</strong>
            <p>University of San Francisco</p>
            <small>Merit Scholarship Recipient</small>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div>
          <p className="eyebrow">What drives me</p>
          <h2>I'm passionate about building AI products that make complex work simpler and create meaningful impact at scale.</h2>
        </div>
        <div>
          <p>Explore how I apply that approach across enterprise product intelligence, conversational AI experiences, and technology for social impact.</p>
          <div className="about-links">
            <Link to="/case-studies">See my work <ArrowUpRight size={16} /></Link>
            <a href="./Mimisha-Mittal-Resume.pdf" download>Download resume <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </article>
  )
}
