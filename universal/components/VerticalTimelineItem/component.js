/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const VerticalTimelineItem = ({ title = 'VerticalTimelineItem' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default VerticalTimelineItem
