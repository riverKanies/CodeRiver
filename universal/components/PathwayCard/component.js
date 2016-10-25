import React from 'react'
import styles from './styles'
import pathwayPlaceholder from './assets/pathway-placeholder.jpg'

type Props = {
  title: String,
  description: String
};

const defaultText = [`Pathway Title`]

const defaultImage = pathwayPlaceholder

const PathwayCard = ({
  title = 'Pathway Card',
  description = 'Vestibulum id ligula porta felis euismod semper.',
  bannerImage = defaultImage }: Props) => {
  return (
    <section className={styles.container}>
      <span className={styles.pathwayImage}>
        <img className={styles.image} src={pathwayPlaceholder} />
      </span>
      <div className={styles.pathwayDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default PathwayCard
