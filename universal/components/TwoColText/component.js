/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  colTextOne: string,
  colTextTwo: string
}

const TwoColText = ({
  bgColor = 'default',
  hasTitle = 'titleFalse',
  title = 'TwoColText',
  colTextOne = 'Hello, I am some text!',
  colTextTwo = 'Hello, I am some text!'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <section className={styles.columnWrap}>
          <div className={styles.column}>
            <p>{colTextOne}</p>
          </div>
          <div className={styles.column}>
            <p>{colTextTwo}</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default TwoColText
