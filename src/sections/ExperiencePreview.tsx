import React from 'react'

export default function ExperiencePreview(){
  return (
    <section>
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="mt-6 space-y-4">
        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">HPE Aruba Networking</h3>
              <p className="muted text-sm">Product Manager — AI copilots, analytics, enterprise networking</p>
              <ul className="mt-2 muted text-sm">
                <li>AI copilots and analytics</li>
                <li>Product strategy & pricing</li>
                <li>AI governance and legal collaboration</li>
              </ul>
            </div>
            <div className="text-sm muted">Jul 2023 — Present</div>
          </div>
        </div>
        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Wipro</h3>
              <p className="muted text-sm">Software Engineer — networking, L2 systems, troubleshooting</p>
            </div>
            <div className="text-sm muted">2019 — 2022</div>
          </div>
        </div>
        <div className="muted text-sm">Education: MBA, Business Analytics · BSc Computer Science</div>
      </div>
    </section>
  )
}
