// Site Header
import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/mark-color.png'

export const Header = () => (
  <header role='banner' id='header' className={styles.container}>

    <span className={styles.thriveLogo}>
      <IndexLink id='navLinkToHome' to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </IndexLink>
    </span>

    <nav role='navigation' className={styles.mainNav}>
      <Link id='navLearn' to='/engage' className={styles.link} activeClassName={styles.activeRoute}>
        Engage
      </Link>
      <Link id='navLearn' to='/learn' className={styles.link} activeClassName={styles.activeRoute}>
        Learn
      </Link>
      <a id='navShop' href='http://shop.thriveglobal.com' className={styles.link}>
        Shop
      </a>
      <Link id='navContribute' to='javascript:void(0)' className={styles.link} activeClassName={styles.activeRoute}>
        Give
      </Link>
      <Link id='navThrive' to='/thrive' className={styles.link} activeClassName={styles.activeRoute}>
        Thrive
      </Link>
    </nav>

    <nav role='navigation' className={styles.utilityNav}>
      <section>
        <Link id='navSignUp' to='/signup' className={styles.linkUtility} activeClassName={styles.activeRoute}>
          Sign Up
        </Link>
        <Link to='javascript:void(0)' className={styles.linkUtility} activeClassName={styles.activeRoute}>
          Search
        </Link>
      </section>
    </nav>

  </header>
)

export default Header
