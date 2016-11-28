/* @flow */
// Site Header
import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from 'modules/UserSession/selectors'
import { deleteSession } from 'modules/UserSession'
import { redirectToShopify } from 'lib/sso'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/thriveLogo.png'

type Props = {
  isLoggedIn: boolean,
  dispatch: Function
}

class Header extends React.Component {
  toggleActive: Function;
  logOutUser: Function;

  props: Props
  state = {
    active: false
  }
  constructor () {
    super(...arguments)

    this.toggleActive = this.toggleActive.bind(this)
    this.logOutUser = this.logOutUser.bind(this)
  }

  logOutUser () {
    this.props.dispatch(deleteSession())
  }

  toggleActive () {
    this.setState({active: !this.state.active})
  }

  renderSignupLink () {
    const { isLoggedIn } = this.props

    if (isLoggedIn) return null

    return (
      <Link id='navSignUp' to='/signup' className={styles.linkUtility} activeClassName={styles.activeRoute}>
        Sign Up
      </Link>
    )
  }

  renderLoginLogout () {
    const { isLoggedIn } = this.props

    if (isLoggedIn) {
      return (
        <Link
          id='navLogin'
          to='/'
          onClick={this.logOutUser}
          className={styles.linkUtility}
          activeClassName={styles.activeRoute}>
          Log Out
        </Link>
      )
    }

    return (
      <Link id='navLogin' to='/login' className={styles.linkUtility} activeClassName={styles.activeRoute}>
        Log In
      </Link>
    )
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
              onClick={redirectToShopify}
              activeClassName={styles.activeRoute}>
              Shop
            </Link>
            <Link id='navGive' to='/give' className={styles.link} activeClassName={styles.activeRoute}>
              Give
            </Link>
            <Link id='navThrive' to='/thrive' className={styles.link} activeClassName={styles.activeRoute}>
              Thrive
            </Link>
          </nav>

          <nav role='navigation' className={styles.utilityNav}>
            {this.renderSignupLink()}
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
