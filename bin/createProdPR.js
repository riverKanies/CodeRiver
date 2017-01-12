const fetch = require('isomorphic-fetch')

function buildUrl (path) {
  const base = `https://api.github.com/repos/thriveglobal/thrive-marketing`
  const token = `access_token=${process.env.GH_TOKEN}`

  return `${base}${path}?${token}`
}

function getMasterSHA () {
  const masterUrl = buildUrl('/git/refs/heads/master')
  return fetch(masterUrl)
    .then(r => r.json())
    .then(j => j.object.sha)
}

function createBranchFromSha (sha) {
  const createBranchURL = buildUrl('/git/refs')
  const now = new Date()
  const dateString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}`
  const branchName = `deploy/production-${dateString}`
  const body = {
    'ref': `refs/heads/${branchName}`,
    'sha': sha
  }

  return fetch(createBranchURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(() => branchName)
}

function createPullRequestToProd (branchName) {
  const createPullRequest = buildUrl('/pulls')
  const body = {
    'title': 'production deployment',
    'body':
`TAKE A LOOK AT THE COMMITS AND UPDATE ME!

_USER FACING CHANGES_
* ...

_NON-USER FACING CHANGES_
* ...

_ANY OTHER CONSIDERATIONS?_`,
    'head': branchName,
    'base': 'production'
  }

  return fetch(createPullRequest, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    // eslint-disable-next-line no-console
    .then(r => console.log(r))
}

getMasterSHA()
  .then(createBranchFromSha)
  .then(createPullRequestToProd)
