/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Quoter from './component'
import { KEY } from 'modules/Quoter'

import * as sessionSelectors from 'modules/UserSession/selectors'

const mapStateToProps = (store) => {
  const { isLoggedIn } = sessionSelectors.isLoggedIn(store)
  return ({...store[KEY], form: store.form['quoter'], isLoggedIn})
}

export default connect(mapStateToProps)(Quoter)//(QuoterContainer)
