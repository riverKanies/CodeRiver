import LayoutCore from 'layouts/LayoutCore'
import Home from 'layouts/Home'

import SignupForm from 'components/SignupForm'
import Welcome from 'components/Welcome'

export const createRoutes = (store) => ({
  path: '/',
  component: LayoutCore,
  indexRoute: Home,
  childRoutes: [
    {
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
