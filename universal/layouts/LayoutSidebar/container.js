/* @flow */
// This will be deprecated later and moved into a module once we get further along developing the toast.
import React from 'react'
import Layout from './layout'
import { connect } from 'react-redux'
import { toast } from 'modules/Toast'
import type { NavElement } from 'lib/types'

type Props = {
  dispatch: Function,
  handleClick: Function,
  children: any,
  navItems: Array<NavElement>,
}

const LayoutSidebar = (props: Props) => <Layout {...props} />

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
    const type = 'notice'
    const message = 'This is a notice'
    return dispatch(toast.actions.show({type, message}))
  }
})

export default connect(null, mapDispatchToProps)(LayoutSidebar)
