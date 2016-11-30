/* @flow */
import React from 'react'
import styles from './styles'

import mark from './assets/thriveLogo.svg'

type Props = {
  description: string,
  title: string,
  logo: any,
}

const defaultDescription = `this the details Cras justo odio, dapibus ac
facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.`

const defaultTitle = "It's Time To Say Goodbye."

const JourneyHeader = ({
  title = defaultTitle,
  description = defaultDescription,
  logo = mark,
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <figure className={styles.brand}>
          <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
        </figure>
        <h2 className={styles.header}>{title}</h2>
        <div className={styles.divider} />
        <p className={styles.details}>
          {description}
        </p>
      </section>
    </section>
  )
}

export default JourneyHeader
