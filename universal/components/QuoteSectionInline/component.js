/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'white' | 'gray' | 'purple' | 'pattern',
  textAlign: 'textLeft' | 'textCenter' | 'textRight',
  quote: Array<string>,
  citation: string
};

const QuoteSectionInline = ({
  bgColor = 'default',
  textAlign = 'textCenter',
  quote,
  citation
}: Props) => {
  return (
    <section className={`${styles[bgColor]} quoteSectionInline`}>
      <div className={styles.container}>
        <section className={styles[textAlign]}>
          <q className={styles.quote}>{quote}</q>
          <cite className={styles.citation}>{citation}</cite>
        </section>
      </div>
    </section>
  )
}

export default QuoteSectionInline
