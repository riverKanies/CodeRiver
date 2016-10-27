import React from 'react'
import styles from './styles'
import { Link } from 'react-router'

type Props = {
  microstep: {
    title: String,
    description: String,
  }
};

const InformationalMicrostep = ({ microstep }: Props) => {
  let link = ''
  if (microstep.cta_url && microstep.cta_text) {
    link = (<Link to={microstep.cta_url}>{microstep.cta_text}</Link>)
  }

  return (
    <div className={styles.container}>
      <h1>
        {microstep.title}
      </h1>
      <p>
        {microstep.description}
      </p>
      {link}
    </div>
  )
}

InformationalMicrostep.defaultProps = {
  microstep: {
    title: 'A basic Microstep',
    description: 'Lorem ipsum...'
  }
}

export default InformationalMicrostep
