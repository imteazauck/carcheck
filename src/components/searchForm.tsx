import { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm: FC = () => {
  const [vrm, setVrm] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = vrm.trim().toUpperCase()
    const regex = /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/
    if (!regex.test(trimmed)) {
      setError('Enter a valid UK reg (e.g. AB12 CDE)')
      return
    }
    navigate(`/results?reg=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="sticky bottom-0 bg-white py-4 px-6 shadow-inner flex gap-2"
      noValidate
    >
      <label htmlFor="mobile-vrm" className="sr-only">
        Registration
      </label>
      <input
        id="mobile-vrm"
        type="text"
        value={vrm}
        onChange={e => {
          setVrm(e.target.value)
          setError('')
        }}
        placeholder="AB12 CDE"
        aria-invalid={!!error}
        className="flex-1 border rounded p-2 focus:outline-none focus:ring"
      />
      <button type="submit" className="btn-primary px-4">
        Go
      </button>
      {error && <p className="text-error text-sm">{error}</p>}
    </form>
  )
}

export default SearchForm
