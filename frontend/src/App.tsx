import GlobalStyle from './styles/global'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/:id'>
            <UserDetails />
          </Route>
        </Switch>
      </Router>

      <GlobalStyle />
    </>
  )
}
