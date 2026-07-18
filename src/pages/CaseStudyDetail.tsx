import React from 'react'
import { useParams } from 'react-router-dom'
import { caseStudies } from '../data/portfolio'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) return <div className="card">Case study not found.</div>

  const defaultSections = [
    { title: 'Problem', body: study.problem },
    { title: 'Users', body: study.users },
    { title: 'Why it matters', body: study.whyItMatters },
    { title: 'My role', body: study.role },
    { title: 'Research and discovery', body: study.research },
    { title: 'Product decisions', body: study.productDecisions },
    { title: 'Tradeoffs', body: study.tradeoffs },
    { title: 'Solution', body: study.solution },
    { title: 'Architecture', body: study.architecture },
    { title: 'Evaluation and success metrics', body: study.evaluation },
    { title: 'Outcome', body: study.outcome },
    { title: 'What I learned', body: study.learned },
    { title: 'What I would improve next', body: study.nextSteps }
  ]

  const media = 'media' in study ? study.media : undefined
  const cover = 'cover' in study ? study.cover : undefined
  const repository = 'repository' in study ? study.repository : undefined
  const sections = 'customSections' in study ? study.customSections : defaultSections

  return <CaseStudyLayout title={study.title} eyebrow={study.eyebrow} overview={study.overview} sections={sections} media={media} cover={cover} repository={repository} />
}
