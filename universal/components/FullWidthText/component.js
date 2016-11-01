import React from 'react'
import styles from './styles'

type Props = {
  sectionClass: string,
  title: string,
  subTitle: string,
  sectionText: Array<string>,
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullWidthText = ({
  sectionClass = 'healthWellness',
  title = 'Title',
  subTitle = 'Subtitle',
  sectionText = defaultText
}: Props) => {
  return (
    <section
      className={[styles.fullWidthText, styles['sectionClass']]}>
      <div className={styles.container}>
        <header>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </header>
        <section className={styles.sectionContent}>
          {sectionText.map((paragraph, idx) => (<p key={idx}>{paragraph}</p>))}
        </section>
      </div>
    </section>
  )
}

export default FullWidthText
