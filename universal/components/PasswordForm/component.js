import React from 'react'
import styles from './styles'
import { Field } from 'redux-form'
import type { Form as FormType } from 'lib/types'
import Input from 'components/Input'

export default function Form (props: FormType) {
  const { handleSubmit } = props
  return (
    <form className={styles.changePassword} onSubmit={handleSubmit}>
      <fieldset className={styles.password}>
        <Field
          theme='thriveInput'
          component={Input}
          type='password'
          name='current_password'
          label='Old Password' />
        <Field
          component={Input}
          type='password'
          name='password'
          label='New Password'
        />
        <Field
          component={Input}
          type='password'
          name='password_confirmation'
          label='New Password Confirmation'
        />
        {(props.message) ? <p>{props.message}</p> : null }
      </fieldset>
      <fieldset className={styles.save}>
        <input className={styles.submit} type='submit' value='Change' />
      </fieldset>
    </form>
  )
}
