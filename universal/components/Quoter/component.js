/* @flow */
import React from 'react'
import QuoterForm from 'components/QuoterForm'
import { getQuotes } from 'modules/Quoter'
import styles from './styles'

import './sliderStyles.css'
import Slider from 'rc-slider'

type Props = {
}

class Quoter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.state.coverage = 500000

    this.updateCoverage = this.updateCoverage.bind(this)
    this.updateQuotes = this.updateQuotes.bind(this)
  }

  render () {
    return (<section className={styles.profile}>
      <section className={styles.myAccount}>
        <div className={styles.container}>
          {this.renderQuotes(this.props.quotes)}
          <header className={styles.accountHeader}>
            <h3>Get a Quote</h3>
          </header>
          <QuoterForm quoterErrors={this.props.errors}/>
        </div>
      </section>
    </section>)
  }
  renderQuotes(quotes) {
    if (quotes.length < 1) return ''
    return (<div>
      <div style={{ width: '100%' }}>
        <p>Coverage: ${numberWithCommas(this.state.coverage)}</p>
        <Slider min={100000} max={1000000} value={this.state.coverage} step={100000} onChange={this.updateCoverage}/>
        <button className={styles.submit} onClick={this.updateQuotes}>Update Quotes</button>
      </div>
      <ul>
        {quotes.map((q,i)=>{
          return <li key={i}>
            <img src={q.logo_url} />
            <p>Company: {q.company_name}</p>
            <p>Monthly Premium: ${q.premium_monthly}</p>
            <br/>
          </li>
        })}
      </ul>
    </div>)
  }
  updateCoverage (coverage) {
    this.setState({coverage})
  }
  updateQuotes () {
    const { coverage } = this.state
    const formData = this.props.form.values
    const data = { ...formData, coverage }
    this.props.dispatch(getQuotes(data))
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Quoter
