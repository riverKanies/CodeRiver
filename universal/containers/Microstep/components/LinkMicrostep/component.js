/* @flow */
import React from 'react'
import styles from './styles'
import marked from 'marked'
import Button from 'components/Button'

type Props = {
  microstep: {
    description: string,
    cta_link: string,
    cta_text: string
  }
}

const LinkMicrostep = ({ microstep }: Props) => {
  const {
    description = '',
    cta_link = 'http://www.google.com',
    cta_text = 'click!'
  } = microstep
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{__html: marked(description)}} />
        <div className={styles.button}>
          <Button>
            buttonText: {cta_text},
            linkTo: {cta_link},
            buttonStyle: 'violet'
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LinkMicrostep
