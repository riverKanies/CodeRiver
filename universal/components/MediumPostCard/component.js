/* @flow */
/*
 * adding eslint ignore rule for view components since we're rendering atributes
 * straight from the API
 */
/* eslint camelcase: "never" */


import React from 'react'
import styles from './styles'
import dummyImage from './assets/mediumFPO.png'

type Props = {
  title: string,
  collectionName: string,
  tags: Array<string>,
  linkTo: string,
  cover_image: string
};

const defaultImage = dummyImage

const MediumPostCard = ({
  title = 'Post Title',
  cover_image = defaultImage,
  tags = []
}: Props) => {
  return (
    <figure className={styles.postCard}>
      <img className={styles.postImage} src={cover_image} />
      <section className={styles.cardMeta}>
        <header className={styles.header}>
          <p>{tags.join(', ')}</p>
          <h3>{title}</h3>
        </header>
      </section>
    </figure>
  )
}

export default MediumPostCard
