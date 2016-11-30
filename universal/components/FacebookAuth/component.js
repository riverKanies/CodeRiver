import React from 'react'
import styles from './styles'
import FacebookLogin from 'react-facebook-login'

type Props = {
  handleResponse: Function
}

export default function ({ handleResponse } : Props) {
  return (
    <FacebookLogin
      appId={process.env.FACEBOOK_ID}
      autoLoad={false}
      fields='email,name'
      callback={handleResponse}
      cssClass={styles.fbButton}
    />
  )
}
