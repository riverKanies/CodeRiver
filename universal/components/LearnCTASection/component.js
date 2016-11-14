/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  title: string
}

const details = [
  `Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
  eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare`
]

const hello = `Let's Thrive`

const LearnCTASection = ({ title = 'LearnCTASection' }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <h2>{title}</h2>
        <p>{details}</p>
        <section className={styles.button}>
          <Button
            buttonText={hello}
            buttonStyle='violet-medium'
          />
        </section>
      </section>
    </section>
  )
}

export default LearnCTASection
