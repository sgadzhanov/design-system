import { useState } from 'react'
import Input from '../Input'

export default function EmailInput() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setEmail(inputValue)

    // just basic validation (regex would be the ultimate solution)
    setError(inputValue.includes('@') ? 'Please enter a valid email.' : '')
    console.log('Your value is', inputValue)
  }

  return (
    <Input
      id='email'
      label='Email'
      type='email'
      value={email}
      handleChange={handleChange}
      placeholder='you@example.com'
      error={error}
      required
    />
  )
}
