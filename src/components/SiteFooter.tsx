import React from 'react'
import { contact } from '../data/portfolio'

export default function SiteFooter(){
  return (
    <footer className="border-t border-stone-300 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-sm text-stone-500">
          <div className="font-semibold text-stone-900">Mimisha Mittal</div>
          <div>AI Product Manager · {contact.location}</div>
        </div>
        <div className="flex flex-wrap gap-4 text-stone-500 text-sm">
          {contact.links.filter((link) => link.href).map((link) => (
            <a key={link.label} href={link.href} className="hover:text-accent">{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
