/* @flow */
import React from 'react'
import styles from './styles'
import iconPlaceholder from './assets/rocket.png'

type Props = {
  title: string,
  description: string,
  icon: any
};

const IconWithText = ({
  title = 'IconWithText',
  description = 'Description goes here...',
  icon = iconPlaceholder
  }: Props) => {
  return (
    <section className={styles.container}>
      <span className={styles.iconWrap}>
        <img className={styles.icon} src={icon} />
      </span>
      <section className={styles.text}>
        <p>{description}</p>
      </section>
    </section>
  )
}

export default IconWithText
