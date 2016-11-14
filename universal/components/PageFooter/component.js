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
	    <div className={styles.container}>
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
	        {quote.map((paragraph, index) => <p className={styles.quote} key={index}>{quote}</p>)}
	        <cite>{citation}</cite>
	      </section>
	    	<section className={styles.socialColumn}>
		      <div className={styles.heading}>
		      	{heading2}
		      </div>		      
		      <div className={styles.socialIcons}>
		      	<Link to='#'>
		      		<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="8.219" height="17.88" viewBox="0 0 8.219 17.88" fill="#838d8f">
		      			<title>Facebook Icon</title>
							  <path id="Facebook_Icon" data-name="Facebook Icon" class="cls-1" d="M875.22,4860.91h-2.8v-1.86a0.755,0.755,0,0,1,.778-0.86h1.975v-3.06l-2.72-.01a3.466,3.466,0,0,0-3.708,3.75v2.04H867v3.16h1.746V4873h3.675v-8.93H874.9Z" transform="translate(-867 -4855.12)"/>
							</svg>
            </Link>
            <Link to='#'>
		      		<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="21.876" height="15.66" viewBox="0 0 21.876 15.66" fill="#838d8f">
		      			<title>Twitter Icon</title>
							  <path id="Twitter_Icon" data-name="Twitter Icon" class="cls-1" d="M919.559,4858.81a0.1,0.1,0,0,1-.041-0.03,3.867,3.867,0,0,0-2.886-1.06l-0.033-.08a0.02,0.02,0,0,1,.02-0.01,3.406,3.406,0,0,0,1.773-.7,0.239,0.239,0,0,0-.232-0.35,6.25,6.25,0,0,0-1.384.33c0.526-.33.73-0.56,0.614-0.68a2.786,2.786,0,0,0-1.665.79,0.891,0.891,0,0,0,.246-0.6,4.59,4.59,0,0,0-.736.61,10.783,10.783,0,0,0-1.071,1.34l-0.014.03a11.771,11.771,0,0,0-1.487,3.37l-0.109.09-0.02.02a5.47,5.47,0,0,0-1.535-1.3,17.7,17.7,0,0,0-2.524-1.31,22.725,22.725,0,0,0-3.212-1.32,3.137,3.137,0,0,0,1.767,2.82v0.02a3.765,3.765,0,0,0-1.208.17q0.113,1.65,2.388,2.28l-0.008.02a1.741,1.741,0,0,0-1.466.59,2.645,2.645,0,0,0,2.654,1.37,1.645,1.645,0,0,0-.58.42,0.855,0.855,0,0,0-.232.84,1.477,1.477,0,0,0,1.487.67h0l0.04,0.05a0.041,0.041,0,0,0-.02.02,5.561,5.561,0,0,1-4.522,1.71l-0.027.01a5.756,5.756,0,0,1-3.478-1.52,10.752,10.752,0,0,0,4.979,3.84,12.1,12.1,0,0,0,7.072.16h0.041a11.192,11.192,0,0,0,5.817-3.96,7.923,7.923,0,0,0,1.385-3.01,2.888,2.888,0,0,0,2.585-1.01l-0.013-.02a5.253,5.253,0,0,1-2.326-.13v-0.13c0-.01,0-0.01.007,0,1.262-.14,2-0.54,2.244-1.2a3.555,3.555,0,0,1-2.606.03A5.464,5.464,0,0,0,919.559,4858.81Z" transform="translate(-902.062 -4856.22)"/>
							</svg>
            </Link>
            <Link to='#'>
		      		<img className={styles.icon} src="./assets/InstagramIcon.png" alt="Instagram Icon" />
            </Link>
            <Link to='#'>		      		
							<img className={styles.icon} src="./assets/MediumIcon.png" alt="Medium Icon" />
            </Link>
            <div className={styles.logo}>
			      	<img src={logoFooter} className={styles.logo} alt='Thrive Global' />
			      </div>
		      </div>
	    	</section>
	    	<section className={styles.copyright}>
	    		<p>Thrive Global © 2016</p>
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
