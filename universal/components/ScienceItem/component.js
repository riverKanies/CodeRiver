/* @flow */
import React from 'react'
import styles from './styles'
import imagePlaceholder from './assets/team-placeholder.jpg'

type Props = {
  title: string,
  description: string
};

const defaultTitle ="Science Title"
const defaultDescription = '.....science stuff'
const defaultImage= imagePlaceholder;

const ScienceItemView = ({
  title = defaultTitle,
  description = defaultDescription,
  uri: imagePlaceholder
}: Props) => {
  return (
    <section className={styles.scienceContainer}>
        <div className={styles.text}>
          <img src={imagePlaceholder} styles={styles.imageContainer}/>
          <p>{description}</p>
      </div>
    </section>
  )
}

export default ScienceItemView
