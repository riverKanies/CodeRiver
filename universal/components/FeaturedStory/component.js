/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  author: string,
  details: string,
  title: string
}

const defaultDetails = [`this the details Cras justo odio, dapibus ac facilisis in,
egestas eget quam. Etiam porta sem malesuada magna mollis euismod.`]

const defaultTitle = ["It's Time To Say Goodbye."]

const defaultAuthor = ['Koby Bryant']

const FeaturedStory = ({
  title = defaultTitle,
  author = defaultAuthor,
  details = defaultDetails
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <label className={styles.label}>STORIES</label>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.details}>
          {details}
          <span className={styles.author}>{author}</span>
        </p>
        <Button
          buttonText='READ STORY'
          linkTo='/'
          buttonStyle='white'
        />
      </section>
    </section>
  )
}

export default FeaturedStory
