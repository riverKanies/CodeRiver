import React from 'react'
import styles from './styles'

type Props = {
  title: String,
  bodyCopy: Array,
};

const defaultCopy = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const HeroHeader = ({ title = 'About Thrive', bodyCopy = defaultCopy }: Props) => {
  return (
    <div>
      <div className={styles.countainer}>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
        <h1>{title}</h1>
      </div>
      <div className={styles.copy} >
        {bodyCopy.map(paragraph => (<p>{paragraph}</p>))}
      </div>
    </div>
  )
}

export default HeroHeader
