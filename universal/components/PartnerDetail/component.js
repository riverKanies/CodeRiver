import React from 'react'
import styles from './styles.scss'

type Props = {
  title: String
};

const PartnerDetail = ({ title = 'PartnerDetail' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default PartnerDetail
