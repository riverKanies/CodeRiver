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
        {this.renderQuotes(this.props.quotes)}
        <div className={styles.container}>
          <header className={styles.accountHeader}>
            <h3>Let's get started</h3>
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
      <div className={styles.container}>
          <h3 className={styles.colorText}>${numberWithCommas(this.state.coverage)}</h3>
          <Slider min={100000} max={1000000} value={this.state.coverage} step={100000} onChange={this.updateCoverage}/>
          <br/>
          <br/>
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
          <br/>
          <button className={styles.submit} style={{float: 'none', display: 'inline-block'}} onClick={this.updateQuotes}>Update Quotes</button>
        </div>
      </div>
      <br/>
      <br/>
      <section >
      <header className={styles.accountHeader}>
        <h3>Next, click on a plan that looks good to you</h3>
      </header>
      <ul className={styles.cardContainer} style={{listStyleType: 'none', paddingLeft: 0, float: 'left'}}>
        {quotes.map((q,i)=>{
          const selectedQuoteId = idQuote(this.props.selectedQuote)
          const quoteId = idQuote(this.props.quotes[i])
          return <li className={styles.card} key={i}>
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