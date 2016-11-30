/* @flow */
// Site Header
import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from 'modules/UserSession/selectors'
import { deleteSession } from 'modules/UserSession'
import { redirectToShopify } from 'lib/sso'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/thriveLogo.svg'

type Props = {
  isLoggedIn: boolean,
  dispatch: Function
}

class Header extends React.Component {
  toggleActive: Function;
  redirectToShopify: Function;
  hideMenu: Function;
  logOutUser: Function;

  props: Props
  state = {
    active: false
  }
  constructor () {
    super(...arguments)

    this.toggleActive = this.toggleActive.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.logOutUser = this.logOutUser.bind(this)
    this.redirectToShopify = this.redirectToShopify.bind(this)
  }

  logOutUser () {
    this.hideMenu()
    this.props.dispatch(deleteSession())
  }

  redirectToShopify () {
    this.hideMenu()
    redirectToShopify()
  }

  hideMenu () {
    this.setState({active: false})
  }

  toggleActive () {
    this.setState({active: !this.state.active})
  }

  renderSignupOrProfile () {
    const { isLoggedIn } = this.props

    if (isLoggedIn) {
      return (
        <Link
          id='navSignUp'
          onClick={this.hideMenu}
          to='/profile'
          className={styles.linkUtility}
          activeClassName={styles.activeRoute}
        >
          Profile
        </Link>
      )
    }

    return (
      <Link
        id='navSignUp'
        onClick={this.hideMenu}
        to='/signup'
        className={styles.linkUtility}
        activeClassName={styles.activeRoute}
      >
        Sign Up
      </Link>
    )
  }

  renderLoginLogout () {
    const { isLoggedIn } = this.props

    if (isLoggedIn) {
      return (
        <Link
          activeClassName={styles.activeRoute}
          className={styles.linkUtility}
          id='navLogin'
          onClick={this.logOutUser}
          to='/'
        >
          Log Out
        </Link>
      )
    }

    return (
      <Link
        onClick={this.hideMenu}
        id='navLogin'
        to='/login'
        className={styles.linkUtility}
        activeClassName={styles.activeRoute}
      >
        Log In
      </Link>
    )
  }

  render () {
    const { active } = this.state

    const siteHeaderStyle = !active ? styles.siteHeader : styles.siteHeaderActive

    return (
      <header id='header' role='banner' className={siteHeaderStyle}>

        <section className={styles.forehead}>
          <figure className={styles.brand}>
            <IndexLink
              onClick={this.hideMenu}
              id='linkHome'
              to='/'
            >
              <img src={mark} className={styles.thriveLogo} alt='Thrive Global' />
            </IndexLink>
          </figure>
          <span className={styles.tagline}>More than living. Thriving.</span>
        </section>

        <section className={styles.navContainer}>
          <nav role='navigation' className={styles.mainNav}>
            <a
              className={styles.link}
              onClick={this.hideMenu}
              href='https://journal.thriveglobal.com/'
              target='_blank'
            >
              Journal
            </a>
            <Link
              onClick={this.hideMenu}
              id='navGrow'
              to='/grow'
              className={styles.link}
              activeClassName={styles.activeRoute}>
              Grow
            </Link>
            <Link
              id='navShop'
              className={styles.link}
              onClick={this.redirectToShopify}
              activeClassName={styles.activeRoute}
            >
              Shop
            </Link>
            <Link onClick={this.hideMenu}
              id='navGive'
              to='/give'
              className={styles.link}
              activeClassName={styles.activeRoute}>
              Give
            </Link>
            <Link onClick={this.hideMenu}
              id='navApps'
              to='/apps'
              className={styles.link}
              activeClassName={styles.activeRoute}>
              Apps
            </Link>
          </nav>

          <nav role='navigation' className={styles.utilityNav}>
            {this.renderSignupOrProfile()}
            {this.renderLoginLogout()}
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

export default connect(isLoggedIn)(Header)
