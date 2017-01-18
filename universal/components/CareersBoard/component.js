/* @flow */
import React from 'react'
import styles from './styles'

class CareersBoard extends React.Component {
  componentWillMount () {
    window.whr(document).ready(function () {
      window.whr_embed(172222, { detail: 'titles', base: 'jobs', zoom: 'state', grouping: 'none' })
    })
  }

  render () {
    return (
      <section className={styles.careersBoard}>
        <h2> Open Roles </h2>
        <div className={styles.container}>
          <div id='whr_embed_hook' className={styles.careerPosts} />
        </div>
      </section>
    )
  }
}

export default CareersBoard
