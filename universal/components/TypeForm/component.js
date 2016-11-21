import React from 'react'

const typeFormURL = (key) => {
  const creds = JSON.parse(window.localStorage.getItem('thrive_user_headers'))
  const url = `https://thriveglobal.typeform.com/to/${key}?typeform-embed=embed-fullpage`

  return `${url}&accesstoken=${creds['access-token']}&uid=${creds.uid}&client=${creds.client}`
}

const styles = {
  width: '100%',
  minHeight: '600px'
}

type Props = {
  key: string
}

// Engage Page Layout
export const TypeForm = ({ typeformkey } : Props) => (
  <main role='main'>
    <iframe
      style={styles}
      id='typeform-full'
      frameBorder='0'
      src={typeFormURL(typeformkey)}
    />
  </main>
)

export default TypeForm
