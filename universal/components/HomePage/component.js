import React from 'react'
import { Link } from 'react-router'

import styles from './styles'
import buttonStyles from 'styles/content.css'

import imageIdea from './assets/idea.png'
import imageDecision from './assets/decision.png'
import imageApp from './assets/app.png'

class HomePage extends React.Component {
  render () {
    return (<div className={styles.container}>
      <div className={styles.intro}>
        <h3 className={styles.subheader}>Hi I'm River Kanies, software engineer, artist and Chattanoogan.</h3>
      </div>
      <div className={styles.me}/>
      <div className={styles.intro}>
        <h1 className={styles.header}>I empower entreprenuers with novel ideas to make those ideas a reality, on a budget.</h1>
        <br/><br/>
        <Link to='/contact' className={buttonStyles.button}>Get a Quote</Link><br/><br/><br/><br/>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon3}>
          <img className={styles.imageIcon} src={imageIdea} />
          <p>Affordable prototypes for custom web applications</p>
        </div>
        <div className={styles.icon3}>
          <img className={styles.imageIcon} src={imageApp} />
          <p>Full-stack services: interactive frontends, 3rd party integrations</p>
        </div>
        <div className={styles.icon3}>
          <img className={styles.imageIcon} src={imageDecision} />
          <p>I specialize in automating complex decision making processes. I can do the math</p>
        </div>
      </div><br/><br/>
    </div>)
  }
}

export default HomePage
