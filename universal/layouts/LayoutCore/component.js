/* @flow */
import 'styles/core'
import 'styles/fonts/icomoon'
import 'styles/vendor/normalize'

import React from 'react'
import Header from 'components/Header'
import Helmet from 'react-helmet'

import styles from './styles'
import headers from 'lib/headers'
import segment from 'lib/segment'

import { toast } from 'modules/Toast'

const ToastContainer = toast.container

type Props = {
  children: any
}

class LayoutCore extends React.Component {
  props: Props

  componentDidMount () {
    segment.load(process.env.SEGMENT)
    segment.page()
  }

  componentDidUpdate () {
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
      </section>
    )
  }
}

export default LayoutCore
