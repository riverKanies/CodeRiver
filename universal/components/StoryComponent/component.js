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

const defaultTitle = ['Its time to say goodbye']

const defaultAuthor = ['Koby Bryant']

const StoryComponent = ({
  title = defaultTitle,
  author = defaultAuthor,
  details = defaultDetails
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <label className={styles.label}>STORIES</label>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.details}>
          {details}
          <span className={styles.author}>by</span>
          {author}
        </p>
        <div className={styles.button}>
          <Button
            buttonText='READ STORY'
            linkTo='/'
            buttonStyle='white'
          />
        </div>
      </section>
    </section>
  )
}

export default StoryComponent
