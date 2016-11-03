/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  details: string
}

const PageHeader = ({ title = 'Generic Page Header', details = '' }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <h1>{title}</h1>
        <p className={styles.details}>{details}</p>
      </section>
    </section>
  )
}

export default PageHeader
