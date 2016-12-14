/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  author: string,
  quote: string,
}

function HeaderQuote ({ quote, author }: Props) {
  if ((!quote && !author) || (!quote && author)) return null
  if (quote && !author) {
    return (
      <div>
        <p className={styles.quote}>{quote}</p>
      </div>
    )
  }
  return (
    <div>
      <p className={styles.quote}>{quote}</p>
      <span className={styles.author}>{author}</span>
    </div>
  )
}

export default HeaderQuote
