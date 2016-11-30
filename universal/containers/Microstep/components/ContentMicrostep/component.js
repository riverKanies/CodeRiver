/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import MicrostepLabel from 'components/MicrostepLabel'

type Props = {
  microstep: {
    description: string,
  },
  showLabel: boolean
}

const ContentMicrostep = ({ microstep, showLabel = false }: Props) => {
  const { description = '' } = microstep
  return (
    <div className={styles.container}>
      <MicrostepLabel title='Thrive Message' visible={showLabel} />
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{__html: marked(description)}} />
      </div>
    </div>
  )
}

export default ContentMicrostep
