import LayoutCore from 'layouts/LayoutCore'
import Home from 'layouts/Home'
import Microsteps from 'layouts/Microsteps'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import About from 'layouts/About'
import Learn from 'layouts/Learn'
import Content from 'layouts/Content'
import SignupForm from 'components/SignupForm'
import Welcome from 'components/Welcome'
import Calendar from '../components/Calendar'

export const createRoutes = (store) => ([
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/steps/:id',
    component: EmbeddedMicrostep
  },
  {
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
      },
      {
        path: 'learn',
        component: Learn
      },
      {
        path: 'microsteps',
        component: Microsteps.component
      },
      {
        path: '*',
        component: Content
      }
    ]
  }
])

export default createRoutes
