/* @flow */
import React from 'react'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'

type Props = {
  author: string,
  hasAuthor: 'authorTrue' | 'authorFalse',
  hasLabel: 'labelTrue' | 'labelFalse',
  details: string,
  title: string,
  asset: string,
  label: string,
  externalLink: any
}

const defaultDetails = 'this the details Cras justo odio, dapibus ac' +
' facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.'

const defaultTitle = "It's Time To Say Goodbye."

const defaultAuthor = 'Koby Bryant'

const FeaturedStory = ({
  title = defaultTitle,
  hasAuthor = 'authorTrue',
  hasLabel = 'labelTrue',
  author = defaultAuthor,
  details = defaultDetails,
  externalLink = {},
  label = 'Stories',
  asset = 'kobe.jpg'
}: Props) => {
  return (
    <section className={styles.container} style={{backgroundImage: `url('./assets/${asset}')`}} >
      <section className={styles.content}>
        <label className={styles[hasLabel]}>{label}</label>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.details}>
          {details}
          { author ? <span className={styles[hasAuthor]}>{author}</span> : '' }
        </p>
        <ExternalLink {...externalLink}
        />
      </section>
    </section>
  )
}

export default FeaturedStory
