/* @flow */
import React from 'react'

export default function ({ error } : { error?: String}) {
  if (!error) return null

  return (
    <div>
      <strong>{error}</strong>
    </div>
  )
}
