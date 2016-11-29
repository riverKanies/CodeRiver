import React from 'react'
import styles from './styles'
import FacebookLogin from 'react-facebook-login'

type Props = {
  handleResponse: Function
}

export default function ({ handleResponse } : Props) {
  return (
    <FacebookLogin
      appId='232613377159246'
      autoLoad={false}
      fields='email'
      callback={handleResponse}
      cssClass={styles.fbButton}
    />
  )
}
