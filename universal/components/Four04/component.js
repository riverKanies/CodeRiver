/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

import mark from './assets/thriveLogo.svg'

type Props = {
  author: string,
  quote: string,
  details: string,
  logo: any,
  label: string,
  button: any
}

const returnButton = {
  buttonText: 'Return to Thrive Global',
  linkTo: '/',
  buttonStyle: 'violet'
}

const defaultQuote = 'Failure is not the opposite of success but a stepping stone to success.'

const defaultAuthor = 'Arianna Huffington'

const Four04 = ({
  quote = defaultQuote,
  author = defaultAuthor,
  details = '',
  label = 'Page Not Found',
  button = returnButton,
  logo = mark
}: Props) => {
  return (
    <section id='pageNotFound' className={styles.container}>
      <section className={styles.content}>
        <figure className={styles.brand}>
          <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
        </figure>
        <label className={styles.label}>{label}</label>
        <h2 className={styles.header}>{quote}</h2>
        <span className={styles.author}>{author}</span>
        <Button {...button} />
      </section>
    </section>
  )
}

export default Four04
