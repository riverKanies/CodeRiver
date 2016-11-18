/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'

type Props = {
  microstep: {
    description: string,
    cta_link: string,
    cta_text: string
  }
}

const LinkMicrostep = ({ microstep }: Props) => {
  const {
    description = '',
    cta_link = 'http://www.google.com',
    cta_text = 'click!'
  } = microstep
  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{__html: marked(description)}} />
      <a href={cta_link}>{cta_text}</a>
    </div>
  )
}

export default LinkMicrostep
