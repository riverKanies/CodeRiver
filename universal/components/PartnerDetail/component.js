/* @flow */
import React from 'react'
import styles from './styles'
import imagePlaceholder from './assets/partner-placeholder.jpg'

type Props = {
  name: string,
  detail: string,
  image: any,
}

const defaultName = 'Partner Name'
const defaultDetail = 'Partner Detail'

const PartnerDetail = ({
  name = defaultName,
  detail = defaultDetail,
  image = imagePlaceholder }: Props) => {
  return (
    <section className={styles.partner}>
      <div className={styles.image}>
        <div className={styles.text}>
          <h3>{name}</h3>
          <p>{detail}</p>
        </div>
      </div>
    </section>
  )
}

export default PartnerDetail
