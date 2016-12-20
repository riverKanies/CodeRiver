/* @flow */
// Site Header
import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from 'modules/UserSession/selectors'
import { deleteSession } from 'modules/UserSession'
import { IndexLink, Link } from 'react-router'
import MainNav from './MainNav/component.js'
import { ThriveLogo, NavButton } from './svg.js'

import styles from './styles'

type Props = {
  bigHeader: boolean,
  isLoggedIn: boolean,
  dispatch: Function,
  pathname: string
}

export class Header extends React.Component {
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
  }

  logOutUser () {
    this.hideMenu()
    this.props.dispatch(deleteSession())
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
          id='navProfile'
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
          id='navLogout'
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

  renderBigHeader () {
    if (!this.props.pathname) {
      return false
    }

    const bigRoutes = ['/', '/home']

    return bigRoutes.includes(this.props.pathname.toLowerCase())
  }

  renderNav () {
    const bigHeader = this.renderBigHeader()
    if (!bigHeader) {
      return (
        <div className={styles.default} id='littleHeader'>
          <figure className={styles.brand}>
            <IndexLink
              onClick={this.hideMenu}
              id='linkHome'
              to='/'
            >
              <ThriveLogo />
            </IndexLink>
          </figure>
          <section className={styles.navContainer}>
            <MainNav
              hideMenu={this.hideMenu}
            />
            <nav role='navigation' className={styles.utilityNav}>
              {this.renderSignupOrProfile()}
              {this.renderLoginLogout()}
            </nav>
          </section>
        </div>
      )
    }

    return (
      <div className={styles.hasForehead} id='bigHeader'>
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
          <MainNav hideMenu={this.hideMenu} />
          <nav role='navigation' className={styles.utilityNav}>
            {this.renderSignupOrProfile()}
            {this.renderLoginLogout()}
          </nav>
        </section>
      </div>
    )
  }

  render () {
    const { active } = this.state
    const siteHeaderStyle = !active ? styles.siteHeader : styles.siteHeaderActive
    return (
      <header id='header' role='banner' className={siteHeaderStyle}>
        {this.renderNav()}
        <span
          id='navButtonWrapper'
          className={styles.menuButton}
          onClick={this.toggleActive}
        >
          <NavButton />
        </span>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  const loggedInSelector = isLoggedIn(state)
  const location = state.location
  console
  return {
    ...loggedInSelector,
    pathname: location.pathname
  }
}

export default connect(mapStateToProps)(Header)
