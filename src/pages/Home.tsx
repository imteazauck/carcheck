import { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const [vrm, setVrm] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = vrm.trim().toUpperCase()
    const regex = /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/
    if (!regex.test(trimmed)) {
      setError('Please enter a valid UK registration (e.g. AB12 CDE)')
      return
    }
    navigate(`/results?reg=${encodeURIComponent(trimmed)}`)
  }

  return (
    <main className="hero p-6">
      <h1 className="text-3xl font-bold mb-4">Get Your Free Car History Report</h1>
      <form onSubmit={handleSubmit} noValidate className="space-y-2">
        <label htmlFor="vrm-input" className="sr-only">
          Registration number
        </label>
        <input
          id="vrm-input"
          type="text"
          value={vrm}
          onChange={e => {
            setVrm(e.target.value)
            setError('')
          }}
          placeholder="e.g., AB12 CDE"
          aria-invalid={!!error}
          aria-describedby={error ? 'vrm-error' : undefined}
          className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-primary"
        />
        {error && (
          <p id="vrm-error" className="text-error text-sm">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="btn-primary w-full py-2 rounded font-semibold"
        >
          Check Your Car Now
        </button>
      </form>
    </main>
  )
}

export default Home
