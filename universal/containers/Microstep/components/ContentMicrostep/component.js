/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'

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
      <div className={styles.twitter}>
        <a
          className='twitter-share-button'
          data-size='small'
          href={`https://twitter.com/intent/tweet?text=${share_text}`}
        >
          Share
        </a>
      </div>
    </div>
  )
}

export default ContentMicrostep
