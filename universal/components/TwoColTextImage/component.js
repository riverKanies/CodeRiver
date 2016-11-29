/* @flow */
import React from 'react'
import styles from './styles'
import defaultImage from './assets/defaultImage.png'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  marginBottom: 'marginTrue' | 'marginFalse',
  hasTitle: 'titleTrue' | 'titleFalse',
  titleCenter: 'centerTrue' | 'centerFalse',
  title: string,
  colTextOne: any,
  colTextTwo: any,
  colOneImg: any,
  colTwoImg: any
}

const defaultText = ['Hello, I am some text!', 'I am also text!']

const TwoColTextImage = ({
  bgColor = 'default',
  marginBottom = 'marginTrue',
  hasTitle = 'titleFalse',
  title = 'TwoColTextImage',
  colTextOne = defaultText,
  colTextTwo = defaultText,
  colOneImg = defaultImage,
  colTwoImg = defaultImage
}: Props) => {
  return (
    <section className={styles[bgColor][marginBottom]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <div className={styles.divider} />
        <section className={styles.columnWrap}>
          <div className={styles.column}>
            <img src={colOneImg} />
            {colTextOne.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </div>
          <div className={styles.column}>
            <img src={colTwoImg} />
            {colTextTwo.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default TwoColTextImage
