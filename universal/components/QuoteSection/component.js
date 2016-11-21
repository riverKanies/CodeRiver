/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/quote_imagePlaceholder.png'

type Props = {
  bgColor: 'default' | 'white' | 'gray' | 'purple',
  quote: Array<string>,
  citation: string,
  quoteImage: string,
};

const defaultQuote = [
  `Intention is one of the most powerful forces there is.
  What you mean when you do a thing will always determine the outcome.`
]

const defaultImage = dummyImage

const QuoteSection = ({
  bgColor = 'default',
  quote = defaultQuote,
  citation = 'Arriana Huffington',
  quoteImage = defaultImage
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>

        <section className={styles.quoteImage}>
          <img className={styles.image} src={quoteImage} />
        </section>

        <section className={styles.quoteSection}>
          <q className={styles.quote}>
            {quote.map((paragraph, index) => <span key={index}>{quote}</span>)}
          </q>
          <cite className={styles.citation}>{citation}</cite>
        </section>

      </div>
    </section>
  )
}

export default QuoteSection
