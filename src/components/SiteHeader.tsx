import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'

export default function SiteHeader() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('portfolio-theme') as 'light' | 'dark') || 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <header className="site-header">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="site-brand">
          Mimisha <span>Mittal</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/case-studies">Case studies</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/resume" className="nav-resume">Resume</NavLink>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark technical' : 'light professional'} theme`}
            title={`View ${theme === 'light' ? 'dark technical' : 'light professional'} theme`}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
