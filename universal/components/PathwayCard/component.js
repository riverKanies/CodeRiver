/* @flow */
import React from 'react'
import styles from './styles'
import pathwayPlaceholder from './assets/pathway-placeholder.jpg'
import { Link } from 'react-router'

type Props = {
  title: string,
  description: string,
  id: number,
  image: any,
};

const defaultText = [`Pathway Title`]

const PathwayCard = ({
  title = defaultText[0],
  description = 'Vestibulum id ligula porta felis euismod semper.',
  image = pathwayPlaceholder,
  id }: Props) => {
  return (
    <Link to={`/pathways/${id}`} className={styles.card}>
      <section>
        <span className={styles.imageWrap}>
          <img className={styles.image} src={image} />
        </span>
        <section className={styles.description}>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
      </section>
    </Link>
  )
}

export default PathwayCard
