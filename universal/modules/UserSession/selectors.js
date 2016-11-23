import { createSelector } from 'reselect'
import { KEY } from 'modules/UserSession'
import { getLocalStorageHeaders } from 'lib/http'

const sessionSelector = state => state[KEY]

export const loginSelector = createSelector(
  [ sessionSelector ],
  (store) => {
    const { requestPending, userData } = store

    return {
      renderLoginForm: !requestPending && !userData,
      userData
    }
  }
)

export const isLoggedIn = createSelector(
  [ sessionSelector ],
  (store) => {
    const { userData } = store

    return { isLoggedIn: !!userData }
  }
)

export const pulseSelector = createSelector(
  [ sessionSelector, isLoggedIn ],
  (store, { isLoggedIn }) => {
    const { requestPending } = store

    const creds = getLocalStorageHeaders()

    const accesstoken = creds['access-token']
    const client = creds['client']
    const uid = creds['uid']

    return {
      requestPending,
      loggedIn: isLoggedIn,
      creds: { accesstoken, client, uid }
    }
  }

)

export const getScoreData = createSelector(
  [ sessionSelector ],
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
