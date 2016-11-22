import React from 'react'

const typeFormURL = (key, urlParams = '') => {
  return `https://thriveglobal.typeform.com/to/${key}?typeform-embed=embed-fullpage${urlParams}`
}

const styles = {
  width: '100%',
  minHeight: '600px'
}

type Props = {
  urlParams: string,
  typeformkey: string
}

// Engage Page Layout
export const TypeForm = ({ typeformkey, urlParams } : Props) => (
  <main role='main'>
    <iframe
      style={styles}
      id='typeform-full'
      frameBorder='0'
      src={typeFormURL(typeformkey, urlParams)}
    />
  </main>
)

export default TypeForm
