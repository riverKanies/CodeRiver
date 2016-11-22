/* @flow */
import React from 'react'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'

type Props = {
  author: string,
  details: string,
  title: string,
  image: string
}

const defaultDetails = 'this the details Cras justo odio, dapibus ac' +
' facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.'

const defaultTitle = "It's Time To Say Goodbye."

const defaultAuthor = 'Koby Bryant'

const image = "background-image: url('./assets/kobe.jpg')"

const FeaturedStory = ({
  title = defaultTitle,
  author = defaultAuthor,
  details = defaultDetails,
}: Props) => {
  return (
    <section className={`${image} ${styles.container}`}>
      <section className={styles.content}>
        <label className={styles.label}>STORIES</label>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.details}>
          {details}
          <span className={styles.author}>{author}</span>
        </p>
        <ExternalLink
          linkText='READ STORY'
          linkTo='/'
          linkStyle='white'
        />
      </section>
    </section>
  )
}

export default FeaturedStory
