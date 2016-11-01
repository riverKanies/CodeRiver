/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const LearnCTASection = ({ title = 'LearnCTASection' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default LearnCTASection
