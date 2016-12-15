/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  description: string,
  linkText: string
};

const TitleWithText = ({
  title = 'Title With Some Text',
  description = 'Description goes here...',
  linkText = 'Email goes here...'
  }: Props) => {
  return (
    <section className={styles.container} id={title.toLowerCase()}>
      <span className={styles.iconWrap}>
        <h2>{title}</h2>
      </span>
      <p className={styles.text}>{description}</p>
      <a className={styles.link}>{linkText}</a>
    </section>
  )
}

export default TitleWithText
