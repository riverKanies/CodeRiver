/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  quote: string,
  citation: string,
  quote: Array<string>,
  heading: string
};

const footerQuote = [`Time is the most valuable coin in your life. 
You and you alone will determine how that coin will be spent.
Be careful that you do not let other people spend it for you.`]

const PageFooter = ({
	quote = footerQuote,
  citation = 'Carl Sandburg',
	heading = 'Links',
	heading2 = 'Follow Us'
}: Props) => {
  return (
    <div className={styles.container}>
      <section className={styles.quoteContainer}>
	      <div className={styles.container}>
	        <section className={styles.footerQuote}>
	          {quote.map((paragraph, index) => <p key={index}>{quote}</p>)}
	          <cite>{citation}</cite>
	        </section>
	      </div>
    	</section>
    	<section className={styles.linksContainer}>
	      <div className={styles.heading}>
	      	{heading}
	      </div>
	      <ul>
	      	<li className={styles.footerLinks}>
	          Press
	      	</li>
	      </ul>
    	</section>
    	<section className={styles.socialContainer}>
	      <div className={styles.heading}>
	      	{heading2}
	      </div>
    	</section>
    </div>
  )
}

export default PageFooter
