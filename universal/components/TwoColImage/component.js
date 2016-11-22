/* @flow */
import React from 'react'
import styles from './styles'
import defaultImage from './assets/defaultImage.png'

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  colOneImg: any,
  colTwoImg: any
}

const TwoColImage = ({
  bgColor = 'default',
  hasTitle = 'titleFalse',
  title = 'TwoColText',
  colOneImg = defaultImage,
  colTwoImg = defaultImage
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <section className={styles.columnWrap}>
          <div className={styles.column}>
            <img src={colOneImg} />
          </div>
          <div className={styles.column}>
            <img src={colTwoImg} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default TwoColImage
