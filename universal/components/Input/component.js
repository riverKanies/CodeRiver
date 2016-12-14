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
  theme = 'thriveInput',
  meta: { touched, error, warning }
}: FieldType) => {
  if (type === 'checkbox') {
    return (
      <div className={styles[theme]}>
        <div className={styles.inputWrap}>
          <label className={styles.label}>
            <input className={styles.check} {...input} placeholder={label} type={type} />
            {label}
          </label>
        </div>
      </div>
    )
  }

  return (
    <div className={styles[theme]}>
      <div className={styles.inputWrap}>
        <label className={styles.label}>{label}</label>
        <input className={styles.text} {...input} placeholder={label} type={type} />
        {
          touched && (
            (error && <Error error={error} />) ||
            (warning && <Warning warning={warning} />)
          )
        }
      </div>
    </div>
  )
}
