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

export const pulseSelector = createSelector(
  [ sessionSelector ],
  (store) => {
    const { userData, requestPending } = store

    const creds = getLocalStorageHeaders()

    const accesstoken = creds['access-token']
    const client = creds['client']
    const uid = creds['uid']

    return {
      requestPending,
      loggedIn: !!userData,
      creds: { accesstoken, client, uid }
    }
  }
)
