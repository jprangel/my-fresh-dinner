import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar no-print">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          My Fresh<span>Dinner</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={pathname === '/' ? 'nav-active' : ''}>Recipes</Link>
          <Link to="/about" className={pathname === '/about' ? 'nav-active' : ''}>About</Link>
        </div>
      </div>
    </nav>
  )
}
