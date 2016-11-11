import React from 'react'
import styles from './styles'

const typeFormURL = () => {
  const creds = JSON.parse(window.localStorage.getItem('thrive_user_headers'));
  const url = 'https://thriveglobal.typeform.com/to/sKzAso?typeform-embed=embed-fullpage';

  return `${url}&accesstoken=${creds['access-token']}&uid=${creds.uid}&client=${creds.client}`
}

// Engage Page Layout
export const PulseView = () => (
  <main role='main'>
    <iframe id="typeform-full" width="100%" height="100%" frameBorder="0" src={typeFormURL()}></iframe>
  </main>
)

export default PulseView