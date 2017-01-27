/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  author: string,
  quote: string,
  details: string,
  logo: any,
  label: string,
  button: any
}

const returnButton = {
  buttonText: 'Return to Plan Made',
  linkTo: '/',
  buttonStyle: 'violet'
}

const Four04 = ({
  details = '',
  label = 'Page Not Found',
  button = returnButton,
}: Props) => {
  return (
    <section id='pageNotFound' className={styles.container}>
      <section className={styles.content}>
        <label className={styles.label}>{label}</label>
        <Button {...button} />
      </section>
    </section>
  )
}

export default Four04
