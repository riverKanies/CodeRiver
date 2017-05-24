import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

export class Footer extends React.Component {
  render () {
    return (<div className={styles.footer}>
      <section className={styles.section}>
        <h3>More on CodeRiver</h3>
        <Link id='about' to='/about' className={styles.link}>About</Link>
      </section>
      <section className={styles.section}>
        <h3>Connect</h3>
        <a id='linkedin' href='https://www.linkedin.com/in/river-kanies-95706389' className={styles.link}>LinkedIn</a>
        <a id='github' href='https://github.com/riverKanies' className={styles.link}>GitHub</a>
      </section>
    </div>)
  }
}

export default Footer
