/* @flow */
import React from 'react'
import logo from './assets/logo-footer.png'
import { Link } from 'react-router'
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

const logoFooter = logo

const PageFooter = ({
	quote = footerQuote,
  citation = '- Carl Sandburg',
	heading = 'Links',
	heading2 = 'Follow Us',
	logoFooter = logo
}: Props) => {
  return (
    <section className={styles.footer}>
	    <div className={styles.footerContainer}>
	    	<section className={styles.linksColumn}>
		      <div className={styles.heading}>
		      	{heading}
		      </div>
		      <ul>
		      	<li className={styles.footerLinks}>
		          <Link to='/'>Press</Link>
		      	</li>
		      	<li className={styles.footerLinks}>
		          <Link to='/'>Become a Contributor</Link>
		      	</li>
		      	<li className={styles.footerLinks}>
		          <Link to='/'>Advertise</Link>
		      	</li>
		      	<li className={styles.footerLinks}>
		          <Link to='/'>Careers</Link>
		      	</li>
		      	<li className={styles.footerLinks}>
		          <Link to='/'>Site Map</Link>
		      	</li>
		      	<li className={styles.footerLinks}>
		          <Link to='/'>Contact</Link>
		      	</li>
		      </ul>
	    	</section>
	    	<section className={styles.footerQuote}>
	        {quote.map((paragraph, index) => <p key={index}>{quote}</p>)}
	        <cite>{citation}</cite>
	      </section>
	    	<section className={styles.socialColumn}>
		      <div className={styles.heading}>
		      	{heading2}
		      </div>
		      <div className={styles.logo}>
		      	{logoFooter}
		      </div>
	    	</section>
	    	<section className={styles.copyright}>
	    		Thrive Global © 2016  |
	    		<Link to='/' className={styles.link}>
	        	Privacy
	        </Link> &
					<Link to='/' className={styles.link}>
	        	Terms
	        </Link>
	    	</section>
	    </div>
	  </section>
  )
}

export default PageFooter
