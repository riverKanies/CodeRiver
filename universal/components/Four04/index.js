import React from 'react'
import { connect } from 'react-redux'
import * as selectors from 'modules/UserSession/selectors'

import Four04 from './component'

export default connect(selectors.subdomainSelector)(Four04)//(Variable404)
