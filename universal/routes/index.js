import Employees from 'layouts/Employees'
import Employers from 'layouts/Employers'
import Brokers from 'layouts/Brokers'
import FAQs from 'layouts/FAQs'
import Licenses from 'layouts/Licenses'

import ContactUs from 'layouts/ContactUs'
import Press from 'layouts/Press'

import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import SignUp from 'layouts/SignUp'
import Welcome from 'components/Welcome'
import Profile from 'layouts/Profile'
import Login from 'layouts/Login'
import ResetPassword from 'layouts/ResetPassword'
import RegistrationSuccess from 'layouts/RegistrationSuccess'
import NotFound from 'layouts/NotFound'

function handleUpdate (prevState, nextState) {
  if (nextState.location.action !== 'POP') {
    window.scrollTo(0, 0)
  }
}

export const createRoutes = (store) => ([
  {
    path: '/',
    component: LayoutCore,
    indexRoute: Home,
    onChange: handleUpdate,
    childRoutes: [
      {
        path: '/licenses',
        component: Licenses
      },
      {
        path: '/faqs',
        component: FAQs
      },
      {
        path: '/brokers',
        component: Brokers
      },
      {
        path: '/employers',
        component: Employers
      },
      {
        path: '/employees',
        component: Employees
      },
      {
        path: '/press',
        component: Press
      },
      {
        path: '/contactus',
        component: ContactUs
      },
      {
        path: '/home',
        component: Home.component
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
        path: 'profile',
        component: Profile
      },
      {
        path: 'reset-password',
        component: ResetPassword
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'registration-success',
        component: RegistrationSuccess
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
])

export default createRoutes
