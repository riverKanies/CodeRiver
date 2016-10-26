import LayoutCore from 'layouts/LayoutCore'
import Home from 'layouts/Home'
import Thrive from 'layouts/Thrive'
import Learn from 'layouts/Learn'
import Content from 'layouts/Content'

import SignupForm from 'components/SignupForm'
import Welcome from 'components/Welcome'
import Calendar from '../components/Calendar'

export const createRoutes = (store) => ([{
  path: '/',
  component: LayoutCore,
  indexRoute: Home,
  childRoutes: [
    {
      path: 'thrive',
      component: Thrive
    },
    {
      path: 'signup',
      component: SignupForm
    },
    {
      path: 'welcome',
      component: Welcome
    },
    {
      path: 'learn',
      component: Learn
    },
    {
      path: '*',
      component: Content
    }
  ]
}, {
  path: '/calendar',
  component: Calendar
}])

export default createRoutes
