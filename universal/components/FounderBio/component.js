/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
};

const details = `Thrive Global has partnered with the leading companies,
academic institutions, and thought leaders to accelerate the cultural shift
around the way we work and live.`
const name = 'Arianna'
const position = 'Founder'

const FounderBio = ({
  name,
  title,
  image,
  bio
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <section className={styles.title}>
          <p>{details}</p>
        </section>
        <section className={styles.image} style={{backgroundImage: `url(${image})`}}>
          <section className={styles.text}>
            <h3>{name}</h3>
            <h4>{title}</h4>
          </section>
        </section>
      </section>
    </section>
  )
}

export default FounderBio
