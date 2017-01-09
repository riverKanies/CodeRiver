/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue' | 'grayPattern',
  title: string,
  colOne: {
    title: string,
    text: Array<string>
  },
  colTwo: {
    title: string,
    text: Array<string>
  },
  colThree: {
    title: string,
    text: Array<string>
  },
  hasFooter: boolean,
  footerTextQuote: 'quoteTrue' | 'quoteFalse',
  footerText: Array<string>
}

// header logic
function renderTitle ({
  title
}: { title: string }) {
  if (title) {
    return (
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
    )
  }
  return null
}

// footer logic
function renderFooter ({
  hasFooter,
  footerTextQuote,
  footerText
}: { hasFooter: boolean, footerTextQuote: string, footerText: Array<string> }) {
  if (hasFooter) {
    return (
      <footer className={styles.footer}>
        <span className={styles[footerTextQuote]}>{footerText}</span>
      </footer>
    )
  }
  return null
}

const colStuff = {
  title: 'Column Title',
  text: ['I am text.', 'More text!']
}

const ThreeColHeader = ({
  bgColor = 'grayPattern',
  title,
  colOne = colStuff,
  colTwo = colStuff,
  colThree = colStuff,
  hasFooter = true,
  footerTextQuote = 'quoteFalse',
  footerText = ['Footer Text']
}: Props) => {
  return (
    <section className={`${styles[bgColor]} threeColHeader`}>
      <div className={styles.container}>
        {renderTitle({title})}
        <section className={styles.columnWrap}>
          <div className={`${styles.column} contentColumn`}>
            <header className={styles.colHeader}>
              <h3>{colOne.title}</h3>
            </header>
            {colOne.text.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </div>
          <div className={`${styles.column} contentColumn`}>
            <header className={styles.colHeader}>
              <h3>{colTwo.title}</h3>
            </header>
            {colTwo.text.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </div>
          <div className={`${styles.column} contentColumn`}>
            <header className={styles.colHeader}>
              <h3>{colThree.title}</h3>
            </header>
            {colThree.text.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </div>
        </section>

        {renderFooter({hasFooter, footerTextQuote, footerText})}

      </div>
    </section>
  )
}

export default ThreeColHeader
