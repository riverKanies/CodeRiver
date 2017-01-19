import React from 'react'
import { connect } from 'react-redux'
import * as selectors from 'modules/UserSession/selectors'
import { loadMediumPosts, KEY, loadAccenturePages } from 'modules/MediumPosts'

import MediumPostGridDynamic from './component'
import AccenturePostGridDynamic from './AccenturePostGridDynamic'
import whiteLabeled from 'lib/whiteLabeled'
import type { MediumPost } from 'lib/types'

const WhiteLabeledGrid = whiteLabeled({
  'accenture': AccenturePostGridDynamic
})

type Props = {
  dispatch: Function,
  subdomain: string,
  mediumPosts: Array<MediumPost>,
  accenturePages: Array<any>,
  requestPending: boolean
}

export class VariableGrid extends React.Component {
  props: Props

  componentWillMount () {
    const { dispatch } = this.props

    if (this.props.subdomain.match(/accenture/)) {
      dispatch(loadAccenturePages())
    } else {
      dispatch(loadMediumPosts())
    }
  }

  render () {
    return (
      <WhiteLabeledGrid
        {...this.props}
        dispatch={this.props.dispatch}
        posts={this.props.mediumPosts}
        requestPending={this.props.requestPending}
        base={MediumPostGridDynamic}
        subdomain={this.props.subdomain}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const subdomainSelector = selectors.subdomainSelector(state)
  const location = state.location

  return {
    ...subdomainSelector,
    pathname: location.pathname,
    mediumPosts: state[KEY].list,
    requestPending: state[KEY].requestPending
  }
}

export default connect(mapStateToProps)(VariableGrid)
