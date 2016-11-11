import Content from 'layouts/Content'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Microsteps from 'layouts/Microsteps'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import Learn from 'layouts/Learn'
import SignupForm from 'components/SignupForm'
import LoginForm from 'components/LoginForm'
import Thrive from 'layouts/Thrive'
import Engage from 'layouts/Engage'
import Pulse from 'layouts/Pulse'
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
        path: 'pulse',
        component: Pulse
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
        path: 'signup',
        component: SignupForm
      },
      {
        path: 'login',
        component: LoginForm
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
