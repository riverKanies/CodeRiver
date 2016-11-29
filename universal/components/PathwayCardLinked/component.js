/* @flow */
import React from 'react'
import styles from './styles'
import { Link } from 'react-router'
import Button from 'components/Button'

type Props = {
  title: string,
  description: string,
  id: number,
  image: any,
};

Button.defaultProps = {
  buttonText: 'FIND YOUR THRIVE PULSE',
  linkTo: '/pulse',
  buttonStyle: 'white'
}

const defaultText = [`Pathway Title`]

const PathwayCard = ({
  title = defaultText[0],
  id }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.cardContainer}>
        <section className={styles.content}>
          <Link to={`/pathways/${id}`}>
            <h3 className={styles.header}>{title}</h3>
            <Button />
          </Link>
        </section>
      </section>
    </section>
  )
}

export default PathwayCard
