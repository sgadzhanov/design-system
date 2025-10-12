import { useState } from 'react'
import Input from '../Input'

export default function ErrorInput() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUsername(value)
    setError(value.trim() ? '' : 'Username is required.')
  }

  return (
    <Input
      id="username"
      label="Username"
      value={username}
      handleChange={handleChange}
      error={error}
      placeholder='Enter your username'
      required
    />
  )
}
