import Content from 'layouts/Content'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import SignupForm from 'components/SignupForm'
import Thrive from 'layouts/Thrive'
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
        path: 'engage',
        component: Engage
      },
      {
        path: '*',
        component: Content
      }
    ]
  }
])

export default createRoutes
