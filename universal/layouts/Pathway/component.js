// Pathways Parent Page
import React from 'react'
import { connect } from 'react-redux'
import Pathway from 'components/Pathway'

import { loadJourneys } from 'modules/Journeys'
import { choosePathway, loadPathways } from 'modules/Pathways'
import { getPathwayDetail } from 'modules/Pathways/selector'

type Props = {
  params: {
    id: string,
  },
  pathway: Object,
  journeys: Array<any>,
  dispatch: Function
}

class PathwayLayout extends React.Component {
  props: Props

  componentWillMount () {
    const { params, dispatch, pathway } = this.props
    const { id } = params

    if (!pathway) {
      dispatch(loadPathways())
    }

    dispatch(choosePathway(id))
    dispatch(loadJourneys(id))
  }

  render () {
    const { pathway, journeys } = this.props
    const detailProps = { pathway, journeys }
    return (
      <Pathway {...detailProps} />
    )
  }
}

export default connect(getPathwayDetail)(PathwayLayout)
