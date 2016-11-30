/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  marginBottom: 'marginTrue' | 'marginFalse',
  hasTitle: 'titleTrue' | 'titleFalse',
  titleCenter: 'centerTrue' | 'centerFalse',
  hasDivider: 'dividerTrue' | 'dividerFalse',
  divider: any,
  title: string,
  colTextOne: any,
  colTextTwo: any
}

const defaultText = ['Hello, I am some text!', 'I am also text!']

const TwoColText = ({
  bgColor = 'default',
  marginBottom = 'marginTrue',
  hasTitle = 'titleFalse',
  title = 'TwoColText',
  hasDivider = 'dividerTrue',
  divider = {},
  colTextOne = defaultText,
  colTextTwo = defaultText
}: Props) => {
  return (
    <section className={styles[bgColor][marginBottom]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <div className={styles[hasDivider]} />
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
