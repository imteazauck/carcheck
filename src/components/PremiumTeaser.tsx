import { FC } from 'react'
import { Link } from 'react-router-dom'

const PremiumTeaser: FC = () => (
  <div className="p-6 bg-gray-50 rounded shadow-md text-center">
    <h2 className="text-2xl font-bold mb-4">Upgrade to Premium</h2>
    <p className="mb-6">
      Get full write-off details, finance status, ownership records and more.
    </p>
    <Link to="/pricing" className="btn-primary inline-block px-6 py-2">
      See Premium Features
    </Link>
  </div>
)

export default PremiumTeaser
