/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

import mark from './assets/thriveLogo.svg'

type Props = {
  author: string,
  quote: string,
  logo: any,
  label: string,
  button: any
}

const defaultQuote = "It's Time To Say Goodbye."

const defaultAuthor = 'Arianna Huffington'

const Four04 = ({
  quote = defaultQuote,
  author = defaultAuthor,
  button = {},
  label = 'Page Not Found',
  logo = mark
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
        <label className={styles.label}>{label}</label>
        <h2 className={styles.header}>{quote}</h2>
        <Button {...button} />
      </section>
    </section>
  )
}

export default Four04
