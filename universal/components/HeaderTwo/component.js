/* @flow */
// Site Header
import React from 'react'
import { deleteSession } from 'modules/UserSession'
import { IndexLink, Link } from 'react-router'
import { NavButton } from './svg.js'

import styles from './styles'

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

    this.state = {}
    this.state.dropped = false
    this.state.dropped2 = false


    this.drop = this.drop.bind(this)
    this.drop2 = this.drop2.bind(this)

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

    const droppedStyle4 = {paddingBottom: 180}
    const droppedStyle3 = {paddingBottom: 140}

    return (
      <div>
        <figure className={styles.brand}>
          <IndexLink
            onClick={this.hideMenu}
            id='linkHome'
            to='/'
          >
            <div className={styles.logo}/>
          </IndexLink>
        </figure>

        <section className={styles.navContainer}>
          <nav role='navigation' >
            <Link
              id="navQuote"
              to="/quote"
              className={styles.linkUtility}
              activeClassName={styles.activeRoute}
            >
              Get A Quote
            </Link>

            <div className={styles.dropdown+' '+styles.linkUtility}
              onClick={this.drop}
              style={this.state.dropped ? droppedStyle3 : {}}
            >
              <section >Work With Us</section>
              {this.renderDropdown([
                {label: 'Employees', url: '/employees'},
                {label: 'Employers', url: '/employers'},
                {label: 'Brokers', url: '/brokers'}
              ])}
            </div>
            <div className={styles.dropdown+' '+styles.linkUtility}
              onClick={this.drop2}
              style={this.state.dropped2 ? droppedStyle4 : {}}
            >
              <section >Company</section>
              {this.renderDropdown([
                {label: 'About', url: '/about'},
                {label: 'FAQs', url: '/faqs'},
                {label: 'Partnerships', url: '/partnerships'},
                {label: 'Contact Us', url: '/contactus'}
              ], true)}
            </div>
            {this.renderSignupOrProfile()}
            {this.renderLoginLogout()}
          </nav>
        </section>
      </div>
    )
  }

  renderDropdown (links, isSecondMenu) {
    if (isSecondMenu && !this.state.dropped2) return ''
    if (!isSecondMenu && !this.state.dropped) return ''
    return links.map((l, i)=>{
      const dist = 20+40*i
      return <Link key={i}
        onClick={this.hideMenu}
        id={`nav${i}`}
        to={l.url}
        className={styles.dropdownContent}
        style={{marginTop: dist}}>
        {l.label}
      </Link>
    })
  }

  render () {
    const { active } = this.state
    const siteHeaderStyle = !active ? styles.siteHeader : styles.siteHeaderActive
    return (
      <header id='header' role='banner' className={siteHeaderStyle}>
        {this.renderNav()}
        <div className={styles.separator} />
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

  drop () {
    this.setState({dropped: !this.state.dropped, dropped2: false})
  }
  drop2 () {
    this.setState({dropped2: !this.state.dropped2, dropped: false})
  }
}

export default Header
