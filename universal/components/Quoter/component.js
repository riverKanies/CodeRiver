/* @flow */
import React from 'react'
import QuoterForm from 'components/QuoterForm'
import styles from './styles'

type Props = {
}

const Quoter = (props) => {
  return (
    <section className={styles.profile}>
      <section className={styles.myAccount}>
        <div className={styles.container}>
          <header className={styles.accountHeader}>
            <h3>Get a Quote</h3>
          </header>
          <QuoterForm quoterErrors={props.errors}/>
        </div>
      </section>
    </section>
  )
}

export default Quoter
