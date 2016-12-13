/* @flow */
import React from 'react'
import styles from './styles'
import VerticalTimelineItem from './VerticalTimelineItem'

const TimelineItems = [
  {
    itemPosition: 'itemLeft',
    title: 'Pathways',
    sectionText: [
      `There are five pathways built of multiple microsteps you can practice
       in a sustainable way. The steps are small and very easy to integrate into your life,
       but the impact is transformational. This is the part where we go from knowing
       what to do to actually doing it. Choose the Pathway you want to begin with--
       Joy, Calm, Productivity, Well-Being and Purpose.`
    ]
  },
  {
    itemPosition: 'itemRight',
    title: 'Journeys',
    sectionText: [
      `The purpose of a microstep, simply stated, is the tiniest step you can
      take to put you on the path towards what you want to achieve. Once you are on
      the path, myriad opportunities open up for you to improve your health, productivity,
      and happiness. Our microsteps are practical and they work! Pick the microstep
      that becomes your cornerstone habit, and keep adding in the order that works best for you.`
    ]
  },
  {
    itemPosition: 'itemLeft',
    title: 'Microsteps',
    sectionText: [
      `There are five Pathway Protocols -- experiment with them, discover what most resonates with you,
      and return to it again and again. You can do these at any time -- as you begin your pathways,
      on your commute, during a break in your day, or before you go to bed at night. We have bracketed
      in italics commentary to help you practice the protocols the first few times, after
      which it will become second nature.`
    ]
  }
]

const VerticalTimeline = () => {
  return (
    <section className={styles.verticalTimeline}>
      <div className={styles.verticalLine} />
      <section className={styles.container}>
        {TimelineItems.map(
          item =>
            <VerticalTimelineItem {...item} />
        )}
      </section>
    </section>
  )
}

export default VerticalTimeline
