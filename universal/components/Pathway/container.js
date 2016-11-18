import React from 'react'
import Pathway from './component'
import { connect } from 'react-redux'

import { loadJourneys } from 'modules/Journeys'
import { choosePathway, loadPathways } from 'modules/Pathways'
import { getPathwayDetail } from 'modules/Pathways/selector'

type Props = {
  id: number,
  pathway: Object,
  journeys: Array<any>,
  dispatch: Function
}

class PathwayContainer extends React.Component {
  props: Props

  componentWillMount () {
    const { id, dispatch, pathway } = this.props

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
      <div>
        <Pathway {...detailProps} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { pathway, journeys } = getPathwayDetail(state)

  return {
    pathway,
    journeys
  }
}
export default connect(mapStateToProps)(PathwayContainer)
