import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

export class Footer extends React.Component {
  render () {
    return (<div className={styles.footer}>
      <section className={styles.section}>
        <h3>More on PlanMade</h3>
        <Link id='about' to='/about' className={styles.link}>About</Link>
        <Link id='privacy' to='/privacy' className={styles.link}>Privacy</Link>
        <Link id='terms' to='/terms' className={styles.link}>Terms</Link>
        <Link id='press' to='/press' className={styles.link}>Press</Link>
      </section>
      <section className={styles.section}>
        <h3>Resources</h3>
        <Link id='licences' to='/licences' className={styles.link}>Licences</Link>
        <Link id='blog' to='/blog' className={styles.link}>blog</Link>
      </section>
    </div>)
  }
}

export default Footer
