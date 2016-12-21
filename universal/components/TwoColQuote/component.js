/* @flow */
import React from 'react'
import styles from './styles'

type QuoteProps = {
  byElement: 'showBy' | 'hideBy',
  quoteFont: 'Mon' | 'Playfair',
  quote: string,
  quoteURL: string,
  citation: any
}

type Props = {
  bgColor: 'default' | 'white' | 'gray' | 'purple' | 'pattern',
  byElement: 'showBy' | 'hideBy',
  quoteFont: 'Mon' | 'Playfair',
  quote: string,
  quote2: string,
  citation: any,
  citation2: any,
  isLink: boolean,
  quoteURL: string,
  quoteURL2: string,
};

const defaultQuote = `Intention is one of the most powerful forces there is.
  What you mean when you do a thing will always determine the outcome.`

function renderQuote ({
  quoteFont,
  quoteURL,
  quote,
  byElement,
  citation
}: QuoteProps) {
  return (
    <section className={`${styles.quoteSection} quoteSection`}>
      <section className={styles[quoteFont]}>
        <q className={styles.quote}>
          <a href={quoteURL} target='_blank'>{quote}</a>
        </q>
        <cite className={styles.citation}>
          <p className={styles[byElement]}>{citation}</p>
        </cite>
      </section>
    </section>
  )
}

const TwoColQuote = ({
  bgColor = 'default',
  byElement = 'showBy',
  quote = defaultQuote,
  quote2 = defaultQuote,
  quoteFont = 'Mon',
  citation = 'Citation',
  citation2 = 'Citation2',
  quoteURL = 'https://journal.thriveglobal.com',
  quoteURL2 = 'https://journal.thriveglobal.com'
}: Props) => {
  const q1 = { quoteFont, quoteURL, quote, byElement, citation }

  const q2 = {
    ...q1,
    quoteURL: quoteURL2,
    quote: quote2,
    citation: citation2
  }

  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        {renderQuote(q1)}
        {renderQuote(q2)}
      </div>
    </section>
  )
}

export default TwoColQuote
