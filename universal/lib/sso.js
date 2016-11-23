import { httpPost } from 'lib/http'

export function linkToShopify (return_to) {
  return httpPost(`/api/sso/shopify?return_to=${return_to}`)
    .then(result => {
      const { redirect_to } = result
      window.location = redirect_to
    })
    .catch(e => {
      window.location = return_to
    })
}

