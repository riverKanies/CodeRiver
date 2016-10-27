import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  sectionClass: String,
  title: String,
  subTitle: String,
  sectionText: Array,
  buttonText: String,
  linkTo: String,
  buttonColor: String
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullWidthText = ({
  sectionClass = '',
  title = 'Title',
  subTitle = 'Subtitle',
  sectionText = defaultText,
  buttonText = 'Read More',
  linkTo = 'javascript:void(0)',
  buttonColor = 'dark'
}: Props) => {
  return (
    <section className={styles.fullWidthText}>
      <div className={styles.container}>
        <header>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </header>
        <section className={styles.sectionContent}>
          {sectionText.map(paragraph => (<p>{paragraph}</p>))}
          <Button className={buttonColor} to={linkTo} buttonText={buttonText} />
        </section>
      </div>
    </section>
  )
}

export default FullWidthText
