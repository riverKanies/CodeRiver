/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/quote_imagePlaceholder.png'

type Props = {
  bgColor: 'default' | 'white' | 'gray' | 'purple' | 'pattern',
  containerBorders: 'bordersTrue' | 'bordersFalse',
  quoteFont: 'Mon' | 'Playfair',
  quote: Array<string>,
  citation: any,
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

// True/False Logic For Quote Link
function renderQuote ({
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

// True/False Logic For Quote image
function renderImg ({
  isLink,
  quoteURL,
  imageShape,
  quoteImage
}: { isLink: boolean, quoteURL: string, imageShape: string, quoteImage: string }) {
  if (isLink) {
    return (
      <a href={quoteURL}><img className={styles[imageShape]} src={quoteImage} /></a>
    )
  }
  return (
    <img className={styles[imageShape]} src={quoteImage} />
  )
}

// Render Citation Logic
function renderCitation (citation: any) {
  const paragraphs = Array.isArray(citation) ? citation : [citation]

  return (
    <cite className={styles.citation}>
      {
        paragraphs.map((paragraph, index) =>
          <p className={styles.citationLine} key={index}>{paragraph}</p>
      )}
    </cite>
  )
}

const QuoteSection = ({
  containerBorders = 'bordersFalse',
  bgColor = 'default',
  quote = defaultQuote,
  quoteFont = 'Mon',
  citation = 'Citation',
  hasImage = 'imageTrue',
  quoteImage = defaultImage,
  imageShape = 'roundImage',
  isLink = false,
  quoteURL = 'https://journal.thriveglobal.com'
}: Props) => {
  return (
    <section className={`${styles[bgColor]} quoteSection`}>
      <div className={styles[containerBorders]}>
        <section className={styles[hasImage]}>
          {renderImg({isLink, quoteURL, imageShape, quoteImage})}
        </section>
        <section className={styles.quoteSection}>
          <section className={styles[quoteFont]}>
            {renderQuote({isLink, quote, quoteURL})}
            {renderCitation(citation)}
          </section>
        </section>
      </div>
    </section>
  )
}

export default QuoteSection
