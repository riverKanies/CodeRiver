import React from 'react'
import styles from './styles'
import type { Form as FormType } from 'lib/types'
import Input from 'components/Input'
import { Field } from 'redux-form'

import Appendix from './ninjaQuoterApiAppendix'

export default function Form (props: FormType) {
  const { handleSubmit } = props

  return (
    <form className={styles.myProfile} onSubmit={handleSubmit}>
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
          example='yyyy-mm-dd'
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='select'
          name='gender'
          label='Gender'
          selectArray={Appendix.gender}
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='height'
          name='height'
          label='Height'
          example='inches ex: 70'
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='weight'
          name='weight'
          label='Weight'
          example='pounds ex: 150'
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='select'
          name='rate_class'
          label='Rate Class'
          selectArray={Appendix.rateClasses}
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='select'
          name='smoker'
          label='Smoker'
          selectArray={Appendix.smoker}
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='coverage'
          name='coverage'
          label='Coverage'
          example='dollars ex: 100000'
        />
        <Field
          component={Input}
          theme='thriveInput'
          type='select'
          name='term'
          label='Term'
          selectArray={Appendix.terms}
        />
        {(props.message) ? <p>{props.message}</p> : null }
      </fieldset>
      <fieldset className={styles.save}>
        <input
          className={styles.submit}
          type='submit'
        />
      </fieldset>
    </form>
  )
}
