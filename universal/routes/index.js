
import Home from 'layouts/Home'
import Quote from 'layouts/Quote'
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
        path: '/quote',
        component: Quote.component
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
