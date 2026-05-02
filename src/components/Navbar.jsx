import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar no-print">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          My Fresh Dinner
        </Link>
        <span className="navbar-tagline">Simple recipes, fresh every night</span>
      </div>
    </nav>
  )
}
