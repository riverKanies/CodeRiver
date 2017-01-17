import fetch from 'isomorphic-fetch'

const LOCAL_STORAGE_KEY = 'thrive_user_headers'

function clientUrl () {
  return (location && location.origin) ? location.origin : ''
}

export const CLIENT_URL = clientUrl()

function hostUrl () {
  const host = process.env.API_HOST
  const protocol = process.env.API_PROTOCOL
  const port = process.env.API_PORT

  return `${protocol}://${host}:${port}`
}

export const HOST_URL = hostUrl()

export const saveHeaders = (headers) => {
  const h = {
    'access-token': headers.get('access-token'),
    'token-type': headers.get('token-type'),
    'client': headers.get('client'),
    'uid': headers.get('uid')
  }

  if (h['access-token'] && h['token-type']) {
    saveHeaderObject(h)
  }
}

export function subdomain (l = location) {
  const domainArray = l.hostname ? l.hostname.split('.') : []
  let subdomain = 'www'

  if (domainArray.length > 2) {
    subdomain = l.hostname.split('.').shift()
  }

  return subdomain
}

export function saveHeaderObject (h) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(h))
}

export function getLocalStorageHeaders () {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
}

export const clearHeaders = () => localStorage.setItem(LOCAL_STORAGE_KEY, '')

function parseResponse (response) {
  saveHeaders(response.headers)

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
  const keys = localStorage.getItem(LOCAL_STORAGE_KEY)

  return (keys) ? { ...defaultHeaders, ...JSON.parse(keys) } : defaultHeaders
}

export function httpPost (route, data, method = 'POST') {
  const headers = loadHeaders()

  const FULL_PATH = HOST_URL + route

  return fetch(FULL_PATH, {
    headers,
    method,
    body: JSON.stringify(data)
  }).then(parseResponse, parseResponse)
}

export function httpPut (route, data) {
  return httpPost(route, data, 'PUT')
}

export function httpDelete (route, data) {
  return httpPost(route, data, 'DELETE')
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
