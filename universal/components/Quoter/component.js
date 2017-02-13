/* @flow */
import React from 'react'
import QuoterForm from 'components/QuoterForm'
import QuoteCard from 'components/QuoteCard'
import { getQuotes, defaultValues, actions } from 'modules/Quoter'
import { apiUpdateQuote } from 'modules/UserSession'
import styles from './styles'
import formStyles from 'components/Input/styles.css'
import profileStyles from 'components/QuoterForm/styles.css'

import './sliderStyles.css'
import Slider from 'rc-slider'

import { browserHistory } from 'react-router'

type Props = {
}

class Quoter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.state.coverage = defaultValues.coverage
    this.state.term = defaultValues.term

    this.selectQuote = this.selectQuote.bind(this)
    this.updateCoverage = this.updateCoverage.bind(this)
    this.updateTerm = this.updateTerm.bind(this)
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
    const terms = [10,15,20,30]
    return (<div >
      <div className={profileStyles.myProfile} style={{ width: '100%' }}>
        <p>Coverage: ${numberWithCommas(this.state.coverage)}</p>
        <Slider min={100000} max={1000000} value={this.state.coverage} step={100000} onChange={this.updateCoverage}/>
        <p style={{marginTop: '20px'}}>Term:</p>
        {terms.map((t,i)=>(
          <label key={i} className={this.state.term == t ? formStyles.radioHighlight : formStyles.radio}>
            <input className={formStyles.radioInput}
              type='radio'
              name='term'
              value={t}
              checked={this.state.term == t}
              onChange={this.updateTerm}
            />
            {t} Years
          </label>
        ))}
        <button className={styles.submit} onClick={this.updateQuotes}>Update Quotes</button>
      </div>
      <br/>
      <br/>
      <section>
      <ul style={{listStyleType: 'none', paddingLeft: 0, float: 'left'}}>
        {quotes.map((q,i)=>{
          const selectedQuoteId = idQuote(this.props.selectedQuote)
          const quoteId = idQuote(this.props.quotes[i])
          return <li key={i}>
            <QuoteCard isSelected={quoteId == selectedQuoteId} onClick={this.selectQuote(i)} quote={q}/>
            <br/>
          </li>
        })}
      </ul>
      </section>
    </div>)
  }
  selectQuote (i) {
    return (e) => {
      const quote = this.props.quotes[i]
      this.props.dispatch({type: actions.selectQuote, data: quote})
      let redirectPath = '/signup'
      if (this.props.isLoggedIn) {
        this.props.dispatch(apiUpdateQuote(quote))
        redirectPath = '/profile'
      }
      browserHistory.push(redirectPath)
    }
  }
  updateCoverage (coverage) {
    this.setState({coverage})
  }
  updateTerm (e) {
    const term = e.target.value
    this.setState({term})
  }
  updateQuotes () {
    const { coverage, term } = this.state
    const formData = this.props.form.values
    const data = { ...formData, coverage, term }
    this.setState({selectedQuote: null})
    this.props.dispatch(getQuotes(data))
  }
}

function idQuote(quote) {
  if (!quote) return null
  const id = quote.company_code+quote.product_name+quote.premium_monthly
  return id
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Quoter
