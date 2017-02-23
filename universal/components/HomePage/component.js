import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

import imageCity from './assets/city.jpg'
import imageClock from './assets/clock.png'
import imageComputer from './assets/computer.png'
import imageMail from './assets/mail.png'

class HomePage extends React.Component {
  render () {
    return (<div className={styles.container}>
      <div className={styles.city}>
        <h3 className={styles.subheader}>The best life insurance.</h3>
        <h1 className={styles.header}>Now for Everyone.</h1>
        <br/>
        <Link to='/quote' className={styles.link}>Get a Quote</Link>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon3}>
          <img src={imageComputer} />
          <p>Shop and apply for coverage online</p>
        </div>
        <div className={styles.icon3}>
          <img src={imageClock} />
          <p>85% of applicants approved within 48 hours</p>
        </div>
        <div className={styles.icon3}>
          <img src={imageMail} />
          <p>E-policy delivered to your inbox</p>
        </div>
      </div>
    </div>)
  }
}

export default HomePage
