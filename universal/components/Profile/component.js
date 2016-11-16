/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  email: string,
  logOutAction: Function
}

const Profile = ({ email, logOutAction }: Props) => {
  if (!email) return null
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <p>
          Hi {email}
        </p>
      </div>
      <div className={styles.logout}>
        <Button handleClick={logOutAction} buttonText={'Log Out'} />
      </div>
    </div>
  )
}

export default Profile
