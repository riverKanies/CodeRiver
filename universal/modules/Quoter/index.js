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
  error: null
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.quotesPending:
      return {
        ...state,
        quotes: [],
        pending: true,
        error: null
      }

    case actions.quotesSuccess:
      const quotes = JSON.parse(action.data.data).results
      return {
        ...state,
        quotes,
        pending: false,
        error: null
      }

    case actions.quotesFailure:
      return {
        ...state,
        quotes: [],
        pending: false,
        error: 'could not get quotes'
      }

    default:
      return state
  }
}

export function getQuotes(data: any) {
  // get url params from data and use in httpGet below
  console.log('getting quotes', data)
  let url = '/api/quotes'
  const expectedParams = ['state', 'birthdate', 'gender', 'height', 'weight', 'rate_class', 'smoker', 'coverage', 'term']
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
