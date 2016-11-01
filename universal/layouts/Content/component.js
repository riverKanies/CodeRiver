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
      Page: pages[pageId].default,
      meta: pages[pageId].meta
    }
  }
  return {
    Page: pages.notfound.default,
    meta: pages.notfound.meta
  }
}

export const ContentView = (props: Props) => {
  const { Page } = fetchPageById(props.params.page_id)

  return (
    <div className={styles.container}>
      <Page />
    </div>
  )
}

export default ContentView
