/* eslint thrive-custom/arianna: 0 */
'use strict'

module.exports = {
  meta: {
    docs: {
      description: 'ensure correct spelling of Arianna',
      category: 'Stylistic Issues'
    },
    fixable: 'code'
  },

  create (context) {
    function catchAriannaMisspelling (node) {
      const sourceCode = context.getSourceCode().getText(node)
      const matches = sourceCode.match(/(arriana|ariana|arrianna)/gi)
      if (matches) {
        context.report({message: 'Potential misspelling of Arianna here.', node: node})
      }
    }

    return {
      Literal: function (node) {
        catchAriannaMisspelling(node)
      },
      TemplateLiteral: function (node) {
        catchAriannaMisspelling(node)
      },
      Identifier: function (node) {
        catchAriannaMisspelling(node)
      }
    }
  }
}
