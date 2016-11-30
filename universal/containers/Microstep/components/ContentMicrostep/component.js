/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import MicrostepLabel from 'components/MicrostepLabel'
import TwitterShare from 'components/TwitterShare'

type Props = {
  microstep: {
    description: string, share_text: string
  },
  showLabel: boolean
}

const ContentMicrostep = ({ microstep, showLabel = false }: Props) => {
  const { description = '', share_text = 'I just completed a microstep' } = microstep
  return (
    <div className={styles.container}>
      <MicrostepLabel title='Thrive Message' visible={showLabel} />
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{__html: marked(description)}} />
      </div>
      <TwitterShare share_text={share_text} />
    </div>
  )
}

export default ContentMicrostep
