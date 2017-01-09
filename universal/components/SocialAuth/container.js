/* @flow */
import React from 'react'
import ExternalLink from 'components/ExternalLink'
import styles from './styles'
import { withRouter } from 'react-router'
import { checkSession } from 'modules/UserSession'
import { connect } from 'react-redux'

import { saveHeaderObject, CLIENT_URL, HOST_URL } from 'lib/http'

function saveHeaders (h) {
  saveHeaderObject(h)
  return Promise.resolve()
}

const auth_origin_url = encodeURIComponent(CLIENT_URL + '/login')
const facebook_url = `${HOST_URL}/api/auth/facebook?auth_origin_url=${auth_origin_url}`
const twitter_url = `${HOST_URL}/api/auth/twitter?auth_origin_url=${auth_origin_url}`

type Props = {
  location: {
    query: any
  },
  router: any,
  dispatch: Function
}

export class SocialAuth extends React.Component {
  props: Props

  componentDidMount () {
    this.performAuth()
  }

  performAuth () {
    const { location } = this.props

    if (!location.query || !location.query.uid) {
      return false
    }

    const headers = {
      'client': decodeURIComponent(location.query['client_id']),
      'access-token': decodeURIComponent(location.query['auth_token']),
      'uid': decodeURIComponent(location.query['uid'])
    }

    Promise.all([
      saveHeaders(headers),
      this.props.dispatch(checkSession()),
      this.props.router.push('/')
    ])
  }

  renderErrors () {
    const { location } = this.props

    if (!location.query || !location.query.error) {
      return null
    }

    return (
      <div className={styles.errors} id='authErrors'>
        {decodeURIComponent(location.query.error)}
      </div>
    )
  }

  render () {
    return (
      <section className={styles.container}>
        <ExternalLink
          id='facebookAuth'
          target='_self'
          linkStyle='facebook'
          linkTo={facebook_url}>
          Login with Facebook
        </ExternalLink>
        <ExternalLink
          id='twitterAuth'
          target='_self'
          linkStyle='twitter'
          linkTo={twitter_url}>
          Login with Twitter
        </ExternalLink>
        {this.renderErrors()}
      </section>
    )
  }
}

export default connect(() => ({}))(withRouter(SocialAuth, { withRef: true }))
