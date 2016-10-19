import LayoutCore from 'layouts/LayoutCore'
import Home from 'layouts/Home'
import About from 'layouts/About'

import SignupForm from 'components/SignupForm'
import Welcome from 'components/Welcome'
import Calendar from '../components/Calendar'

export const createRoutes = (store) => ([{
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
}, {
  path: '/calendar',
  component: Calendar
}])

export default createRoutes
