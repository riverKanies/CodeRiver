/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const TeamBio = ({ title = 'TeamBio' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default TeamBio
