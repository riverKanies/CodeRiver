/* @flow */
import React from 'react'
import styles from './styles'

import mark from './assets/thriveLogo.svg'

type Props = {
  title: string,
  logo: any,
}

const JourneyHeader = ({
  title = '',
  logo = mark
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <figure className={styles.brand}>
          <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
        </figure>
        <h2 className={styles.header}>{title}</h2>
      </section>
    </section>
  )
}

export default JourneyHeader
