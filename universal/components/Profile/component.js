/* @flow */
import React from 'react'
import ProfileForm from 'components/ProfileForm'
import PasswordForm from 'components/PasswordForm'
import styles from './styles'
import { renderSelectedQuote } from 'components/QuoteCard'

type Props = {
  email: string,
  name: string,
  logOutAction: Function
}

const Profile = ({
  email,
  name,
  quote
}: Props) => {
  if (!email) return null
  const displayName = name || email
  return (
    <section className={styles.profile}>
      <header className={styles.greeting}>
        <h1 className={styles.h1}>Welcome, {displayName}</h1>
        <h4 className={styles.h4}>Here you can edit your account settings</h4>
      </header>
      <section className={styles.myAccount}>
        <div className={styles.container}>
          <header className={styles.accountHeader}>
            <h3>My Account</h3>
          </header>
          {renderSelectedQuote(quote)}
          <ProfileForm />
          <header className={styles.accountHeader}>
            <h3>Change Password</h3>
          </header>
          <PasswordForm />
        </div>
      </section>
    </section>
  )
}

export default Profile
