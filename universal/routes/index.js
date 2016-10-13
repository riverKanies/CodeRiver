import LayoutCore from 'layouts/LayoutCore'
import Home from 'layouts/Home'

import LayoutSidebar from 'layouts/LayoutSidebar'
import Counter from 'modules/Counter'
import Markdown from 'components/Markdown'
import SignupForm from 'components/SignupForm'
import Welcome from 'components/Welcome'

export const createRoutes = (store) => ({
  path: '/',
  component: LayoutCore,
  indexRoute: Home,
  childRoutes: [
    {
      path: 'react',
      component: LayoutSidebar,
      childRoutes: [
        {
          path: 'counter',
          component: Counter(store)
        },
        {
          path: 'markdown',
          component: Markdown
        }
      ]
    }, {
      path: 'signup',
      component: SignupForm
    },
    {
      path: 'welcome',
      component: Welcome
    }
  ]
})

export default createRoutes
