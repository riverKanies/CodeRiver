// Pathways Parent Page
import React from 'react'
import Journey from 'components/Journey'

// Journeys Page Layout
type Props = {
  params: {
    pathwayId: string,
    journeyId: string,
  }
}

export default function ({ params: { pathwayId, journeyId } } : Props) {
  return <Journey pathwayId={pathwayId} journeyId={journeyId} />
}

