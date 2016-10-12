import fetch from 'isomorphic-fetch'

function hostUrl () {
  const host = process.env.API_HOST || 'localhost'
  const protocol = process.env.API_PROTOCOL || 'http'
  const port = process.env.API_PORT || '3000'

  return `${protocol}://${host}:${port}`
}

const HOST_URL = hostUrl()

export function post (route, data) {
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

export function get (route) {
  return fetch(HOST_URL + route)
    .then(response => response.json())
}

export const error = errors => {
  if (!errors) {
    return
  }
  const error = errors[0].message
  if (!error || error.indexOf('{"_error"') === -1) {
    return {_error: 'Server query error'}
  }
  return JSON.parse(error)
}
