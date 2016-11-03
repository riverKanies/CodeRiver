/* @flow */
import React from 'react'

import type { Field as FieldType } from 'lib/types'

export default ({ input, label, type, meta: { touched, error, warning } }
  : FieldType) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {
          touched && (
            (error && <span className='error'>{error}</span>) ||
            (warning && <span className='warning'>{warning}</span>)
          )
        }
      </div>
    </div>
  )
