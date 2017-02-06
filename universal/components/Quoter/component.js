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
          {renderQuotes(props.quotes)}
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
  return (<ul>
    {quotes.map((q,i)=>{
      return <li key={i}>
        <img src={q.logo_url} />
        <p>Company: {q.company_name}</p>
        <p>Monthly Premium: ${q.premium_monthly}</p>
        <br/>
      </li>
    })}
  </ul>)
}

export default Quoter
