import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

export class Footer extends React.Component {
  render () {
    return (<div className={styles.footer}>
      <section className={styles.section}>
        <h3>More on CodeRiver</h3>
        <Link id='portfolio' to='/portfolio' className={styles.link}>Portfolio</Link>
        <Link id='pricing' to='/pricing' className={styles.link}>Pricing</Link>
        <Link id='home' to='/' className={styles.link}>Home</Link>
      </section>
      <section className={styles.section}>
        <h3>Connect</h3>
        <Link id='contact' to='/contact' className={styles.link}>Email</Link>
        <a id='linkedin' href='https://www.linkedin.com/in/river-kanies-95706389' className={styles.link}>LinkedIn</a>
        <a id='github' href='https://github.com/riverKanies' className={styles.link}>GitHub</a>
      </section>
    </div>)
  }
}

export default Footer
