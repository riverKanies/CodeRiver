import React from 'react'
import TypeForm from 'components/TypeForm'
import styles from './styles'

type Props = {
  dispatch: Function,
  loggedIn: boolean,
  requestPending: boolean,
  creds: Object,
  typeformKey: String
}

function genUrl (creds) {
  return Object.keys(creds).map(k => `${k}=${encodeURIComponent(creds[k])}`).join('&')
}

// Engage Page Layout
export default function AssessmentsView ({ loggedIn, requestPending, creds, typeformKey }: Props) {
  if (requestPending) return null

  if (!loggedIn) {
    return (
      <div className={styles.AssessmentsLogin}>
        <h3> You must be logged in to do assessment </h3>
      </div>
    )
  }

  const url = genUrl(creds)

  return <TypeForm
    typeformkey={typeformKey}
    urlParams={url}
    />
}
