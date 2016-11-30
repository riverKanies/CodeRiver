/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import MicrostepLabel from 'components/MicrostepLabel'

type Props = {
  microstep: {
    description: string,
    share_text: string
  },
  showLabel: boolean
}
const QuoteMicrostep = (props: Props) => {
  const { microstep, showLabel } = props
  const { description = '' } = microstep
  return (
    <div className={styles.container}>
      <MicrostepLabel title='Thrive Passage' visible={showLabel} />
      <div className={styles.content} dangerouslySetInnerHTML={{__html: marked(description)}} />
    </div>
  )
}

export default QuoteMicrostep
