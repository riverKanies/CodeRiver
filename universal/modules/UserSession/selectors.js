import { createSelector } from 'reselect'
import { KEY } from 'modules/UserSession'
import { getLocalStorageHeaders } from 'lib/http'

const sessionSelector = state => state[KEY]

export const subdomainSelector = createSelector(
  [sessionSelector],
  store => {
    return { subdomain: store.subdomain }
  }
)

export const isLoggedIn = createSelector(
  [ sessionSelector ],
  (store) => {
    const { userData } = store

    return {
      isLoggedIn: !!userData,
      subdomain: store.subdomain
    }
  }
)

export const loginSelector = createSelector(
  [ sessionSelector, isLoggedIn ],
  (store, { isLoggedIn }) => {
    const { userData, requestPending } = store

    return {
      renderLoginForm: !isLoggedIn && !requestPending,
      userData
    }
  }
)

export const assessmentsSelector = createSelector(
  [ sessionSelector, isLoggedIn ],
  (store, { isLoggedIn }) => {
    const { requestPending } = store

    const creds = getLocalStorageHeaders() || {}

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

export const getSSORedirect = createSelector(
  [ sessionSelector ],
  (sessionData) => {
    const { provider, returnTo } = sessionData.postLoginSSO

    return {
      shouldRedirect: !!provider && !!returnTo,
      provider,
      returnTo
    }
  }
)

export const passwordFormSelector = createSelector(
  [ sessionSelector ],
  (store) => {
    return {
      message: store.passwordMessage
    }
  }
)
export const profileFormSelector = createSelector(
  [ sessionSelector ],
  (store) => {
    const { userData } = store

    return {
      initialValues: { ...userData },
      message: store.userMessage
    }
  }
)
