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

const PathwayHeader = ({
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
        <h2 className={styles.header}>{title}</h2>
        <HeaderQuote
          quote={quote}
          author={author}
        />
      </section>
    </section>
  )
}

export default PathwayHeader
