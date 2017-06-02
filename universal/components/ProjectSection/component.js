import React from 'react'
import { Link } from 'react-router'

import styles from './styles'
import contentStyles from 'styles/content.css'

class ProjectSection extends React.Component {
  render () {
    return (<div className={styles.container}>
      <div className={styles.graphicsContainer}>
        <div className={styles.computerSection}>
          <div className={styles.imageContainer}>
            <a href={this.props.link} target="_blank">
              <img className={styles.image} src={this.props.image} />
            </a>
          </div>
          <div className={styles.computerStand} />
          <div className={styles.computerFoot} />
        </div>
        <div className={styles.mobileSection}>
          <div className={styles.imageContainerMobile}>
            <a href={this.props.link} target="_blank">
              <img className={styles.imageMobile} src={this.props.mobileImage} />
            </a>
            <div className={styles.mobileButton} />
          </div>
        </div>
      </div>

      <section>
        <h2 className={styles.header}>{this.props.header}</h2>
        <p className={contentStyles.body}>{this.props.description}</p>
      </section>
      <p className={styles.footNote}>{this.props.tech}</p>
    </div>)
  }
}

export default ProjectSection
