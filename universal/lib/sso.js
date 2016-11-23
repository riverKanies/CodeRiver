import { httpPost } from 'lib/http'

export function linkToShopify () {
  return httpPost('/api/sso/shopify')
    .then(result => {
      const { redirect_to } = result
      window.location = redirect_to
    })
    .catch(e => {
      // not authenticated, just send them to shopify
      window.location = process.env.SHOPIFY_URL
    })
}

