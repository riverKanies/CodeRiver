/* @flow */
import React from 'react'
import styles from './styles'
import logo from './assets/logo-footer.png'
import { Link } from 'react-router'

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

const logoFooter = logo

const PageFooter = ({
	quote = footerQuote,
  citation = '- Carl Sandburg',
	heading = 'Links',
	heading2 = 'Follow Us',
	logoFooter = logo
}: Props) => {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerQuote}>
        {quote.map((paragraph, index) => <p key={index}>{quote}</p>)}
        <cite>{citation}</cite>
      </section>
    	<section className={styles.linksContainer}>
	      <div className={styles.heading}>
	      	{heading}
	      </div>
	      <ul>
	      	<li className={styles.footerLinks}>
	          Press
	      	</li>
	      	<li className={styles.footerLinks}>
	          Become a Contributor
	      	</li>
	      	<li className={styles.footerLinks}>
	          Advertise
	      	</li>
	      	<li className={styles.footerLinks}>
	          Careers
	      	</li>
	      	<li className={styles.footerLinks}>
	          Site Map
	      	</li>
	      	<li className={styles.footerLinks}>
	          Contact
	      	</li>
	      </ul>
    	</section>
    	<section className={styles.socialContainer}>
	      <div className={styles.heading}>
	      	{heading2}
	      </div>
	      <div className={styles.logo}>
	      	{logoFooter}
	      </div>
    	</section>
    	<section className={styles.copyright}>
    		Thrive Global © 2016  |
    		<Link to='/privacy' className={styles.link}>
        	Privacy
        </Link> &
				<Link to='/terms' className={styles.link}>
        	Terms
        </Link>
    	</section>
    </div>
  )
}

export default PageFooter
