import React from 'react'
import Journey from './component'
import { connect } from 'react-redux'

import { chooseJourney, loadJourneys, loadJourneyDetail } from 'modules/Journeys'
import { getJourneyDetail } from 'modules/Journeys/selector'

type Props = {
  pathwayId: number,
  journeyId: number,
  journey: Object,
  microsteps: Array<any>,
  dispatch: Function
}

class JourneyContainer extends React.Component {
  props: Props

  componentWillMount () {
    const { journeyId, pathwayId, dispatch, journey } = this.props

    dispatch(chooseJourney(journeyId))

    if (!journey) {
      dispatch(loadJourneys(pathwayId))
    }

    dispatch(loadJourneyDetail(pathwayId, journeyId))
  }

  render () {
    const { journey, microsteps } = this.props
    const detailProps = { microsteps, journey }
    return (
      <div>
        <Journey {...detailProps} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { journey, microsteps } = getJourneyDetail(state)

  return {
    journey,
    microsteps
  }
}

export default connect(mapStateToProps)(JourneyContainer)
