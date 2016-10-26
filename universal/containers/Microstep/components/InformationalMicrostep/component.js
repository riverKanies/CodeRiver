import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const InformationalMicrostep = ({ title = 'InformationalMicrostep' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default InformationalMicrostep
