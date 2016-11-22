import React from 'react'
import TypeForm from 'components/TypeForm'
import styles from './styles'

// Engage Page Layout
export default function PulseView () {
  const creds = JSON.parse(window.localStorage.getItem('thrive_user_headers'))
  
  if (!creds || creds && !creds.uid) return (
    <div className={styles.PulseLogin}>
      <h3> You must be logged in to do assessment </h3>
    </div>
  )


  return <TypeForm typeformkey='sKzAso' urlParams={`&accesstoken=${creds['access-token']}&uid=${creds.uid}&client=${creds.client}`} />
}


