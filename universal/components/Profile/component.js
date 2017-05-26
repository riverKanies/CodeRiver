/* @flow */
import React from 'react'
import ProfileForm from 'components/ProfileForm'
import PasswordForm from 'components/PasswordForm'
import styles from './styles'
import contentStyles from 'styles/content.css'

type Props = {
  email: string,
  name: string,
  logOutAction: Function
}

const Profile = ({
  email,
  name
}: Props) => {
  if (!email) return null
  const displayName = name || email
  return (
    <section className={styles.profile}>
      <header className={styles.greeting}>
        <h1 className={contentStyles.header}>Welcome, {displayName}</h1>
        <h3 className={contentStyles.subheader}>Here you can edit your account settings</h3>
      </header>
      <section className={styles.myAccount}>
        <div className={styles.container}>
          <header className={styles.accountHeader}>
            <h3 className={contentStyles.subheader}>My Account</h3>
          </header>
          <ProfileForm />
          <header className={styles.accountHeader}>
            <h3 className={contentStyles.subheader}>Change Password</h3>
          </header>
          <PasswordForm />
        </div>
      </section>
    </section>
  )
}

export default Profile
