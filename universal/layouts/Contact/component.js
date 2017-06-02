import React from 'react'
import { Link } from 'react-router'

import styles from './styles'
import contentStyles from 'styles/content.css'

class Contact extends React.Component {

  render() {
    return (
      <main id='home' role='main' className={contentStyles.container}>
        <h1 className={contentStyles.header}>Contact Me</h1>
        <div className={contentStyles.linkContainer}>
          <p className={contentStyles.oneliner}>To get in contact with me, email me at river.kanies@gmail.com or click the link below:</p>
          <a className={contentStyles.link} href="mailto:river.kanies@gmail.com?Subject=CodeRiver">Email Me</a>
        </div>
      </main>
    )
  }
}

export default Contact
