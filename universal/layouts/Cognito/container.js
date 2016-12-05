import React from 'react'
import styles from './styles'

export class CognitoForm extends React.Component {

  componentDidMount () {
    window.Cognito.load('forms', { id: '9' })
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <div className='cognito' />
      </div>
    )
  }
}

export default CognitoForm
