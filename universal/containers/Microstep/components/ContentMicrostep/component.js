/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'

type Props = {
  microstep: {
    description: string
  }
}

const ContentMicrostep = ({ microstep }: Props) => {
  const { description = '' } = microstep
  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{__html: marked(description)}} />
    </div>
  )
}

export default ContentMicrostep
