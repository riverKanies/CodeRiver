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
  heading: string,
  heading2: string,
  logoFooter: Array
};

const footerQuote = [`Time is the most valuable coin in your life.
You and you alone will determine how that coin will be spent.
Be careful that you do not let other people spend it for you.`]

// const logoFooter = logo

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
            <Link to='https://www.facebook.com/AriannaHuffington/'>
              <svg className={styles.icon} xmlns='http://www.w3.org/2000/svg'
                width='8.219' height='17.88' viewBox='0 0 8.219 17.88' fill='#838d8f'>
                <title>Facebook Icon</title>
                <path id='Facebook_Icon' data-name='Facebook Icon'
                  className='cls-1' d='M875.22,4860.91h-2.8v-1.86a0.755,0.755,0,0,1,.778-0.86h1.975v-
                  3.06l-2.72-.01a3.466,3.466,0,0,0-3.708,3.75v2.04H867v3.16h1.746V4873h3.675v-8.93H874.9Z'
                  transform='translate(-867 -4855.12)' />
              </svg>
            </Link>
            <Link to='https://twitter.com/ariannahuff'>
              <svg className={styles.icon} xmlns='http://www.w3.org/2000/svg'
                width='21.876' height='15.66' viewBox='0 0 21.876 15.66' fill='#838d8f'>
                <title>Twitter Icon</title>
                <path id='Twitter_Icon' data-name='Twitter Icon'
                  className='cls-1' d='M919.559,4858.81a0.1,0.1,0,0,1-.041-0.03,3.867,3.867,0,0,
                  0-2.886-1.06l-0.033-.08a0.02,0.02,0,0,1,.02-0.01,3.406,3.406,0,0,0,1.773-.7,
                  0.239,0.239,0,0,0-.232-0.35,6.25,6.25,0,0,0-1.384.33c0.526-.33.73-0.56,0.614-0.68a2.786,
                  2.786,0,0,0-1.665.79,0.891,0.891,0,0,0,.246-0.6,4.59,4.59,0,0,0-.736.61,10.783,10.783,0,0,
                  0-1.071,1.34l-0.014.03a11.771,11.771,0,0,0-1.487,3.37l-0.109.09-0.02.02a5.47,5.47,0,0,
                  0-1.535-1.3,17.7,17.7,0,0,0-2.524-1.31,22.725,22.725,0,0,0-3.212-1.32,3.137,3.137,0,0,
                  0,1.767,2.82v0.02a3.765,3.765,0,0,0-1.208.17q0.113,1.65,2.388,2.28l-0.008.02a1.741,1.741,
                  0,0,0-1.466.59,2.645,2.645,0,0,0,2.654,1.37,1.645,1.645,0,0,0-.58.42,0.855,0.855,0,0,
                  0-.232.84,1.477,1.477,0,0,0,1.487.67h0l0.04,0.05a0.041,0.041,0,0,0-.02.02,5.561,5.561,
                  0,0,1-4.522,1.71l-0.027.01a5.756,5.756,0,0,1-3.478-1.52,10.752,10.752,0,0,0,4.979,3.84,
                  12.1,12.1,0,0,0,7.072.16h0.041a11.192,11.192,0,0,0,5.817-3.96,7.923,7.923,0,0,0,
                  1.385-3.01,2.888,2.888,0,0,0,2.585-1.01l-0.013-.02a5.253,5.253,0,0,1-2.326-.13v-0.13c0-.01,
                  0-0.01.007,0,1.262-.14,2-0.54,2.244-1.2a3.555,3.555,0,0,1-2.606.03A5.464,5.464,0,0,0,
                  919.559,4858.81Z' transform='translate(-902.062 -4856.22)' />
              </svg>
            </Link>
            <Link to='https://www.instagram.com/ariannahuff/?hl=en'>
              <svg className={styles.icon} version='1.1' xmlns='http://www.w3.org/2000/svg'
                width='20' height='20' viewBox='0 0 32 32' fill='#838d8f'>
                <title>Instagram Icon</title>
                <path d='M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744
                  0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412
                  0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331
                  2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563
                  0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-
                  1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-
                  1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781
                  0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563
                  1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16
                  0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837
                  1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094
                  2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95
                  1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075
                  2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406
                  1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706
                  0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-
                  0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-
                  1.712-0.081-2.256-0.1-6.6-0.1v0z' />
                <path d='M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-
                  8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331
                  5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z' />
                <path d='M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919
                  1.919-1.919s1.919 0.859 1.919 1.919z' />
              </svg>
            </Link>
            <Link to='https://medium.com/@ariannahuff'>
              <svg className={styles.icon} version='1.1' xmlns='http://www.w3.org/2000/svg' width='20' height='20'
                viewBox='0 0 28 28' fill='#838d8f'>
                <title>Medium Icon</title>
                <path d='M9.328 6.578v18.328c0 0.484-0.234 0.938-0.766 0.938-0.187 0-0.359-0.047-0.516-0.125l-7.266-
                  3.641c-0.438-0.219-0.781-0.781-0.781-1.25v-17.813c0-0.391 0.187-0.75 0.609-0.75 0.25 0 0.469 0.125
                  0.688 0.234l7.984 4c0.016 0.016 0.047 0.063 0.047 0.078zM10.328 8.156l8.344 13.531-8.344-4.156v-
                  9.375zM28 8.437v16.469c0 0.516-0.297 0.875-0.812 0.875-0.266 0-0.516-0.078-0.734-0.203l-6.891-
                  3.437zM27.953 6.563c0 0.063-8.078 13.172-8.703 14.172l-6.094-9.906 5.063-8.234c0.172-0.281 0.484-
                  0.438 0.812-0.438 0.141 0 0.281 0.031 0.406 0.094l8.453 4.219c0.031 0.016 0.063 0.047 0.063 0.094z' />
              </svg>
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
          </Link>
          &
          <Link to='/' className={styles.link}>
          Terms
         </Link>
        </section>
      </div>
    </section>
  )
}

export default PageFooter
