/* @flow */
// Site Header
import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from 'modules/UserSession/selectors'
import { deleteSession } from 'modules/UserSession'
import { redirectToShopify } from 'lib/sso'
import { IndexLink, Link } from 'react-router'
import MainNav from './MainNav/component.js'
import { ThriveLogo, NavButton } from './svg.js'

import styles from './styles'

type Props = {
  bigHeader: boolean,
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
              <ThriveLogo />
            </IndexLink>
          </figure>
          <span className={styles.tagline}>More than living. Thriving.</span>
        </section>

        <section className={styles.navContainer}>

          <MainNav />

          <nav role='navigation' className={styles.utilityNav}>
            {this.renderSignupOrProfile()}
            {this.renderLoginLogout()}
          </nav>

        </section>

        <span className={styles.menuButton} onClick={this.toggleActive}>
          <NavButton />
        </span>

      </header>
    )
  }
}

export default connect(isLoggedIn)(Header)
