/* @flow */
import React from 'react'
import styles from '../styles'

type Props = {
  itemPosition: 'itemLeft' | 'itemRight',
  title: string,
  sectionText: Array<string>
}

const defaultText = [`
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas
  faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.`
]

const VerticalTimelineItem = ({
  itemPosition = 'itemLeft',
  title = 'VerticalTimelineItem',
  sectionText = defaultText
}: Props) => {
  return (
    <section className={styles[itemPosition]}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <section className={styles.sectionContent}>
        <p>{sectionText}</p>
      </section>
    </section>
  )
}

export default VerticalTimelineItem
