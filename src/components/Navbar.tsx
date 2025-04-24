import  { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: FC = () => {
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <ul className="flex space-x-6 p-4">
        <li>
          <Link
            to="/"
            className={pathname === '/' ? 'underline text-primary' : 'text-gray-700'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={pathname === '/about' ? 'underline text-primary' : 'text-gray-700'}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
