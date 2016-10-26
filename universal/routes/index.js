import Calendar from 'components/Calendar'
import Content from 'layouts/Content'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import Learn from 'layouts/Learn'
import Microsteps from 'layouts/Microsteps'
import SignupForm from 'components/SignupForm'
import Thrive from 'layouts/Thrive'
import Welcome from 'components/Welcome'

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
