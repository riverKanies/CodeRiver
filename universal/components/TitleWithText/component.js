/* @flow */
import React from 'react'
import styles from './styles'
import iconPlaceholder from './assets/rocket.png'

type Props = {
  title: string,
  description: string,
};

const TitleWithText = ({
  title = 'Title With Some Text',
  description = 'Description goes here...',
  }: Props) => {
  return (
    <section className={styles.container} id={title.toLowerCase()}>
      <span className={styles.iconWrap}>
      <h2>{title}</h2>
      </span>
      <p className={styles.text}>{description}</p>
    </section>
  )
}

export default TitleWithText
