import Content from 'layouts/Content'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Microsteps from 'layouts/Microsteps'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import Learn from 'layouts/Learn'
import SignUp from 'layouts/SignUp'
import Thrive from 'layouts/Thrive'
import Pulse from 'layouts/Pulse'
import Engage from 'layouts/Engage'
import Welcome from 'components/Welcome'

export const createRoutes = (store) => ([
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
        path: 'microsteps',
        component: Microsteps
      },
      {
        path: 'learn',
        component: Learn
      },
      {
        path: 'thrive',
        component: Thrive
      },
      {
        path: 'pulse',
        component: Pulse
      },
      {
        path: 'signup',
        component: SignUp
      },
      {
        path: 'welcome',
        component: Welcome
      },
      {
        path: 'engage',
        component: Engage
      },
      {
        path: ':page_id',
        component: Content
      }
    ]
  }
])

export default createRoutes
