/* @flow */
import React from 'react'
import styles from './styles'

import type { Field as FieldType } from 'lib/types'

const Error = ({ error } : { error: string }) => {
  return <span className={styles.error}>{error}</span>
}

const Warning = ({ warning } : { warning: string}) => {
  return <span className={styles.warning}>{warning}</span>
}

export default ({
  input,
  label,
  type,
  theme = 'teal',
  meta: { touched, error, warning }
}
  : FieldType) => (
    <div className={styles[theme]}>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {
          touched && (
            (error && <Error error={error} />) ||
            (warning && <Warning warning={warning} />)
          )
        }
      </div>
    </div>
  )
