import fetch from 'isomorphic-fetch'

function clientUrl () {
  return (location) ? location.origin : ''
}

export const CLIENT_URL = clientUrl()

function hostUrl () {
  const host = process.env.API_HOST
  const protocol = process.env.API_PROTOCOL
  const port = process.env.API_PORT

  return `${protocol}://${host}:${port}`
}

export const HOST_URL = hostUrl()

function parseResponse (response) {
  if (!response.status) {
    throw new Error(response)
  } else if (response.status >= 400) {
    return response.json().then(r => Promise.reject(r))
  }
  return response.json()
}

export function loadHeaders () {
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const keys = window.localStorage.getItem('thrive_user_headers')

  return (keys) ? { ...defaultHeaders, ...JSON.parse(keys) } : defaultHeaders
}

export function httpPost (route, data) {
  const method = 'POST'
  const headers = loadHeaders()

  const FULL_PATH = HOST_URL + route

  return fetch(FULL_PATH, {
    headers,
    method,
    body: JSON.stringify(data)
  }).then(parseResponse, parseResponse)
}

export function httpGet (route) {
  const headers = loadHeaders()

  const FULL_PATH = HOST_URL + route

  return fetch(FULL_PATH, { headers })
    .then(parseResponse, parseResponse)
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
