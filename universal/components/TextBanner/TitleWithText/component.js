/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'
import ExternalLink from 'components/ExternalLink'

type Props = {
  title: string,
  description: string,
  linkText: string,
  buttonProps: Object
};

function renderButton (buttonProps: Object) {
  if (buttonProps.external) {
    return (
      <span className={styles.buttonWrapper}>
        <ExternalLink {...buttonProps} />
      </span>
    )
  }
  return (
    <span className={styles.buttonWrapper}>
      <Button {...buttonProps} />
    </span>
  )
}

const TitleWithText = ({
  title = 'Title With Some Text',
  description = 'Description goes here...',
  linkText = 'Email goes here...',
  buttonProps
  }: Props) => {
  return (
    <section className={styles.container} id={title.toLowerCase()}>
      <span className={styles.iconWrap}>
        <h2>{title}</h2>
      </span>
      <p className={styles.text} dangerouslySetInnerHTML={{__html: description}} />
      {buttonProps && renderButton(buttonProps)}
    </section>
  )
}

export default TitleWithText
