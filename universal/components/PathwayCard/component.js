import React from 'react'
import styles from './styles'
import pathwayPlaceholder from './assets/pathway-placeholder.jpg'

type Props = {
  title: String,
  description: String,
  pathwayImage: String,
};

const defaultText = [`Pathway Title`]

const defaultImage = pathwayPlaceholder

const PathwayCard = ({
  title = 'Pathway Card',
  description = 'Vestibulum id ligula porta felis euismod semper.',
  pathwayImage = defaultImage }: Props) => {
  return (
    <section className={styles.pathwayCard}>
      <span className={styles.pathwayImageWrap}>
        <img className={styles.pathwayImage} src={pathwayImage} />
      </span>
      <div className={styles.pathwayDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default PathwayCard
