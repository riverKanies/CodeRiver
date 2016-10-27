/* @flow */
import React from 'react'
import styles from './styles'
import Rocket from './assets/rocket.png'

type Props = {
  title: string,
  details: Array<string>,
  image: any,
}

const defaultDetails = [
  `Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.`,
  `Donec sed odio dui. Nullam Hey.`
]
const PartnerDetail = ({ title = 'PartnerDetail', details = defaultDetails, image = Rocket }: Props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={image}
      />
      <h3>
        {title}
      </h3>
      {details.map(paragraph => (<p>{paragraph}</p>))}
    </div>
  )
}

export default PartnerDetail
