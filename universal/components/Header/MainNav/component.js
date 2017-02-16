/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from '../styles'

class MainNav extends React.Component {
  props: {
    hideMenu: Function
  }
  constructor () {
    super(...arguments)

    this.state = {}
    this.state.dropped = false

    this.drop = this.drop.bind(this)
  }

  componentDidUpdate () {
    const dd = document.getElementById('dropdown')
    if (dd) {
      console.log('add',)
      dd.classList.add(styles.dropdownContent)
    }
  }

  render () {
    console.log('drop', this.state.dropped)
    return (
      <nav role='navigation' className={styles.mainNav}>
        <Link onClick={this.props.hideMenu}
          id='navWelcome'
          to='/welcome'
          className={styles.link}
          activeClassName={styles.activeRoute}>
          Welcome
        </Link>
        <Link onClick={this.props.hideMenu}
          id='navAbout'
          to='/home'
          className={styles.link}
          activeClassName={styles.activeRoute}>
          Home
        </Link>
        <div className={styles.dropdown}>
          <button onClick={this.drop}>Drop It</button>
          {this.renderDropdown()}
        </div>
      </nav>
    )
  }

  drop () {
    this.setState({dropped: !this.state.dropped})
  }

  renderDropdown () {
    if (!this.state.dropped) return ''
    return (<div id='dropdown'>
      <p>
        HomeDrop
      </p>
    </div>)
  }
}

export default MainNav
