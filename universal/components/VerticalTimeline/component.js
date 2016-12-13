/* @flow */
import React from 'react'
import styles from './styles'
import VerticalTimelineItem from './VerticalTimelineItem'

type Props = {
  timelineItem: Object
};

const VerticalTimeline = ({
  timelineItem = VerticalTimelineItem
}: Props) => {
  return (
    <section className={styles.verticalTimeline}>
      <div className={styles.verticalLine} />
      <section className={styles.container}>
        // Need to make VerticalTimelineItem Components live in here via the layout js file
      </section>
    </section>
  )
}

export default VerticalTimeline
