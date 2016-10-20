import React from 'react'
import styles from './styles'
// Add in a button

type Props = {
  title: String,
  subTitle: String,
  sectionText: Array,
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullWidthText = ({ title = 'Title', subTitle = 'Subtitle', sectionText = defaultText }: Props) => {
  return (
    <section className={styles.centerText}>
      <div className={styles.container}>
        <header>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </header>
        <section className={styles.sectionContent}>
          {sectionText.map(paragraph => (<p>{paragraph}</p>))}
        </section>
      </div>
    </section>
  )
}

export default FullWidthText
