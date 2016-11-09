import React from 'react'

import type { Field as FieldType } from 'lib/types'

function SearchField ({ input, label, type } : FieldType) {
  return (
    <input {...input} placeholder={label} type={type} />
  )
}

export default function SearchForm () {
  return (
    <SearchField />
  )
}

// reduxform => SearchForm
//  => MicrostepsFilter
//
//  initial state, we just get the informational microsteps (all of them) and
//  display the list
//
//  as a user starts typing, we do match or filter over that list
//  use a selector to perform this filter so that what is displayed in the list
//  is the following
//
//  intersection of filterString and available microsteps titles
//
//
//  store: {
//
//  }
