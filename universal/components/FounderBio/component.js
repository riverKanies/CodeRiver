/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
};

const FounderBio = ({ title = 'FounderBio' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default FounderBio
