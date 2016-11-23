import Content from 'layouts/Content'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Microsteps from 'layouts/Microsteps'
import Give from 'layouts/Give'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import Learn from 'layouts/Learn'
import SignUp from 'layouts/SignUp'
import ThriveTech from 'layouts/ThriveTech'
import Thrive from 'layouts/Thrive'
import Pulse from 'layouts/Pulse'
import PulseScore from 'containers/PulseScore'
import GlassDoor from 'layouts/GlassDoor'
import Engage from 'layouts/Engage'
import Welcome from 'components/Welcome'
import Profile from 'layouts/Profile'
import Login from 'layouts/Login'
import Pathway from 'layouts/Pathway'
import Journey from 'layouts/Journey'

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
        path: 'pathways/:pathwayId/journeys/:journeyId',
        component: Journey
      },
      {
        path: 'pathways/:id',
        component: Pathway
      },
      {
        path: 'learn',
        component: Learn
      },
      {
        path: 'give',
        component: Give
      },
      {
        path: 'thrivetech',
        component: ThriveTech
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
        path: 'pulsescore',
        component: PulseScore
      },
      {
        path: 'pledge',
        component: GlassDoor
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
        path: 'profile',
        component: Profile
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: ':page_id',
        component: Content
      }
    ]
  }
])

export default createRoutes
