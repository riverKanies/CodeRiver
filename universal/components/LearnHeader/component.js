/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const LearnHeader = ({ title = 'LearnHeader' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default LearnHeader
