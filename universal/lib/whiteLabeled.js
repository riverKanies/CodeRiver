import React from 'react'

function whiteLabeled (options) {
  return class WhiteLabeledComponent extends React.Component {
    props: {
      base: string,
      subdomain: string
    }

    render () {
      const { base, subdomain } = this.props

      if (!base) {
        throw new Error('WhiteLabeled components require a base case')
      }

      if (!subdomain) {
        throw new Error('WhiteLabeled components require a subdomain')
      }

      const RenderMe = options[subdomain] || base

      return <RenderMe />
    }
  }
}

export default whiteLabeled
