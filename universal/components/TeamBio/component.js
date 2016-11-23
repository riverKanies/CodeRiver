/* @flow */
import React from 'react'
import styles from './styles'
import imagePlaceholder from './assets/team-placeholder.jpg'

type Props = {
  title: string,
  name: string,
  image: any,
};

const defaultName = 'Team Member'
const defaultTitle = 'Position'

const TeamBio = ({
  name = defaultName,
  title = defaultTitle,
  image = imagePlaceholder,
  }: Props) => {
  return (
    <section className={styles.bio}>
      <div className={styles.image}>
        <div className={styles.text}>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </section>
  )
}

export default TeamBio
