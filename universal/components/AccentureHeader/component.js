import React from 'react'
import styles from 'components/Header/styles'
import { Header as SuperHeader } from 'components/Header/component'
import { NavButton } from 'components/Header/svg.js'

type Props = {
  bigHeader: boolean,
  isLoggedIn: boolean,
  dispatch: Function,
  pathname: any
}

export class AccentureHeader extends SuperHeader {
  props: Props
  state = {
    active: false
  }

  render () {
    const { active } = this.state
    const siteHeaderStyle = !active ? styles.siteHeader : styles.siteHeaderActive
    return (
      <header id='accenture_header' role='banner' className={siteHeaderStyle}>
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

export default AccentureHeader
