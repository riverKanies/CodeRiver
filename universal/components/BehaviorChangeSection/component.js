import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const BehaviorChangeSection = ({ title = 'BehaviorChangeSection' }: Props) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <section className={styles.row}>
        <p> Hi </p>
        <p> Hi </p>
        <p> Hi </p>
      </section>
    </section>
  )
}

export default BehaviorChangeSection
