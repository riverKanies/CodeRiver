/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const StoryComponent = ({ title = 'StoryComponent' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default StoryComponent
