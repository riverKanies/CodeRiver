// Pathways Parent Page
import React from 'react'
import Pathway from 'components/Pathway'

// Pathways Page Layout
type Props = {
  params: {
    id: string,
  }
}

export const PathwayLayout = ({ params: { id } } : Props) => {
  return <Pathway id={id} />
}

export default PathwayLayout
