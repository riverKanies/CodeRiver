/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'white' | 'gray' | 'purple' | 'pattern',
  quoteFont: 'Mon' | 'Playfair',
  quote: string[],
  quote2: string[],
  citation: any,
  citation2: any,
  isLink: boolean,
  quoteURL: string,
  quoteURL2: string,
};

const defaultQuote = [
  `Intention is one of the most powerful forces there is.
  What you mean when you do a thing will always determine the outcome.`
]

const TwoColQuote = ({
  bgColor = 'default',
  quote = defaultQuote,
  quote2 = defaultQuote,
  quoteFont = 'Mon',
  citation = 'Citation',
  citation2 = 'Citation2',
  quoteURL = 'https://journal.thriveglobal.com',
  quoteURL2 = 'https://journal.thriveglobal.com'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <section className={`${styles.quoteSection} quoteSection`}>
          <section className={styles[quoteFont]}>
            <q className={styles.quote}>
              <a href={quoteURL} target='_blank'><span>{quote}</span></a>
            </q>
            <cite className={styles.citation}>
              <p className={styles.citationLine}>{citation}</p>
            </cite>
          </section>
        </section>
      </div>
      <div className={styles.container}>
        <section className={styles.quoteSection}>
          <section className={styles[quoteFont]}>
            <q className={styles.quote}>
              <a href={quoteURL2} target='_blank'><span>{quote2}</span></a>
            </q>
            <cite className={styles.citation}>
              <p className={styles.citationLine}>{citation2}</p>
            </cite>
          </section>
        </section>
      </div>
    </section>
  )
}

export default TwoColQuote
