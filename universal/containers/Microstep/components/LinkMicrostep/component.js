/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import Button from 'components/Button'

type Props = {
  microstep: {
    description: string,
    cta_link: string,
    cta_text: string,
    share_text: string
  }
}

const LinkMicrostep = ({ microstep: {
  description = '',
  share_text = 'I just completed a microstep',
  cta_link = 'http://www.google.com',
  cta_text = 'click!'
}}: Props) => {
  const buttonProps = {
    buttonText: cta_text,
    linkTo: cta_link,
    buttonStyle: 'violet'
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{__html: marked(description)}} />
        <div className={styles.button}>
          <Button {...buttonProps} />
        </div>
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

export default LinkMicrostep
