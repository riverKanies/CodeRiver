import fetch from 'isomorphic-fetch'

function hostUrl () {
  const host = process.env.API_HOST || 'localhost'
  const protocol = process.env.API_PROTOCOL || 'http'
  const port = process.env.API_PORT || '3000'

  return `${protocol}://${host}:${port}`
}

export const HOST_URL = hostUrl()

function request (action, route, data) {
  let authHeaders = JSON.parse(localStorage.getItem('thrive_user_headers')) || {}
  const method = action
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...authHeaders
  }

  const FULL_PATH = HOST_URL + route

  return fetch(FULL_PATH, {
    headers,
    method,
    body: JSON.stringify(data)
  }).then(response => {
    let token = response.headers.get('access-token')
    if (response.status === 200 && token) {
      authHeaders['access-token'] = token
      localStorage.setItem('thrive_user_headers', JSON.stringify(headers))
    }
    return response.json()
  }).then(parsed => {
    if (parsed.errors) {
      return Promise.reject(parsed.errors)
    }
    return parsed
  })
}

export function post (route, data) {
  return request('POST', route, data)
}

export function put (route, data) {
  return request('PUT', route, data)
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
