/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  sectionClass: 'default' | 'white' | 'blue' | 'gray' | 'tagalong' | 'fade',
  divider: 'dividerFalse' | 'dividerTrue',
  sectionWidth: 'defaultWidth' | 'fullWidth' | 'twoThirdsWidth' | 'halfWidth',
  textAlign: 'textLeft'| 'textCenter' | 'textRight',
  header: 'headerTrue' | 'headerFalse',
  title: string,
  sectionText: any,
  overrideStyles: {}
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullWidthText = ({
  sectionClass = 'default',
  divider = 'dividerFalse',
  sectionWidth = 'defaultWidth',
  textAlign = 'textCenter',
  header = 'headerTrue',
  title = 'Title',
  sectionText = defaultText,
  overrideStyles = {}
}: Props) => {
  return (
    <section style={overrideStyles} className={styles[sectionClass]}>
      <section style={overrideStyles} className={styles[textAlign]}>
        <div className={styles[sectionWidth]}>
          <header className={styles[header]}>
            <h2>{title}</h2>
          </header>
          <div className={styles[divider]} />
          <section className={styles.sectionContent} dangerouslySetInnerHTML={createHTMLContent(sectionText)} />
        </div>
      </section>
    </section>
  )
}

function createHTMLContent (strings) {
  const paragraphs = strings.map((paragraph, i) => (`<p>${paragraph}</p>`)).join('\n')
  return {__html: paragraphs}
}

export default FullWidthText
