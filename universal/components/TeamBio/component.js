import React from 'react'
import styles from './styles'

type Props = {
title: String
};

const TeamBio = ({ title = 'TeamBio' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default TeamBio
