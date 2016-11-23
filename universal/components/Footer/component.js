/* @flow */
import React from 'react'
import EmailCapture from 'components/EmailCapture'
import logo from './assets/logo-footer.png'
import { Link } from 'react-router'
import styles from './styles'

import { Facebook, Twitter, Medium, Instagram } from './svg.js'

type Props = {
  title: string,
  quote: string,
  citation: string,
  quote: Array<string>,
  heading: string,
  heading2: string,
  logoFooter: any
};

const footerQuote = [`People look for retreats for themselves,
                      in the country, by the coast, or in the hills . . .
                      There is nowhere that a person can find a more peaceful
                      and trouble-free retreat than in his own mind. . . .
                      So constantly give yourself this retreat, and renew yourself.`]

// const logoFooter = logo

const Footer = ({
  quote = footerQuote,
  citation = '— Marcus Aurelius',
  heading = 'Links',
  heading2 = 'Follow Us',
  logoFooter = logo
}: Props) => {
  return (
    <footer className={styles.footer}>
      <EmailCapture />
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
              <Link to='/apps'>Apps</Link>
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
            <Link to='https://www.facebook.com/AriannaHuffington/'>
              <Facebook />
            </Link>
            <Link to='https://www.facebook.com/AriannaHuffington/'>
              <Twitter />
            </Link>
            <Link to='https://www.facebook.com/AriannaHuffington/'>
              <Instagram />
            </Link>
            <Link to='https://www.facebook.com/AriannaHuffington/'>
              <Medium />
            </Link>
          </div>
          <img src={logoFooter} className={styles.logo} alt='Thrive Global' />
        </section>
        <section className={styles.copyright}>
          <p>Thrive Global © 2016</p>
          <Link to='/' className={styles.link}>
            Privacy
          </Link>
          <p>&</p>
          <Link to='/' className={styles.link}>
            Terms
          </Link>
        </section>
      </div>
    </footer>
  )
}

export default Footer
