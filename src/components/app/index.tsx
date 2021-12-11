import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../home'
import { Pokedex } from '../pokedex'
import { NotFound } from '../notfound'

import '../../style/index.css'

export const App = () => (
  <Router>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)
