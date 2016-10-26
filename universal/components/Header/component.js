import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/mark-color.png'

export const Header = () => (
  <header role='banner' id='header' className={styles.container}>

    <span className={styles.thriveLogo}>
      <IndexLink to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </IndexLink>
    </span>

    <nav role='navigation' className={styles.utilityNav}>
      <section>
        <Link to='/signup' className={styles.linkUtility} activeClassName={styles.activeRoute}>
          Sign Up
        </Link>
        <Link to='javascript:void(0)' className={styles.linkUtility} activeClassName={styles.activeRoute}>
          Search
        </Link>
      </section>
    </nav>

    <nav role='navigation' className={styles.mainNav}>
      <Link id='navMedia' to='/media' className={styles.link} activeClassName={styles.activeRoute}>
        Media
      </Link>
      <Link id='navLearn' to='/learn' className={styles.link} activeClassName={styles.activeRoute}>
        Learn
      </Link>
      <Link id='navShop' to='http://shop.thriveglobal.com' className={styles.link} activeClassName={styles.activeRoute}>
        Shop
      </Link>
      <Link id='navThrive' to='/thrive' className={styles.link} activeClassName={styles.activeRoute}>
        Thrive
      </Link>
      <Link id='navContribute' to='javascript:void(0)' className={styles.link} activeClassName={styles.activeRoute}>
        Contribute
      </Link>
    </nav>

    <nav role='navigation' className={styles.socialNav}>
      <Link to='javascript:void(0)' className={styles.linkSocial}>
        Social
      </Link>
      <Link to='javascript:void(0)' className={styles.linkSocial}>
        Social
      </Link>
      <Link to='javascript:void(0)' className={styles.linkSocial}>
        Social
      </Link>
    </nav>

  </header>
)

export default Header
