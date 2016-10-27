/* @flow */
import React from 'react'
import styles from './styles'
import PartnerDetail from 'components/PartnerDetail'

type Props = {
  title: string,
};

const PartnersSection = ({ title = 'Partners' }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          {title}
        </h1>
        <div className={styles.partnersContainer} >
          <PartnerDetail />
          <PartnerDetail />
          <PartnerDetail details={['Hello']} />
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
