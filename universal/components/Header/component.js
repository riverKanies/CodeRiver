/* @flow */
// Site Header
import React from 'react'
import { deleteSession } from 'modules/UserSession'
import { IndexLink, Link } from 'react-router'
import MainNav from './MainNav/component.js'
import { NavButton } from './svg.js'

import styles from './styles'
import logo from './PlanmadeLogo.png'

type Props = {
  isLoggedIn: boolean,
  dispatch: Function,
  pathname: any,
  children: any
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

  renderNav () {
    return (
      <div className={styles.hasForehead} id='bigHeader'>
        <section className={styles.forehead}>
          <figure className={styles.brand}>
            <IndexLink
              onClick={this.hideMenu}
              id='linkHome'
              to='/'
            >
              <img src={logo} className={styles.logo}/>
            </IndexLink>
          </figure>
          <span className={styles.tagline}>Need a Plan? We're here to help.</span>
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

export default Header
