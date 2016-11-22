/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  colTextOne: any,
  colTextTwo: any
}

const defaultText = ['Hello, I am some text!', 'I am also text!']

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

export default TwoColText
