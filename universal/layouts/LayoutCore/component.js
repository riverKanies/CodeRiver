/* @flow */
import 'styles/vendor/normalize'
import 'styles/core'
import 'styles/fonts/webfonts/webfonts'
import 'styles/typography'

import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { checkSession } from 'modules/UserSession'

import styles from './styles'
import headers from 'lib/headers'
import segment from 'lib/segment'

import { toast } from 'modules/Toast'

const ToastContainer = toast.container

type Props = {
  children: any,
  dispatch: Function
}

export class LayoutCore extends React.Component {
  props: Props

  componentDidMount () {
    this.props.dispatch(checkSession())
      .catch(e => {
        // ssshhhhhhh, its ok....
        return undefined
      })
    segment.load(process.env.SEGMENT)
    segment.page()
  }

  render () {
    return (
      <section className={styles.mainContainer}>
        <Helmet
          title='Thrive'
          script={headers.scripts}
        />
        <Header />
        <ToastContainer />
        <section className={styles.bodyContainer}>
          {this.props.children}
        </section>
        <Footer />
      </section>
    )
  }
}

export default connect(() => ({}))(LayoutCore)
