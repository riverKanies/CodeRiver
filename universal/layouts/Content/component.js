/* @flow */
import React from 'react'
import styles from './styles'

import * as pages from './pages'
import Banner from 'components/Banner'

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
  const { Page, meta } = fetchPageById(props.params.page_id)
  const bannerProps = {
    bannerText: [],
    title: meta.data.title,
    subTitle: '',
    height: 'halfHeight'
  }

  return (
    <div id='contentView' className={styles.container}>
      <Banner {...bannerProps} />
      <div className={styles.pageContainer}>
        <Page />
      </div>
    </div>
  )
}

export default ContentView
