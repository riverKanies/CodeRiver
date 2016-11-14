/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  children: any,
  style: string
}

const StoryContainer = ({ children, style = 'light' }: Props) => {
  return (
    <div className={styles[style]}>
      {children}
    </div>
  )
}

export default StoryContainer
