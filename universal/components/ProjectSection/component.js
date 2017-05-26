import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

class ProjectSection extends React.Component {
  render () {
    return (<div>
      <h2 className={styles.header}>{this.props.header}</h2>
      <div className={styles.imageContainer}>
        <a href={this.props.link} target="_blank">
          <img className={styles.image} src={this.props.image} />
        </a>
      </div>
      <p className={styles.body}>{this.props.description}</p>
      <p className={styles.footNote}>{this.props.tech}</p>
    </div>)
  }
}

export default ProjectSection
