import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from '../Home'
import { Pokedex } from '../Pokedex'
import { NotFound } from '../NotFound'

import '../../style/App.css'

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokedex" component={Pokedex} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
