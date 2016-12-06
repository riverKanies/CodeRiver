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
  quoteImage: any,
  isLink: boolean,
  quoteURL: string,
  hasImage: 'imageTrue' | 'imageFalse',
  imageShape: 'roundImage' | 'squareImage'
};

const defaultQuote = [
  `Intention is one of the most powerful forces there is.
  What you mean when you do a thing will always determine the outcome.`
]

const defaultImage = dummyImage

function Quote ({
  isLink,
  quote,
  quoteURL
}: { isLink: boolean, quote: Array<string>, quoteURL: string }) {
  if (isLink) {
    return (
      <q className={styles.quote}>
        <a href={quoteURL} target='_blank'>{quote.map((paragraph, index) => <span key={index}>{paragraph}</span>)}</a>
      </q>
    )
  }
  return (
    <q className={styles.quote}>
      {quote.map((paragraph, index) => <span key={index}>{paragraph}</span>)}
    </q>
  )
}

const QuoteSection = ({
  containerBorders = 'bordersFalse',
  bgColor = 'default',
  quote = defaultQuote,
  quoteFont = 'Mon',
  citation = 'Arriana Huffington',
  hasImage = 'imageTrue',
  quoteImage = defaultImage,
  imageShape = 'roundImage',
  isLink = false,
  quoteURL = 'https://journal.thriveglobal.com'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles[containerBorders]}>
        <section className={styles[hasImage]}>
          <img className={styles[imageShape]} src={quoteImage} />
        </section>
        <section className={styles.quoteSection}>
          <section className={styles[quoteFont]}>
            <Quote isLink={isLink} quote={quote} quoteURL={quoteURL} />
            <cite className={styles.citation}>{citation}</cite>
          </section>
        </section>
      </div>
    </section>
  )
}

export default QuoteSection
