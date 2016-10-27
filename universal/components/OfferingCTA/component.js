/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
};

const OfferingCTA = ({ title = 'OfferingCTA' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default OfferingCTA
