/* @flow */
import React from 'react'
import styles from './styles'
import iconPlaceholder from './assets/rocket.png'

type Props = {
  description: string,
  icon: any
};

const IconWithText = ({
  description = 'Description goes here...',
  icon = iconPlaceholder
  }: Props) => {
  return (
    <section className={styles.container}>
      <span className={styles.iconWrap}>
        <img className={styles.icon} src={icon} />
      </span>
      <p className={styles.text}>{description}</p>
    </section>
  )
}

export default IconWithText
