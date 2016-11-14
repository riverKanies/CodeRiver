import React from 'react'
import styles from './styles'
import dummyImage from './assets/thriveScience.jpg'
import ContentLabel from 'components/ContentLabel'
import Button from 'components/Button'

type Props = {
  sectionClass: 'default' | 'lightGray' | 'transparent',
  title: string,
  label: Object,
  sectionText: Array<string>,
  image: string,
  button: Object
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullWidthTwoColSpecial = ({
  sectionClass = 'default',
  title = 'Title',
  label = {},
  sectionText = defaultText,
  image = dummyImage,
  button = {}
}: Props) => {
  return (
    <section className={styles[sectionClass]}>
      <section className={styles.container}>
        <div className={styles.column}>
          <section className={styles.sectionContent}>
            <ContentLabel {...label} />
            <header className={styles.header}>
              <h2>{title}</h2>
            </header>
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
            <Button {...button} />
          </section>
        </div>
        <div className={styles.column}>
          <figure className={styles.imageWrap}>
            <img className={styles.image} src={image} alt={title} />
          </figure>
        </div>
      </section>
    </section>
  )
}

export default FullWidthTwoColSpecial
