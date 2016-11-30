/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/quote_imagePlaceholder.png'

type Props = {
  bgColor: 'default' | 'white' | 'gray' | 'purple' | 'pattern',
  containerBorders: 'bordersTrue' | 'bordersFalse',
  quoteFont: 'Mon' | 'Playfair',
  quote: Array<string>,
  citation: string,
  hasImage: 'imageTrue' | 'imageFalse',
  quoteImage: any,
  imageShape: 'roundImage' | 'squareImage'
};

const defaultQuote = [
  `Intention is one of the most powerful forces there is.
  What you mean when you do a thing will always determine the outcome.`
]

const defaultImage = dummyImage

const QuoteSection = ({
  containerBorders = 'bordersFalse',
  bgColor = 'default',
  quote = defaultQuote,
  quoteFont = 'Mon',
  citation = 'Arriana Huffington',
  hasImage = 'imageTrue',
  quoteImage = defaultImage,
  imageShape = 'roundImage'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles[containerBorders]}>
        <section className={styles[hasImage]}>
          <img className={styles[imageShape]} src={quoteImage} />
        </section>
        <section className={styles.quoteSection}>
          <section className={styles[quoteFont]}>
            <q className={styles.quote}>
              {quote.map((paragraph, index) => <span key={index}>{quote}</span>)}
            </q>
            <cite className={styles.citation}>{citation}</cite>
          </section>
        </section>
      </div>
    </section>
  )
}

export default QuoteSection
