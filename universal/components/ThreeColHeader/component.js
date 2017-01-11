/* @flow */
import React from 'react'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue' | 'grayPattern',
  title: string,
  colOne: {
    title: string,
    text: Array<string>,
    link: any
  },
  colTwo: {
    title: string,
    text: Array<string>,
    link: any
  },
  colThree: {
    title: string,
    text: Array<string>,
    link: any
  },
  footerTextQuote: 'quoteTrue' | 'quoteFalse',
  footerLink: any,
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
// inline link logic

function renderLink ({
  link
}: { link: Object }) {
  if (link) {
    return (
      <ExternalLink {...link} />
    )
  }
  return null
}

// footer logic
function renderFooter ({
  footerTextQuote,
  footerText,
  footerLink
}: { footerTextQuote: string, footerText: Array<string>, footerLink: any }) {
  if (footerLink) {
    return (
      <footer className={styles.footer}>
        <span className={styles[footerTextQuote]}>
          {footerText}
          <ExternalLink {...footerLink} />
        </span>
      </footer>
    )
  }
  if (footerText) {
    return (
      <footer className={styles.footer}>
        <span className={styles[footerTextQuote]}>
          {footerText}
        </span>
      </footer>
    )
  }
  return null
}

const colStuff = {
  title: 'Column Title',
  text: ['I am text.'],
  link: null
}

const ThreeColHeader = ({
  bgColor = 'grayPattern',
  title,
  colOne = colStuff,
  colTwo = colStuff,
  colThree = colStuff,
  footerLink = null,
  footerTextQuote = 'quoteFalse',
  footerText
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
            {colOne.text.map((paragraph, i) => (<p key={i}>{paragraph}{renderLink(colOne)}</p>))}
          </div>
          <div className={`${styles.column} contentColumn`}>
            <header className={styles.colHeader}>
              <h3>{colTwo.title}</h3>
            </header>
            {colTwo.text.map((paragraph, i) => (<p key={i}>{paragraph}{renderLink(colTwo)}</p>))}
          </div>
          <div className={`${styles.column} contentColumn`}>
            <header className={styles.colHeader}>
              <h3>{colThree.title}</h3>
            </header>
            {colThree.text.map((paragraph, i) => (<p key={i}>{paragraph}{renderLink(colThree)}</p>))}
          </div>
        </section>
        {renderFooter({footerLink, footerTextQuote, footerText})}
      </div>
    </section>
  )
}

export default ThreeColHeader
