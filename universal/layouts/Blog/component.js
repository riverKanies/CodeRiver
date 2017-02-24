import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class Blog extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Blog'
          specialLink={{href: 'https://medium.com/@planmade', label: 'Visit Our Blog'}}
        />
      </main>
    )
  }
}

export default Blog
