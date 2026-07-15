import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg text-slate-900">
          Mimisha Mittal
        </Link>
        <nav className="flex gap-4 items-center">
          <NavLink to="/work" className={({isActive})=> isActive? 'text-accent font-medium':'text-slate-600'}>Work</NavLink>
          <NavLink to="/case-studies" className={({isActive})=> isActive? 'text-accent font-medium':'text-slate-600'}>Case Studies</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'text-accent font-medium':'text-slate-600'}>About</NavLink>
          <NavLink to="/writing" className={({isActive})=> isActive? 'text-accent font-medium':'text-slate-600'}>Writing</NavLink>
          <NavLink to="/resume" className={({isActive})=> isActive? 'text-accent font-medium':'text-slate-600'}>Resume</NavLink>
        </nav>
      </div>
    </header>
  )
}
