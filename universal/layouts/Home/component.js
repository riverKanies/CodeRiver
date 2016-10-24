import React from 'react'
import styles from './styles'
import ProductList from 'containers/ProductList'

export const HomeView = () => (
  <div className={styles.container}>
    <ProductList />
  </div>
)

export default HomeView
