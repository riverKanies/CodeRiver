import LayoutCore from 'layouts/LayoutCore'
import Home from 'layouts/Home'
import About from 'layouts/About'

import SignupForm from 'components/SignupForm'
import Welcome from 'components/Welcome'

export const createRoutes = (store) => ({
  path: '/',
  component: LayoutCore,
  indexRoute: Home,
  childRoutes: [
    {
      path: 'about',
      component: About
    },
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
