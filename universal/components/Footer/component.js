import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

export class Footer extends React.Component {
  render () {
    return (<div className={styles.footer}>
      <section className={styles.section}>
        <h3>Footer Section 1</h3>
        <Link id='test1' to='/test1' className={styles.link}>testicular1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
      </section>
      <section className={styles.section}>
        <h3>Footer Section 2</h3>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>testastic1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
      </section>
      <section className={styles.section}>
        <h3>Footer Section 2</h3>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
        <Link id='test1' to='/test1' className={styles.link}>test1</Link>
      </section>
    </div>)
  }
}

export default Footer
