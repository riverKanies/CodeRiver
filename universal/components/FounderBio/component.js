/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
};

const defaultTitle = 'Team'
const details = `Thrive Global has partnered with the leading companies,
academic institutions, and thought leaders to accelerate the cultural shift
around the way we work and live.`
const name = 'Arianna'
const position = 'Founder'

const FounderBio = ({
  title = defaultTitle
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <section className={styles.title}>
          <h2>{title}</h2>
          <p>{details}</p>
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
