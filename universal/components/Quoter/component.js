/* @flow */
import React from 'react'
import QuoterForm from 'components/QuoterForm'
import styles from './styles'

type Props = {
}

const Quoter = (props) => {
  return (
    <section className={styles.profile}>
      <section className={styles.myAccount}>
        <div className={styles.container}>
          <header className={styles.accountHeader}>
            <h3>Choose a Quote</h3>
          </header>
          {renderQuotes(props.quotes)}
          <br/>
          <br/>
          <header className={styles.accountHeader}>
            <h3>Get a Quote</h3>
          </header>
          <QuoterForm quoterErrors={props.errors}/>
        </div>
      </section>
    </section>
  )
}

function renderQuotes(quotes) {
  if (quotes.length < 1) return <p>No quotes found.</p>
  return (<ul>
    <br/>
    {quotes.map((q,i)=>{
      return <li key={i}>
        <img src={q.logo_url} />
        <p>Product: {q.product_name}</p>
        <p>Company: {q.company_name}</p>
        <p>Policy Fee: ${q.policy_fee}</p>
        <br/>
      </li>
    })}
  </ul>)
}

export default Quoter
