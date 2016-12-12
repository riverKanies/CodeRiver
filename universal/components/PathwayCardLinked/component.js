/* @flow */
import React from 'react'
import styles from './styles'
import { Link } from 'react-router'

type Props = {
  title: string,
  handleClick: Function,
  linkTo: string,
  segmentProps: Object,
  id: number,
  image: any,
};

const defaultText = [`Are You Ready To Thrive?`]

const text = `Start Assessment`

const PathwayCardLinked = ({
  title = defaultText[0],
  linkTo,
  handleClick,
  segmentProps,
  id }: Props) => {
  const linkProps = {
    onClick: handleClick,
    activeClassName: styles.activeStyle,
    to: '/pulse',
    className: styles.card
  }
  return (
    <Link {...linkProps}>
      <section className={styles.cardContainer}>
        <h3 className={styles.header}>{title}</h3>
        <p className={styles.getStarted}>{text}</p>
      </section>
    </Link>
  )
}

export default PathwayCardLinked
