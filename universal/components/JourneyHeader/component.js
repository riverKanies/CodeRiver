/* @flow */
import React from 'react'
import styles from './styles'
import HeaderQuote from 'components/HeaderQuote'

import mark from './assets/thriveLogo.svg'

type Props = {
  title: string,
  logo: any,
  quote: string,
  author: string
}

const JourneyHeader = ({
  title = '',
  logo = mark,
  quote,
  author
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <figure className={styles.brand}>
          <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
        </figure>
        <h2 id='journeyHeaderTitle' className={styles.header}>{title}</h2>
        <HeaderQuote
          quote={quote}
          author={author}
        />
      </section>
    </section>
  )
}

export default JourneyHeader
