import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { Search } from './components/Search'

import './style/index.css'
import './style/app.css'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}