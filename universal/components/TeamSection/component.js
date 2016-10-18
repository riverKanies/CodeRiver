import React from 'react'
import styles from './styles.scss'
import TeamBio from 'components/TeamBio'

type Props = {
  title: String,
};

const TeamSection = ({ title = 'Team' }: Props) => {
  return (
    <div className={styles.container}>
      <h1>
        {title}
      </h1>
      <div className={styles.partnersContainer} >
        <TeamBio />
        <TeamBio />
        <TeamBio />
      </div>
    </div>
  )
}

export default TeamSection
