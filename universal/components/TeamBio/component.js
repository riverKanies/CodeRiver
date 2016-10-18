import React from 'react'
import styles from './styles.scss'

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
