import React from 'react'
import styles from './styles.css'

const textStyles = {textAlign: 'center', width: '100%'}

export default (props) => {
  return (<div className={props.isSelected ? styles.cardHighlight : styles.card} onClick={props.onClick}>
    <div style={{margin: 'auto', width: 160}}><img src={props.quote.logo_url}/></div>
    <p className={styles.text}>{props.quote.company_name}</p>
    <p className={styles.text}>Monthly Premium: ${props.quote.premium_monthly.toFixed(2)}</p>
  </div>)
}
