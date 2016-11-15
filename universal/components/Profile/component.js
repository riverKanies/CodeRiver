/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  email: string
}

const Profile = ({ email }: Props) => {
  return (
    <div className={styles.container}>
      Hi {email}
    </div>
  )
}

export default Profile
