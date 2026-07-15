import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="site-brand">
          Mimisha <span>Mittal</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/case-studies">Case studies</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/writing">Writing</NavLink>
          <NavLink to="/resume" className="nav-resume">Resume</NavLink>
        </nav>
      </div>
    </header>
  )
}
