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
    Page: pages.notfound.default
  }
}

export const ContentView = (props: Props) => {
  const { Page } = fetchPageById(props.params.page_id)

  return (
    <div id='contentView' className={styles.container}>
      <div className={styles.pageContainer}>
        <Page />
      </div>
    </div>
  )
}

export default ContentView
