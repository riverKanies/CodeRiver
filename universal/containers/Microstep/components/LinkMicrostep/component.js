/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import ExternalLink from 'components/ExternalLink'
import MicrostepLabel from 'components/MicrostepLabel'

type Props = {
  microstep: {
    description: string,
    cta_link: string,
    cta_text: string,
  },
  showLabel: boolean
}

const LinkMicrostep = ({ microstep: {
  description = '',
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
    </div>
  )
}

export default LinkMicrostep
