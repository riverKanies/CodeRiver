/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  title: string,
  id: number,
  image: any,
};

const buttonProps = {
  buttonText: 'FIND YOUR THRIVE PULSE',
  linkTo: '/pulse',
  buttonStyle: 'special'
}

const defaultText = [`Are You Ready To Thrive?`]

const PathwayCard = ({
  title = defaultText[0],
  id }: Props) => {
  return (
    <section className={styles.card}>
      <section className={styles.cardContainer}>
        <h3 className={styles.header}>{title}</h3>
        <Button {...buttonProps} />
      </section>
    </section>
  )
}

export default PathwayCard
