// PartnerWithUs
import React from 'react'
import styles from './styles'


export class PartnerWithUs extends React.Component {

  render () {
    return (
      <main role='main' className={styles.partnerWithUs}>
        {this.props.children}
      </main>
    )
  }
}

export const PWUOverview = () => (
  <div className={styles.Overview}>
    <h1> Overview </h1>
  </div>
)

export const PWUCorporate = () => (
  <div className={styles.Corporate}>
    <h1> Corporate </h1>
  </div>
)

export const PWUContent = () => (
  <div className={styles.Content}>
    <h1> Content </h1>
  </div>
)

export const PWUCommerce = () => (
  <div className={styles.Commerce}>
    <h1> Commerce </h1>
  </div>
)

export default PartnerWithUs
