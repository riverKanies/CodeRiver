import React from 'react'
import styles from './styles'
import buttonStyles from 'styles/content.css'
import { Field } from 'redux-form'
import type { Form as FormType } from 'lib/types'
import Input from 'components/Input'

export default function Form (props: FormType) {
  const { handleSubmit } = props
  return (
    <form className={styles.changePassword} onSubmit={handleSubmit}>
      <fieldset className={styles.password}>
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
        <input className={buttonStyles.button} type='submit' value='Change' />
      </fieldset>
    </form>
  )
}
