/* @flow */
// Site Header
import React from 'react'
import { linkToShopify } from 'lib/sso'

import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/thriveLogo.png'

class Header extends React.Component {
  toggleActive: Function;
  state = {
    active: false
  }
  constructor () {
    super(...arguments)

    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive () {
    this.setState({active: !this.state.active})
  }

  render () {
    const { active } = this.state

    const siteHeaderStyle = !active ? styles.siteHeader : styles.siteHeaderActive

    return (
      <header id='header' role='banner' className={siteHeaderStyle}>

        <figure className={styles.brand}>
          <IndexLink id='linkHome' to='/'>
            <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
          </IndexLink>
        </figure>

        <section className={styles.navContainer}>
          <nav role='navigation' className={styles.mainNav}>
            <Link id='navEngage' to='/engage' className={styles.link} activeClassName={styles.activeRoute}>
              Engage
            </Link>
            <Link id='navLearn' to='/learn' className={styles.link} activeClassName={styles.activeRoute}>
              Learn
            </Link>
            <Link
              id='navShop'
              className={styles.link}
              onClick={linkToShopify}
              activeClassName={styles.activeRoute}>
              Shop
            </Link>
            <Link id='navGive' to='javascript:void(0)' className={styles.link} activeClassName={styles.activeRoute}>
              Give
            </Link>
            <Link id='navThrive' to='/thrive' className={styles.link} activeClassName={styles.activeRoute}>
              Thrive
            </Link>
          </nav>

          <nav role='navigation' className={styles.utilityNav}>
            <Link id='navSignUp' to='/signup' className={styles.linkUtility} activeClassName={styles.activeRoute}>
              Sign Up
            </Link>
            <Link id='navLogin' to='/login' className={styles.linkUtility} activeClassName={styles.activeRoute}>
              Log In
            </Link>
            <a className={styles.search} href='javascript:void'>
              <svg className={styles.searchIcon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
                <title>Search</title>
                <path className={styles.search} d='M31.4,28.6l-5.07-5.07A9.84,9.84,0,0,0,28,18,10,10,0,1,0,
                18,28a9.84,9.84,0,0,0,5.53-1.67L28.6,31.4a2,2,0,0,0,2.8-2.8ZM18,
                24.07A6.07,6.07,0,1,1,24.07,18,6.09,6.09,0,0,1,18,24.07Z' />
              </svg>
            </a>
          </nav>
        </section>

        <span className={styles.menuButton} onClick={this.toggleActive}>
          <svg className={styles.button} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
            <title>Open/Close Menu</title>
            <path className={styles.topLine} d='M32,11.75H8A1.88,1.88,0,0,1,8,8H32a1.88,1.88,0,0,1,0,3.75Z' />
            <path className={styles.middleLine} d='M32,21.88H8a1.88,1.88,0,0,1,0-3.75H32a1.88,1.88,0,0,1,0,3.75Z' />
            <path className={styles.bottomLine} d='M32,32H8a1.88,1.88,0,0,1,0-3.75H32A1.88,1.88,0,0,1,32,32Z' />
          </svg>
        </span>

      </header>
    )
  }
}

export default Header
