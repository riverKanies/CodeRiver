/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  sectionClass: 'default' | 'white' | 'blue' | 'gray',
  sectionWidth: 'defaultWidth' | 'fullWidth' | 'twoThirdsWidth' | 'halfWidth',
  title: string,
  sectionText: any,
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullWidthText = ({
  sectionClass = 'default',
  sectionWidth = 'defaultWidth',
  title = 'Title',
  sectionText = defaultText
}: Props) => {
  return (
    <section className={styles[sectionClass]}>
      <section className={styles.container}>
        <div className={styles[sectionWidth]}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <section className={styles.sectionContent}>
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </section>
        </div>
      </section>
    </section>
  )
}

export default FullWidthText
