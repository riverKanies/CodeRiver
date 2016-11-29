/* @flow */
import React from 'react'
import styles from './styles'
import defaultImage from './assets/defaultImage.png'
import ExternalLink from 'components/ExternalLink'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: 'titleTrue' | 'titleFalse',
  titleCenter: 'centerTrue' | 'centerFalse',
  link: any,
  title: string,
  colTextOne: any,
  colOneImg: any,
  colTwoImg: any
}

const defaultText = ['Hello, I am some text!', 'I am also text!']

const TwoColTextImage = ({
  bgColor = 'default',
  hasTitle = 'titleFalse',
  title = 'TwoColTextImage',
  link = {},
  colTextOne = defaultText,
  colOneImg = defaultImage,
  colTwoImg = defaultImage
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <div className={styles.divider} />
        <section className={styles.columnWrap}>
          <div className={styles.column}>
            <img src={colOneImg} />
          </div>
          <div className={styles.column}>
            <img src={colTwoImg} />
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
