import React from 'react'
import { Link } from 'react-router'

import contentStyles from 'styles/content.css'

class MainCTA extends React.Component {
  render () {
    return <Link to='/contact' className={contentStyles.button}>Let's Talk</Link>
  }
}

export default MainCTA
