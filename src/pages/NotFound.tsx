import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="text-center py-24">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="muted mt-4">We couldn’t find that page.</p>
      <div className="mt-6"><Link to="/" className="text-accent">Return home</Link></div>
    </div>
  )
}
