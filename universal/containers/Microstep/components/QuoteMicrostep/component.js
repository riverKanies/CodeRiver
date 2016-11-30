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
  const { description = '', attribution = 'Name' } = microstep
  return (
    <div className={styles.container}>
      <MicrostepLabel title='Thrive Passage' visible={showLabel} />
      <div className={styles.content} dangerouslySetInnerHTML={{__html: marked(description)}} />
      <h4 className={styles.attribution}><em>by</em> {attribution}</h4>
    </div>
  )
}

export default QuoteMicrostep
