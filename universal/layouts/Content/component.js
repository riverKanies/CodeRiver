/* @flow */
import React from 'react'
import styles from './styles'

import * as pages from './pages'

type Props = {
  params: {
    page_id: string,
  }
}

export function fetchPageById (pageId: string) {
  if (pages[pageId]) {
    return {
      Page: pages[pageId].default
    }
  }
  return {
    Page: undefined
  }
}

class ContentView extends React.Component {
  props: Props
  state = {
    Page: null
  }

  componentWillMount () {
    const { Page } = fetchPageById(this.props.params.page_id)
    if (!Page) {
      window.location = '/404'
    } else {
      this.setState({ Page })
    }
  }

  render () {
    const { Page } = this.state

    if (!Page) return null

    return (
      <div id='contentView' className={styles.container}>
        <div className={styles.pageContainer}>
          <Page />
        </div>
      </div>
    )
  }
}

export default ContentView
