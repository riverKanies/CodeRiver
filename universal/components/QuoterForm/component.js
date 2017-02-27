import React from 'react'
import styles from './styles'
import buttonStyles from 'styles/button.css'
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
  const textStyles = {float: "left", marginRight: "0.3em", marginBottom: '5px', marginTop: "2px"}
  const rateClassOptions = [
    {label: 1, value: 't1'},
    {label: 2, value: 's'},
    {label: 3, value: 'sp'},
    {label: 4, value: 'p'},
    {label: 5, value: 'pp'}]
  return (
    <form className={styles.myProfile} onSubmit={handleSubmit}>
      {renderErrors(props.quoterErrors)}
      <text className={styles.text}>I'm a</text>
      <Field
        component={Input}
        theme='thriveInput'
        type='radio'
        name='gender'
        label='Man'
        value='m'
      />
      <Field
        component={Input}
        theme='thriveInput'
        type='radio'
        name='gender'
        label='Woman'
        value='f'
      />
      <text className={styles.text}>and I live in</text>
      <Field
        component={Input}
        theme='thriveInput'
        type='select'
        name='state'
        label='State'
        selectArray={Appendix.states}
      />
      <br/>
      <br/>
      <text className={styles.text}>My birthdate is</text>
      <Field
        component={Input}
        theme='thriveInput'
        type='quoteInput'
        name='birthdate'
        example='MM/DD/YYYY'
        onChangeFunc={(onChangeFunc)=>{
          return (e)=>{
            const length = e.target.value.length
            if (length == 3 || length == 6) {
              if (e.target.value.slice(-1) != '/') {
                const pre = e.target.value.slice(0,-1)
                const post = e.target.value.slice(-1)
                e.target.value = `${pre}/${post}`
              }
            }
            return onChangeFunc(e)
          }
        }}
      />
      <br/>
      <br/>
      <text className={styles.text}>I</text>
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
      <text className={styles.text}>use tobacco</text>
      <br/>
      <br/>
      <text className={styles.text}>On a scale from 1-5 I rate my overall health as </text>
      <br/>
      {rateClassOptions.map((op,i)=>{
        return (<Field key={i}
          component={Input}
          theme='thriveInput'
          type='radio'
          name='rate_class'
          label={op.label}
          value={op.value}
        />)
      })}
      {(props.message) ? <p>{props.message}</p> : null }
      {renderErrors(props.quoterErrors)}
      <br/>
      <input
        className={buttonStyles.button}
        style={{float: 'none', display: 'inline-block', marginTop: '30px'}}
        type='submit'
        value='Get Quotes'
      />
    </form>
  )
}
