/* @flow */
import React from 'react'
import styles from './styles'

import mark from './assets/thriveLogo.svg'

type Props = {
  bgColor: 'default' | 'blue' | 'teal' | 'blurple',
  author: string,
  hasAuthor: 'authorTrue' | 'authorFalse',
  details: any,
  title: string,
  asset: string,
  logo: any,
}

const defaultDetails = 'this the details Cras justo odio, dapibus ac' +
' facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.'

const defaultTitle = "It's Time To Say Goodbye."

const defaultAuthor = 'Koby Bryant'

const JourneyHeader = ({
  bgColor = 'default',
  title = defaultTitle,
  hasAuthor = 'authorTrue',
  author = defaultAuthor,
  details = defaultDetails,
  logo = mark,
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <section className={styles.content}>
        <figure className={styles.brand}>
          <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
        </figure>
        <h2 className={styles.header}>{title}</h2>
        <div className={styles.divider} />
        <p className={styles.details}>
          {details}
          { author ? <span className={styles[hasAuthor]}>{author}</span> : '' }
        </p>
        />
      </section>
    </section>
  )
}

export default JourneyHeader
