import fetch from 'isomorphic-fetch'

function hostUrl () {
  const host = process.env.API_HOST
  const protocol = process.env.API_PROTOCOL
  const port = process.env.API_PORT

  return `${protocol}://${host}:${port}`
}

export const HOST_URL = hostUrl()

export function httpPost (route, data) {
  const method = 'POST'
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  const FULL_PATH = HOST_URL + route

  return fetch(FULL_PATH, {
    headers,
    method,
    body: JSON.stringify(data)
  }).then(response => response.json())
}

export function httpGet (route) {
  return fetch(HOST_URL + route)
    .then(response => response.json())
}

export const getClientError = errors => {
  if (!errors) {
    return
  }
  const error = errors[0].message
  if (!error || error.indexOf('{"_error"') === -1) {
    return {_error: 'Server query error'}
  }
  return JSON.parse(error)
}
