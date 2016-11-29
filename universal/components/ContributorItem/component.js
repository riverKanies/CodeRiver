/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  author: string,
  details: string,
  title: string
}

const defaultDetails = 'this the details Cras justo odio, dapibus ac' +
' facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.'

const defaultTitle = "Become A Contributor"

const defaultAuthor = 'Koby Bryant'

const FeaturedStory = ({
  title = defaultTitle,
  author = defaultAuthor,
  details = defaultDetails
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.details}>
          {details}
        </p>
        <Button
          buttonText='Contribute'
          linkTo='/'
          buttonStyle='white'
        />
      </section>
    </section>
  )
}

export default FeaturedStory
