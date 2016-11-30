/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import ExternalLink from 'components/ExternalLink'
import MicrostepLabel from 'components/MicrostepLabel'
import TwitterShare from 'components/TwitterShare'

type Props = {
  microstep: {
    description: string,
    cta_link: string,
    cta_text: string,
    share_text: string
  },
  showLabel: boolean
}

const LinkMicrostep = ({ microstep: {
  description = '',
  share_text = 'I just completed a microstep',
  cta_link = 'http://www.google.com',
  cta_text = 'Read More'
}, showLabel = false }: Props) => {
  const buttonProps = {
    buttonText: cta_text,
    linkTo: cta_link,
    buttonStyle: 'violet',
    linkText: cta_text
  }

  return (
    <div className={styles.container}>
      <MicrostepLabel title='Thrive Connection' visible={showLabel} />
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{__html: marked(description)}} />
        <div className={styles.button}>
          <ExternalLink {...buttonProps} target='_blank' />
        </div>
      </div>
      <TwitterShare share_text={share_text} />
    </div>
  )
}

export default LinkMicrostep
