/* @flow */
import React from 'react'
import styles from '../styles'

import defaultImage from '../assets/expert_adam-grant.jpg'

type Props = {
  name: string,
  description: Array<string>,
  image: string
}

const Expert = ({
  name = 'Name',
  description = ['This is a description for Name'],
  image = defaultImage
}: Props) => {
  return (
    <figure className={styles.expert}>
      <span className={styles.expertImage}>
        <img src={image} alt={name} />
      </span>
      <figcaption className={styles.expertDescription}>
        <h3 className={styles.h3}>{name}</h3>
        {description.map((paragraph, i) => (<p className={styles.descriptionText} key={i}>{paragraph}</p>))}
      </figcaption>
    </figure>
  )
}

export default Expert
