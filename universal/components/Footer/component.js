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

function genLink (path: string, text: string) {
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
            <cite className={styles.cite}>{citation}</cite>
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
          <ul className={styles.list} id='footerLinks'>
            {genLink('/about', 'About Us')}
            {genLink('/careers', 'Careers')}
            {genLink('/contact', 'Contact')}
            {genLink('/about/corporate', 'Partnerships - Corporate')}
            {genLink('/about/content', 'Partnerships - Media')}
            {genLink('/about/commerce', 'Partnerships - Commerce')}
            {genLink('/press', 'Press')}
            {genLink('https://shop.thriveglobal.com/', 'Pop-up Store')}
            {genLink('/team', 'Team')}
            {genLink('/thrive/privacy', 'Privacy')}
            {genLink('/thrive/terms', 'Terms')}
          </ul>
          <div className={styles.copyright}>
            Thrive Global © 2016
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
