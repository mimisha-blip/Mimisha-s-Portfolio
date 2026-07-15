import React from 'react'
import { education, experience } from '../data/portfolio'

export default function ExperiencePreview(){
  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Track record</p>
        <h2>Technical depth, shaped into product direction.</h2>
      </div>
      <div className="mt-6 grid gap-10 md:grid-cols-[1.5fr_0.7fr]">
        <div className="border-l border-slate-200 pl-6">
          {experience.map((item, index) => (
            <article key={item.company} className={index === 0 ? 'pb-8' : ''}>
              <div className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-[#c84f3d] ring-4 ring-[#f7f5f0]" />
                <h3 className="font-semibold text-slate-900">{item.company}</h3>
                <p className="mt-1 text-sm font-medium text-[#c84f3d]">{item.role}</p>
                <p className="muted mt-3 text-sm leading-6">{item.summary}</p>
                <p className="muted mt-3 text-sm">{item.bullets.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="border-t border-slate-200 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Education</h3>
          <div className="mt-4 space-y-4">
            {education.map((item) => <p key={item} className="text-sm font-medium text-slate-800">{item}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}
