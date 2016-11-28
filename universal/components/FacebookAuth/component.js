import React from 'react'
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
      cssClass='my-facebook-button-class'
      icon='fa-facebook'
    />
  )
}
