import React from 'react'
import { Link } from 'react-router'

import styles from './styles'
import contentStyles from 'styles/content.css'

class Process extends React.Component {

  render() {
    return (
      <main id='home' role='main' className={contentStyles.container}>
        <h1 className={contentStyles.header}>Process</h1>
        <p>Iteration: Even with small contracts, it's important to break projects down into digestible pieces that can be built and tested in isolation.</p>
        <br/>
        <Link to="/content" className={contentStyles.link}>Work With Me</Link>
      </main>
    )
  }
}

export default Process
