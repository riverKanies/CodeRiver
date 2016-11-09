/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'

type Props = {
  title: string,
}

const TeamSection = ({ title = 'Team' }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.row} >
        <TeamBio />
        <TeamBio />
        <TeamBio />
        <TeamBio />
        <TeamBio />
        <TeamBio />
      </section>
    </section>
  )
}

export default TeamSection
