/* eslint thrive-custom/arianna: 0 */
'use strict'

const rule = require('../../../lib/rules/arianna')
const RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
})

const ruleTester = new RuleTester()

ruleTester.run('arianna', rule, {
  valid: [
    "{test: 'Test'}",
    'const temp = `this is another test`'
  ],
  invalid: [
    {
      code: "import dummyImage from './assets/arrianaH.jpg'",
      errors: [{
        message: 'Potential misspelling of Arianna here.',
        type: 'Literal'
      }]
    },
    {
      code: "{arrianna: 'test'}",
      errors: [{
        message: 'Potential misspelling of Arianna here.',
        type: 'Identifier'
      }]
    },
    {
      code: '`ariana`',
      errors: [{
        message: 'Potential misspelling of Arianna here.',
        type: 'TemplateLiteral'
      }]
    }
  ]
})
