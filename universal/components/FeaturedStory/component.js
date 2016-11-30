/* @flow */
import React from 'react'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'

type Props = {
  bgColor: 'default' | 'blue' | 'teal' | 'blurple',
  author: string,
  hasAuthor: 'authorTrue' | 'authorFalse',
  hasLabel: 'labelTrue' | 'labelFalse',
  hasButton: 'buttonTrue' | 'buttonFalse',
  details: any,
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
  bgColor = 'default',
  title = defaultTitle,
  hasAuthor = 'authorTrue',
  hasLabel = 'labelTrue',
  hasButton = 'buttonTrue',
  author = defaultAuthor,
  details = defaultDetails,
  externalLink = {},
  label = 'Stories',
  asset = 'kobe.jpg'
}: Props) => {
  return (
    <section className={styles[bgColor]} style={{backgroundImage: `url('./assets/${asset}')`}} >
      <section className={styles.content}>
        <label className={styles[hasLabel]}>{label}</label>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.details}>
          {details}
          { author ? <span className={styles[hasAuthor]}>{author}</span> : '' }
        </p>
        <div className={styles[hasButton]}>
          <ExternalLink {...externalLink} />
        </div>
      </section>
    </section>
  )
}

export default FeaturedStory
