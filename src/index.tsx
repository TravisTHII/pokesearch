import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { App } from './components/App'

const client = new QueryClient()

render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.querySelector('#app')
)
