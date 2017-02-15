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
  selectArray,
  example,
  meta: { touched, error, warning },
  onChangeFunc
}: FieldType) => {

  if (type === 'radio') {
    return (
      <div className={styles[theme]}>
        <div >
          <label className={input.checked ? styles.radioHighlight : styles.radio}>
            <input className={styles.radioInput} {...input} type={type} />
            {label}
          </label>
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

  if (type === 'select') {
    return (
      <div className={styles[theme]}>
        <div className={styles.inputWrap}>
          <label className={styles.label}>
            {label}
            <select {...input}>
              {selectArray.map((opt)=>{
                return <option key={opt.name} value={opt.value}>{opt.name}</option>
              })}
            </select>
            {
              touched && (
                (error && <Error error={error} />) ||
                (warning && <Warning warning={warning} />)
              )
            }
          </label>
        </div>
      </div>
    )
  }

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
        <input className={styles.text}
          {...input}
          placeholder={example || label}
          type={type}
          onChange={onChangeFunc ? onChangeFunc(input.onChange) : input.onChange} />
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
