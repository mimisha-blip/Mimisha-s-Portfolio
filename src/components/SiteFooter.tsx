import React from 'react'

export default function SiteFooter(){
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Mimisha Mittal — AI Product Manager</div>
        <div className="flex gap-4 text-slate-600">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="mailto:aayushilnu0@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
