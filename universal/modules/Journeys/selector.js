import { createSelector } from 'reselect'

import { KEY } from 'modules/Journeys'

const journeysSelector = state => state[KEY]

export const getJourneyDetail = createSelector(
  [ journeysSelector ],

  (store) => {
    const { currentJourney, list, detail } = store

    const journey = list.find(p => parseInt(p.id) === parseInt(currentJourney))
    const microsteps = (detail && detail.microsteps) ? detail.microsteps : []

    return {
      journey,
      microsteps
    }
  }
)
