import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  TruckIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface VehicleData {
  makeModel: string
  year: number
  motPassed: boolean
  motDate?: string
  taxValid: boolean
  taxExpiry?: string
  writeOff: boolean
}

const Results: FC = () => {
  const [params] = useSearchParams()
  const reg = params.get('reg') || ''
  const [data, setData] = useState<VehicleData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/car?reg=${encodeURIComponent(reg)}`)
        const json = await res.json()
        setData(json)
      } catch {
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [reg])

  if (loading) {
    return (
      <div role="status" className="flex justify-center items-center p-4">
        <svg
          className="animate-spin h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
        <span className="sr-only">Loading report...</span>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">No data found for registration: {reg}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 btn-secondary"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <main className="p-6 space-y-8">
      {/* Vehicle Specs */}
      <section>
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <TruckIcon className="h-6 w-6 mr-2" />
          Vehicle Specs
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <dt className="font-medium">Make &amp; Model</dt>
            <dd>{data.makeModel}</dd>
          </div>
          <div>
            <dt className="font-medium">Year</dt>
            <dd>{data.year}</dd>
          </div>
        </dl>
      </section>

      {/* MOT & Tax */}
      <section>
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <ShieldCheckIcon className="h-6 w-6 mr-2" />
          MOT &amp; Tax
        </h2>
        <ul className="space-y-2">
          <li>
            {data.motPassed ? (
              <span className="text-success">
                ✔ Passed last MOT on {data.motDate}
              </span>
            ) : (
              <span className="text-error">✖ No recent MOT</span>
            )}
          </li>
          <li>
            {data.taxValid ? (
              <span className="text-success">
                ✔ Tax valid until {data.taxExpiry}
              </span>
            ) : (
              <span className="text-error">✖ Tax expired</span>
            )}
          </li>
        </ul>
      </section>

      {/* Alerts & Write-Offs */}
      <section>
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
          Alerts &amp; Write-Offs
        </h2>
        {data.writeOff ? (
          <p className="text-error">⚠️ This vehicle is flagged as a write-off</p>
        ) : (
          <p className="text-success">No write-off records found</p>
        )}
      </section>
    </main>
  )
}

export default Results
