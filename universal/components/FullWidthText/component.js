/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  sectionClass: 'default' | 'white' | 'blue' | 'gray' | 'tagalong' | 'fade',
  divider: 'dividerFalse' | 'dividerTrue',
  sectionWidth: 'defaultWidth' | 'fullWidth' | 'twoThirdsWidth' | 'halfWidth',
  textStyle: 'alignLeft'| 'alignCenter' | 'alignRight' | 'bodyText',
  header: 'headerTrue' | 'headerFalse',
  title: string,
  sectionText: Array<string>
};

const FullWidthText = ({
  sectionClass = 'default',
  divider = 'dividerFalse',
  sectionWidth = 'defaultWidth',
  textStyle = 'alignCenter',
  header = 'headerTrue',
  title = 'Title',
  sectionText
}: Props) => {
  if (!sectionText) {
    return null
  }
  return (
    <section className={styles[sectionClass]}>
      <section className={styles[textStyle]}>
        <div className={styles[sectionWidth]}>
          <header className={styles[header]}>
            <h2>{title}</h2>
          </header>
          <div className={styles[divider]} />
          <section className={styles.sectionContent}>
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </section>
        </div>
      </section>
    </section>
  )
}

export default FullWidthText
