/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  colTextOne: Array<string>,
  colTextTwo: Array<string>
}

const defaultText = ['Hello, I am some text!']

const TwoColText = ({
  bgColor = 'default',
  hasTitle = 'titleFalse',
  title = 'TwoColText',
  colTextOne = defaultText,
  colTextTwo = defaultText
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <section className={styles.column}>
          {colTextOne.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
        <section className={styles.column}>
          {colTextTwo.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
      </div>
    </section>
  )
}

export default TwoColText
