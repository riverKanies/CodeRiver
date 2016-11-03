/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
}

const details = [
  `These are the details`
]

const LearnHeader = ({ title = 'LearnHeader' }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <h1>{title}</h1>
        <p>{details}</p>
      </section>
    </section>
  )
}

export default LearnHeader
