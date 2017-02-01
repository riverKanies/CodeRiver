import React from 'react'
import styles from './styles'
import type { Form as FormType } from 'lib/types'
import Input from 'components/Input'
import { Field } from 'redux-form'

export default function Form (props: FormType) {
  const { handleSubmit } = props

  return (
    <form className={styles.myProfile} onSubmit={handleSubmit}>
      <fieldset className={styles.accountAbout}>
        <Field
          component={Input}
          theme='thriveInput'
          type='birthdate'
          name='birthdate'
          label='Birthdate'
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='gender'
          name='gender'
          label='Gender'
        />
        {(props.message) ? <p>{props.message}</p> : null }
      </fieldset>
      <fieldset className={styles.save}>
        <input
          className={styles.submit}
          type='submit'
        />
      </fieldset>
    </form>
  )
}
