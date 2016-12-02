/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  title: string,
  description: string
};

const defaultTitle = 'Partner Name'
const defaultDescription = '.....science stuff'

const BrowseItemView = ({
  title = defaultTitle,
  description = defaultDescription
}: Props) => {
  return (
    <section className={styles.browseContainer}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button buttonText={title} />
      </div>
    </section>
  )
}

export default BrowseItemView
