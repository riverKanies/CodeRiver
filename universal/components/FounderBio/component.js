/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
};

const defaultTitle = 'Team'
const name = 'Arianna'
const position = 'Founder'

const FounderBio = ({
  title = defaultTitle, }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <section className={styles.title}>
          <h2>{title}</h2>
        </section>
        <section className={styles.image}>
          <section className={styles.text}>
            <h3>{name}</h3>
            <p>{position}</p>
          </section>
        </section>
      </section>
    </section>
  )
}

export default FounderBio
