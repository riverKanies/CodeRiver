import React from 'react'
import styles from './styles'

type Props = {
  share_text: string
}

const TwitterShare = ({share_text = 'I completed a microstep on Thrive'} : Props) => {
  return <div className={styles.twitter}>
    <a
      className='twitter-share-button'
      data-size='small'
      href={`https://twitter.com/intent/tweet?text=${share_text}`}
    >
      Share
    </a>
  </div>
}

export default TwitterShare
