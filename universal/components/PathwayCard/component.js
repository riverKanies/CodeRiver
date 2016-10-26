import React from 'react'
import styles from './styles'
import pathwayPlaceholder from './assets/pathway-placeholder.jpg'

type Props = {
  title: String,
  description: String,
  image: Object,
};

const defaultText = [`Pathway Title`]

const PathwayCard = ({
  title = {defaultText},
  description = 'Vestibulum id ligula porta felis euismod semper.',
  image = pathwayPlaceholder }: Props) => {
  return (
    <section className={styles.card}>
      <span className={styles.imageWrap}>
        <img className={styles.image} src={image} />
      </span>
      <section className={styles.description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    </section>
  )
}

export default PathwayCard
