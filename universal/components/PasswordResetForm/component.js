/* @flow */
import React from 'react'
import PasswordForm from 'components/PasswordForm'
import styles from './styles'
import contentStyles from 'styles/content.css'

type Props = {
  email: string,
  name: string,
  logOutAction: Function,
  onSubmit: Function
}

const PasswordReset = ({
  email,
  name,
  onSubmit
}: Props) => {
  if (!email) return null
  const displayName = name || email

  return (
    <section className={styles.profile}>
      <header className={styles.greeting}>
        <h1 className={contentStyles.header}>Welcome, {displayName}</h1>
        <h3 className={contentStyles.subheader}>Please provide us with a new password</h3>
      </header>
      <section className={styles.myAccount}>
        <div className={styles.container}>
          <PasswordForm onSubmit={onSubmit} />
        </div>
      </section>
    </section>
  )
}

export default PasswordReset
