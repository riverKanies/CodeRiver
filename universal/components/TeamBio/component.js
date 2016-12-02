/* @flow */
import React from 'react'
import styles from './styles'
import imagePlaceholder from './assets/team-placeholder.jpg'

type Props = {
  title: string,
  name: string,
  image: any,
  onClick: Function
};

const defaultName = 'Team Member'
const defaultTitle = 'Position'

const TeamBio = ({
  name = defaultName,
  title = defaultTitle,
  image = imagePlaceholder,
  onClick = () => {}
  }: Props) => {
  return (
    <section className={styles.bio} onClick={onClick}>
      <div className={styles.image} style={{backgroundImage: `url(${image})`}}>
        <div className={styles.text}>
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
      </div>
    </section>
  )
}

export default TeamBio
