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

const ScienceItemView = ({
  title = defaultTitle,
  description = defaultDescription
}: Props) => {
  return (
    <section className={styles.scienceContainer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </section>
  )
}

export default ScienceItemView
