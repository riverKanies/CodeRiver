/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import ExternalLink from 'components/ExternalLink'

type Props = {
  microstep: {
    description: string,
    cta_link: string,
    cta_text: string,
  }
}

const LinkMicrostep = ({ microstep: {
  description = '',
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
          <ExternalLink {...buttonProps} />
        </div>
      </div>
    </div>
  )
}

export default LinkMicrostep
