/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  title: string,
  description: string,
  linkText: string,
  hasButton: 'buttonTrue' | 'buttonFalse',
  button: Object
};

const TitleWithText = ({
  title = 'Title With Some Text',
  description = 'Description goes here...',
  linkText = 'Email goes here...',
  hasButton = 'buttonTrue',
  button = {}
  }: Props) => {
  return (
    <section className={styles.container} id={title.toLowerCase()}>
      <span className={styles.iconWrap}>
        <h2>{title}</h2>
      </span>
      <p className={styles.text} dangerouslySetInnerHTML={{__html: description}} />
      <span className={styles[hasButton]}>
        <Button {...button} />
      </span>
    </section>
  )
}

export default TitleWithText
