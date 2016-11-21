import { createSelector } from 'reselect'
import { KEY as sessionKey } from 'modules/UserSession'

const userSelector = state => state[sessionKey]

export const getScoreData = createSelector(
  [userSelector],
  (sessionData) => {
    if (!sessionData.userData) return { }

    const { userData } = sessionData
    const score = userData['pulse_score']

    return {
      scoreAvailable: !!score,
      score
    }
  }
)
