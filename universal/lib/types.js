/* @flow */
export type NavElement = {
  to: string,
  className: string,
  activeClassName: string,
  text: string,
  id: string
}

export type Form = {
  formData: Object,
  handleSubmit: Function,
  Field: Function,
  FieldArray: Function,
  pristine: bool,
  reset: Function,
  skip: Function,
  submitting: bool
}

export type Field = {
  accept: string,
  input: Object,
  label: string,
  meta: Object,
  multiple: bool,
  options: Array<mixed>,
  placeholder: string,
  type: string,
}

export type MediumPost = {
  cover_image: string,
  meduim_uuid: string,
  tags: Array<string>,
  title: string
}

