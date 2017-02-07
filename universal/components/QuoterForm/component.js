import React from 'react'
import styles from './styles'
import type { Form as FormType } from 'lib/types'
import Input from 'components/Input'
import { Field } from 'redux-form'

import Appendix from './ninjaQuoterApiAppendix'

function renderErrors(errors) {
  if (errors.length == 0) return ''
  return (<div style={{color: 'red'}}>
    <strong>Some form values were invalid:</strong>
    <ul>
      {errors.map((e)=>{
        return <li key={e.field}><strong >{e.field}: {e.message}</strong></li>
      })}
    </ul>
  </div>)
}

export default function Form (props) {
  const { handleSubmit } = props
  const textStyles = {float: "left", marginRight: "0.3em", marginBottom: '2px', marginTop: "2px"}
  return (
    <form className={styles.myProfile} onSubmit={handleSubmit}>
      {renderErrors(props.quoterErrors)}
      <fieldset className={styles.accountAbout}>
        <Field
          component={Input}
          theme='thriveInput'
          type='select'
          name='state'
          label='State'
          selectArray={Appendix.states}
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='birthdate'
          name='birthdate'
          label='Birthdate'
          example='mm-dd-yyyy'
        />
        <div>
          <text style={textStyles}>I am</text>
          <Field
            component={Input}
            theme='thriveInput'
            type='radio'
            name='gender'
            label='Male'
            value='m'
          />
          <Field
            component={Input}
            theme='thriveInput'
            type='radio'
            name='gender'
            label='Female'
            value='f'
          />
          <text style={textStyles}>and I </text>
          <Field
            component={Input}
            theme='thriveInput'
            type='radio'
            name='smoker'
            label='do'
            value='true'
          />
          <Field
            component={Input}
            theme='thriveInput'
            type='radio'
            name='smoker'
            label='do not'
            value='false'
          />
          <text style={textStyles}>smoke.</text>
        </div>
        <Field
          component={Input}
          theme='thriveInput'
          type='select'
          name='rate_class'
          label='Rate Class'
          selectArray={Appendix.rateClasses}
        />
        {(props.message) ? <p>{props.message}</p> : null }
      </fieldset>
      {renderErrors(props.quoterErrors)}
      <fieldset className={styles.save}>
        <input
          className={styles.submit}
          type='submit'
        />
      </fieldset>
    </form>
  )
}
