import { createSelector } from 'reselect'
import { KEY } from 'modules/UserSession'

const sessionSelector = state => state[KEY]

export default createSelector(
  [ sessionSelector ],
  (store) => {
    const { requestPending, userData } = store

    return {
      renderLoginForm: !requestPending && !userData,
      userData
    }
  }
)
