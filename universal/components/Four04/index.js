import React from 'react'
import { connect } from 'react-redux'
import * as selectors from 'modules/UserSession/selectors'

import Four04 from './component'
import AccentureFour04 from './AccentureFour04'
import whiteLabeled from 'lib/whiteLabeled'

const WhiteLabeled404 = whiteLabeled({
  'accenture': AccentureFour04
})

function Variable404 (props: any) {
  const subdomain = props.subdomain

  return (
    <WhiteLabeled404 {...props} base={Four04} subdomain={subdomain} />
  )
}

export default connect(selectors.subdomainSelector)(Variable404)
