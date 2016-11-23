import { httpPost } from 'lib/http'

const SHOPIFY_URL = process.env.SHOPIFY_URL

export function genRedirectToShopify (return_to = SHOPIFY_URL) {
  return function (event) {
    if (event) {
      event.preventDefault()
    }
    return httpPost('/api/sso/shopify', { return_to })
    .then(result => {
      const { redirect_to } = result

      window.location = redirect_to
    })
    .catch(e => {
      window.location = return_to
    })
  }
}

export const redirectToShopify = genRedirectToShopify()

