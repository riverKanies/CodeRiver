/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import TwitterShare from 'components/TwitterShare'

type Props = {
  microstep: {
    description: string, share_text: string
  }
}

const ContentMicrostep = ({ microstep }: Props) => {
  const { description = '', share_text = 'I just completed a microstep' } = microstep
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{__html: marked(description)}} />
      </div>
      <TwitterShare share_text={share_text} />
    </div>
  )
}

export default ContentMicrostep
