import React from 'react'
import { contact } from '../data/portfolio'

export default function ContactSection(){
  return (
    <section id="contact" className="my-20 border-y border-stone-300 py-14 md:my-28 md:py-20">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">{contact.headline}</h2>
          <p className="mt-3 max-w-2xl text-slate-600">{contact.description}</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-slate-500">Based in</p>
          <p className="mt-1 font-medium text-slate-800">{contact.location}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            {contact.links.map((link) => link.href ? (
              <a key={link.label} href={link.href} className="text-sm font-semibold text-stone-800 hover:text-[#c84f3d]">{link.label}</a>
            ) : (
              <span key={link.label} className="text-sm text-slate-400">{link.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
