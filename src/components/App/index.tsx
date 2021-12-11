import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from '../home'
import { Pokedex } from '../pokedex'
import { NotFound } from '../notfound'

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
