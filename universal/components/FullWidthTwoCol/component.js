import React from 'react'
import styles from './styles'
import dummyImage from './assets/fpo.png'

type Props = {
  sectionClass: 'default' | 'lightGray',
  columnOrder: 'imgLeft' | 'imgRight',
  title: string,
  label: string;
  sectionText: Array<string>,
  image: string,
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullWidthText = ({
  sectionClass = 'default',
  columnOrder = 'imgLeft',
  title = 'Title',
  label = 'Label',
  sectionText = defaultText,
  image = dummyImage
}: Props) => {
  return (
    <section className={styles[sectionClass]}>
      <section className={styles[columnOrder]}>

        <div className={styles.column}>
          <figure className={styles.imageWrap}>
            <img className={styles.image} src={image} alt={title} />
          </figure>
        </div>

        <div className={styles.column}>
          <i className={styles.label}>{label}</i>
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
