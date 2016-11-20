import React from 'react'
import type { Field as FieldType } from 'lib/types'

export default function ({
  input,
  type,
  placeholder
}: FieldType) {
  return (
    <input {...input} placeholder={placeholder} type={type} />
  )
}
