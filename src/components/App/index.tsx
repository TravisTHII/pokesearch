import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from '../Header'
import { Home } from '../Home'
import { NotFound } from '../NotFound'

import '../../style/App.css'

export const App = () =>
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>