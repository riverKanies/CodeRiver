/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

const message = `Your account has been created, please check your email to activate your account.`

export default class Layout extends React.Component {
  render () {
    return (
      <section className={styles.login}>
        <div className={styles.loginDialogue}>
          <header className={styles.greeting}>
            <h3>{message}</h3>
          </header>
          <span className={styles.buttonWrapper}>
            <Button linkTo='/home' buttonText='Start Planning' />
          </span>
        </div>
      </section>
    )
  }
}
