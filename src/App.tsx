import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import About from './pages/About'
import Writing from './pages/Writing'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
