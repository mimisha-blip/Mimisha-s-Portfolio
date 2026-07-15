import React from 'react'
import FeaturedWork from '../sections/FeaturedWork'
import Capabilities from '../sections/Capabilities'
import ExperiencePreview from '../sections/ExperiencePreview'

export default function Home(){
  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase text-slate-500">AI PRODUCT MANAGER · ENTERPRISE SAAS · PRODUCT STRATEGY</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">I build AI products that turn complex enterprise data into clear decisions.</h1>
          <p className="mt-4 text-slate-600">Product Manager with a software engineering background, building AI copilots, enterprise SaaS experiences, analytics products, and 0→1 prototypes.</p>
          <div className="flex gap-4 mt-6">
            <a href="/work" className="px-4 py-2 rounded-full bg-accent text-white">View My Work</a>
            <a href="/resume" className="px-4 py-2 rounded-full border">Download Resume</a>
            <a href="#" className="px-4 py-2 rounded-full border">Connect on LinkedIn</a>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="card">
              <h3 className="font-semibold">90% reduction</h3>
              <p className="muted text-sm">in outage-related support cases</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">20% conversion</h3>
              <p className="muted text-sm">SD-WAN to SASE migration</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">15% reduction</h3>
              <p className="muted text-sm">in P0 incidents</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Enterprise scope</h3>
              <p className="muted text-sm">AI and SaaS products across enterprise networking</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-white rounded-3xl shadow-lg flex items-center justify-center">Portrait</div>
        </div>
      </section>

      <FeaturedWork />
      <Capabilities />
      <ExperiencePreview />
    </div>
  )
}
