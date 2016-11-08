/* @flow */
import React from 'react'
import styles from './styles'
import PartnerDetail from 'components/PartnerDetail'

type Props = {
  title: string,
};

const PartnersSection = ({ title = 'Partners' }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h2>{title}</h2>
      </section>
      <section className={styles.row} >
        <PartnerDetail />
        <PartnerDetail />
        <PartnerDetail />
        <PartnerDetail />
      </section>
    </section>
  )
}

export default PartnersSection
