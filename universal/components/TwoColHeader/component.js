/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  marginBottom: 'marginTrue' | 'marginFalse',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  hasSubTitle: 'subTitleTrue' | 'subTitleFalse',
  subTitle: string,
  colTextOne: any,
  colTextTwo: any
}

const colTextOneText = ['Welcome to the Thrive Global Growth Center. Here you\'ll find everything you need to begin the Thrive journey and go from surviving to thriving. Start by taking your Thrive Pulse with the 5-minute assessment below. Explore our Pathways, each built of multiple microsteps that']
const colTextOneTwo = ['make a transformational impact on your day-to-day well-being and performance. Go deeper with our six-week e-Course. Whatever your entry point is, take it. One of Thrive Global\'s core principles is a bias for action. It\'s time to go from knowing what to do to actually doing it.']

const TwoColHeader = ({
  bgColor = 'default',
  marginBottom = 'marginTrue',
  hasTitle = 'titleTrue',
  hasSubTitle = 'subTitleTrue',
  subTitle = 'Sub Title',
  title = 'Title',
  colTextOne = colTextOneText,
  colTextTwo = colTextOneTwo
}: Props) => {
  return (
    <section className={styles[bgColor][marginBottom]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <div className={styles.divider} />
        <div className={styles[hasSubTitle]}>
          <h4>{subTitle}</h4>
        </div>
        <section className={styles.columnWrap}>
          <div className={styles.column}>
            {colTextOne.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </div>
          <div className={styles.column}>
            {colTextTwo.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default TwoColHeader
