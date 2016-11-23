import { getSSORedirect } from 'modules/UserSession/selectors'
import { clearPostLoginSSO } from 'modules/UserSession'
import { genRedirectToShopify } from 'lib/sso'

export const actions = {
  checkForRedirect: 'sso/check-for-redirect'
}

function performRedirect (provider, redirectTo) {
  switch (provider) {
    case 'shopify':
      genRedirectToShopify(redirectTo)()
      break
    default:
      // do nothing cause we don't support you yet
      return
  }
}

export default function ssoRedirectMiddleware ({ dispatch, getState }) {
  return next => action => {
    const { type } = action
    const ssoState = getSSORedirect(getState())

    if (type === actions.checkForRedirect && ssoState.shouldRedirect) {
      dispatch(clearPostLoginSSO())
      performRedirect(ssoState.provider, ssoState.returnTo)
    }
    return next(action)
  }
}
