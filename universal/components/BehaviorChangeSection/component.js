import React from 'react'
import styles from './styles'
import IconWithText from 'components/IconWithText'

type Props = {
  title: String
};

const BehaviorChangeSection = ({ title = 'BehaviorChangeSection' }: Props) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <section className={styles.row}>
        <IconWithText />
        <IconWithText />
      </section>
    </section>
  )
}

export default BehaviorChangeSection
