import React from 'react'
import Quoter from 'components/Quoter'
import { httpGet } from 'lib/http'

import styles from './styles'

class HomeView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.state.quotes = []

    this.fetchQuotes = this.fetchQuotes.bind(this)
  }

  render() {
    return (
      <main id='home' role='main' className={styles.homePage}>
        <h1>Welcome Home</h1>
        <Quoter />
        <button onClick={this.fetchQuotes}>Get Quotes</button>
        <ul>
          {this.renderQuotes()}
        </ul>
      </main>
    )
  }
  fetchQuotes() {
    httpGet('/api/quotes').then(
      data => {
        const quotes = JSON.parse(data.data).results
        this.setState({quotes: quotes})
        return Promise.resolve(data)
      },
      error => {
        const e = error.errors || { error: 'there was an error processing request' }
        return Promise.reject(e)
      }
    )
  }
  renderQuotes() {
    return this.state.quotes.map((q, i)=>{
      return <li key={i}>{q.company_name}</li>
    })
  }
}

export default HomeView
