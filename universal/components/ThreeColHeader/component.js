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
  footerText: Array<string>
}

// footer logic
function renderFooter ({
  hasFooter,
  footerText
}: { hasFooter: boolean, footerText: Array<string> }) {
  if (hasFooter) {
    return (
      <footer className={styles.footer}>
        <span className={styles.extraText}>{footerText}</span>
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
  title = 'Title',
  colOne = colStuff,
  colTwo = colStuff,
  colThree = colStuff,
  hasFooter = true,
  footerText = ['Footer Text']
}: Props) => {
  return (
    <section className={`${styles[bgColor]} threeColHeader`}>
      <div className={styles.container}>

        <header className={styles.header}>
          <h2>{title}</h2>
        </header>

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

        {renderFooter({hasFooter, footerText})}

      </div>
    </section>
  )
}

export default ThreeColHeader
