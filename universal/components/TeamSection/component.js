/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'

type Props = {
  title: string,
}

const TeamSection = ({ title = 'Team' }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.partnersContainer} >
        <TeamBio />
        <TeamBio />
        <TeamBio />
      </div>
    </div>
  )
}

export default TeamSection
