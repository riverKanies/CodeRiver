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

  if (type === 'quoteInput') {
    return (
      <label className={styles.formBlockWrap}>
          <input className={styles.planMadeText}
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
      </label>
    )
  }

  if (type === 'radio') {
    return (
      <label className={input.checked ? styles.radioHighlight : styles.radio}>
        <input className={styles.radioInput} {...input} type={type} />
        {label}
        {
          touched && (
            (error && <Error error={error} />) ||
            (warning && <Warning warning={warning} />)
          )
        }
      </label>
    )
  }

  if (type === 'select') {
    let special = {}
    if (input.value == '') special.value = 'Select a State'
    return (
      <div className={styles.formBlockWrap}>
        <select className={styles.select} {...input} {...special}>
          <option disabled >Select a State</option>
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

  if (type === 'textarea') {
    return (
      <div className={styles[theme]}>
        <div className={styles.inputWrap}>
          <label className={styles.label}>{label}</label>
          <textarea className={styles.text} {...input} placeholder={example || label} />
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

  return (
    <div className={styles[theme]}>
      <div className={styles.inputWrap}>
        <label className={styles.label}>{label}</label>
        <input className={styles.text} {...input} placeholder={example || label} type={type} />
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
