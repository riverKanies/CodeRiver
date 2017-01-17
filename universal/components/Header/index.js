import React from 'react'
import { connect } from 'react-redux'
import * as selectors from 'modules/UserSession/selectors'

import Header from './component'
import AccentureHeader from './AccentureHeader'
import whiteLabeled from 'lib/whiteLabeled'

const WhiteLabeledHeader = whiteLabeled({
  'accenture': AccentureHeader
})

function VariableHeader (props: any) {
  const subdomain = props.subdomain

  return (
    <WhiteLabeledHeader {...props} base={Header} subdomain={subdomain} />
  )
}

const mapStateToProps = (state) => {
  const loggedInSelector = selectors.isLoggedIn(state)
  const subdomainSelector = selectors.subdomainSelector(state)
  const location = state.location

  return {
    ...loggedInSelector,
    ...subdomainSelector,
    pathname: location.pathname
  }
}

export default connect(mapStateToProps)(VariableHeader)

