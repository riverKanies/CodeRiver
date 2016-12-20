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

const footerQuote = [
  `People look for retreats for themselves,
  in the country, by the coast, or in the hills . . .
  There is nowhere that a person can find a more peaceful
  and trouble-free retreat than in his own mind. . . .
  So constantly give yourself this retreat, and renew yourself.`
]

function genLink(path: string, text: string) {
  if (path.match('#')) {
    return (
      <li className={styles.footerLinks}>
        <a href={path}>{text}</a>
      </li>
    )
  }
  return (
    <li className={styles.footerLinks}>
      <Link to={path}>{text}</Link>
    </li>
  )
}

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
        <section className={styles.footerTop}>
          <img src={logoFooter} className={styles.logo} alt='Thrive Global' />
          <section className={styles.footerQuote}>
            {quote.map((paragraph, index) => <p className={styles.quote} key={index}>{quote}</p>)}
            <cite>{citation}</cite>
          </section>
          <section className={styles.social}>
            <div className={styles.socialIcons}>
              <a href='https://www.facebook.com/thriveglbl/' target='_blank'>
                <Facebook />
              </a>
              <a href='https://twitter.com/thrive' target='_blank'>
                <Twitter />
              </a>
              <a href='https://www.instagram.com/thrive/' target='_blank'>
                <Instagram />
              </a>
              <a href='https://journal.thriveglobal.com/@thriveglobal' target='_blank'>
                <Medium />
              </a>
            </div>
          </section>
        </section>
        <section className={styles.footerBottom}>
          <section className={styles.copyright}>
            <p>Thrive Global © 2016</p>
            <Link to='/thrive/privacy' className={styles.link}>
              Privacy
            </Link>
            <p className={styles.ampersand}>&</p>
            <Link to='/thrive/terms' className={styles.link}>
              Terms
            </Link>
          </section>
          <div className={styles.heading}>
            {heading}
          </div>
          <ul className={styles.list} id='footerLinks'>
            {genLink('/about', 'About Us')}
            {genLink('/who-we-are#careers', 'Careers')}
            {genLink('/who-we-are#contact', 'Contact')}
            {genLink('/about/corporate', 'Partnerships - Corporate')}
            {genLink('/about/content', 'Partnerships - Media')}
            {genLink('/about/commerce', 'Partnerships - Commerce')}
            {genLink('/popup', 'Pop-up Store')}
            {genLink('/press', 'Press')}
            {genLink('/team', 'Team')}
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer
