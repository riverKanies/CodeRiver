/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  email: string,
  logOutAction: Function
}

const Profile = ({ email, logOutAction }: Props) => {
  return (
    <div className={styles.container}>
      Hi {email}
      <Button handleClick={logOutAction} buttonText={'Log Out'} />
    </div>
  )
}

export default Profile
