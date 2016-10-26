import React from 'react'
import styles from './styles'
// Add in a default image

type Props = {
  quote: String,
  citation: String,
  quoteImage: Object,
};

const defaultQuote = [`What is a good life?” has been a question asked by
philosophers going back to the ancient Greeks. But somewhere along the line we
abandoned the question and shifted our attention to how much money we can make,
how big a house we can buy, and how high we can climb up the career ladder.
This idea of success can work-or at least appear to work – in the short term.
But over the long term, money and power by themselves are like a two-legged
stool – you can balance on them for a while, but eventually you’re going to
topple over. More and more people – very successful people – are toppling over.`]

const QuoteSection = ({quote = defaultQuote, citation = 'Arriana Huffington'}: Props) => {
  return (
    <section className={styles.quoteContainer}>
      <div className={styles.container}>
        <section className={styles.sectionQuote}>
          {quote.map((paragraph, index) => <p key={index}>{quote}</p>)}
          <cite>{citation}</cite>
        </section>
        <section className={styles.quoteImage}>
          <img src='{image}' />
        </section>
      </div>
    </section>
  )
}

export default QuoteSection
