/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  marginBottom: 'marginTrue' | 'marginFalse',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  colTextOne: any,
  colTextTwo: any
}

const defaultText = ['Hello, I am some text!', 'I am also text!']

const TwoColHeader = ({
  bgColor = 'default',
  marginBottom = 'marginTrue',
  hasTitle = 'titleFalse',
  title = 'TwoColText',
  colTextOne = defaultText,
  colTextTwo = defaultText
}: Props) => {
  return (
    <section className={styles[bgColor][marginBottom]}>
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

export default TwoColHeader
