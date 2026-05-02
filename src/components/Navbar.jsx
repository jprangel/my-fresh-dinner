import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar no-print">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          My Fresh<span>Dinner</span>
        </Link>
        <div className="nav-links">
          <a href="/">Recipes</a>
        </div>
      </div>
    </nav>
  )
}
