/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'

type Props = {
  microstep: {
    description: string,
    share_text: string
  }
}

const QuoteMicrostep = ({ microstep }: Props) => {
  const { description = '' } = microstep
  return (
    <div className={styles.container}>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: marked(description)}} />
    </div>
  )
}

export default QuoteMicrostep
