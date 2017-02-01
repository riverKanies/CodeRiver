/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Quoter from './component'

type Props = {
}

export class QuoterContainer extends React.Component {
  render () {
    return <Quoter />
  }
}

export default connect()(QuoterContainer)
