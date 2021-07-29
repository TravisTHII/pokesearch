import { Link } from 'react-router-dom'

export const NotFound = () => (
  <div className="not_found flex_ui">
    <div className="not_found-container">
      <h1>404 Not found...</h1>
      <Link to="/" className="go_home flex_ui">
        <p>Go Home</p>
      </Link>
    </div>
  </div>
)
