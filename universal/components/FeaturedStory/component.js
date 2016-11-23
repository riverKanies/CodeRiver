/* @flow */
import React from 'react'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'

type Props = {
  author: string,
  details: string,
  title: string,
  asset: string,
  externalLink: any
}

const defaultDetails = 'this the details Cras justo odio, dapibus ac' +
' facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.'

const defaultTitle = "It's Time To Say Goodbye."

const defaultAuthor = 'Koby Bryant'

const FeaturedStory = ({
  title = defaultTitle,
  author = defaultAuthor,
  details = defaultDetails,
  externalLink = {},
  asset = 'kobe.jpg'
}: Props) => {
  return (
    <section className={styles.container} style={{backgroundImage: `url('./assets/${asset}')`}} >
      <section className={styles.content}>
        <label className={styles.label}>STORIES</label>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.details}>
          {details}
          <span className={styles.author}>{author}</span>
        </p>
        <ExternalLink {...externalLink}
        />
      </section>
    </section>
  )
}

export default FeaturedStory
