import React from 'react'
import styles from './styles'
import { Form as FormType } from 'lib/types'

import { Field } from 'redux-form'

import Input from 'components/Input'

const ThankYou = () => (<span>thank you!</span>)

const LeadForm = ({ handleSubmit, submitting, submitSucceeded }: FormType) => {
  const message = (submitSucceeded) ? <ThankYou /> : null

  return (
    <div className={styles.container}>
      {message}
      <form onSubmit={handleSubmit}>
        <Field name='email' label='email' component={Input} />
        <button type='submit' disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

export default LeadForm
