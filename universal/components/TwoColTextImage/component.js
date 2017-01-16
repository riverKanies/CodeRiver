/* @flow */
import React from 'react'
import styles from './styles'
import defaultImage from './assets/defaultImage.png'
import ExternalLink from 'components/ExternalLink'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: boolean,
  titleCenter: 'centerTrue' | 'centerFalse',
  link: any,
  title: string,
  colTextOne: any,
  colOneImg: any,
  colTwoImg: any
}

// True/False Logic For Has Title
function renderTitle ({
  hasTitle,
  title
}: { hasTitle: boolean, title: string }) {
  if (hasTitle) {
    return (
      <header className={styles.title}>
        <h2>{title}</h2>
      </header>
    )
  }
  return null
}

const defaultText = ['Hello, I am some text!', 'I am also text!']

const TwoColTextImage = ({
  bgColor = 'default',
  hasTitle = true,
  title = 'TwoColTextImage',
  link = {},
  colTextOne = defaultText,
  colOneImg = defaultImage,
  colTwoImg = defaultImage
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        {renderTitle({hasTitle, title})}
        <section className={styles.columnWrap}>
          <div className={styles.column}>
            <img className={styles.image} src={colOneImg} />
          </div>
          <div className={styles.column}>
            <img className={styles.image} src={colTwoImg} />
          </div>
          {colTextOne.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          <span className={styles.buttonWrap}>
            <ExternalLink {...link} />
          </span>
        </section>
      </div>
    </section>
  )
}

export default TwoColTextImage
