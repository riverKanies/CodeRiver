import React from 'react'
import Journey from 'components/Journey'
import { connect } from 'react-redux'

import { chooseJourney, loadJourneys, loadJourneyDetail } from 'modules/Journeys'
import { getJourneyDetail } from 'modules/Journeys/selector'

type Props = {
  params: {
    pathwayId: number,
    journeyId: number,
  },
  journey: Object,
  microsteps: Array<any>,
  pathway: Object,
  dispatch: Function
};

class JourneyLayout extends React.Component {
  props: Props

  componentWillMount () {
    const { params, dispatch, journey } = this.props
    const { journeyId, pathwayId } = params

    dispatch(chooseJourney(journeyId))

    if (!journey) {
      dispatch(loadJourneys(pathwayId))
    }

    dispatch(loadJourneyDetail(pathwayId, journeyId))
  }

  render () {
    const { journey, microsteps, pathway } = this.props
    const detailProps = { microsteps, journey, pathway }

    return (
      <Journey {...detailProps} />
    )
  }
}

export default connect(getJourneyDetail)(JourneyLayout)
