/* @flow */
import 'styles/core'
import 'styles/fonts/icomoon'
import 'styles/vendor/normalize'

import React from 'react'
import Header from 'components/Header'
import styles from './styles'

import { toast } from 'modules/Toast'

const ToastContainer = toast.container

type Props = {
  children: any
}

export const LayoutCore = ({ children }: Props) => (
  <section className={styles.mainContainer}>
    <Header />
    <ToastContainer />
    <section className={styles.bodyContainer}>
      {children}
    </section>
  </section>
)

LayoutCore.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default LayoutCore
