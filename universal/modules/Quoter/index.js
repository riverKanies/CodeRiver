/* @flow */
import { httpGet } from 'lib/http'


export const KEY = 'quoter'

export const actions = {
  quotesPending: `${KEY}/quotes-pending`,
  quotesSuccess: `${KEY}/quotes-success`,
  quotesFailure: `${KEY}/quotes-failure`
}

// Reducer
export const initialState = {
  quotes: [],
  pending: false,
  errors: []
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.quotesPending:
      return {
        ...state,
        quotes: [],
        pending: true,
        errors: []
      }

    case actions.quotesSuccess:
      const errors = action.data.errors
      if (errors) {
        return {
          ...state,
          quotes: [],
          pending: false,
          errors: errors
        }
      }
      const quotes = action.data.results.sort((a, b)=> (a - b))
      return {
        ...state,
        quotes,
        pending: false,
        errors: []
      }

    case actions.quotesFailure:
      //console.log('failure', action)
      return {
        ...state,
        quotes: [],
        pending: false,
        errors: [{field: 'request', message: 'failed to get quotes'}]
      }

    default:
      return state
  }
}

export function getQuotes(data: any) {
  // get url params from data and use in httpGet below
  if (!data.coverage) data.coverage = "500000"
  console.log('getting quotes', data)

  let url = '/api/quotes'
  const expectedParams = ['state', 'birthdate', 'gender', 'rate_class', 'smoker', 'coverage', 'term']
  expectedParams.forEach((p, i)=>{
    const prompt = (i==0) ? '?' : '&'
    url = url.concat(prompt, p, '=', data[p])
  })
  console.log('url with params: ', url)
  return {
    types: [
      actions.quotesPending,
      actions.quotesSuccess,
      actions.quotesFailure
    ],
    callAPI: () => httpGet(url)
  }
}
