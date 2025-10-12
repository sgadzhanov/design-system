import { useState } from 'react'
import Input from '../Input'

export default function PasswordInput() {
  const [password, setPassword] = useState('')

  return (
    <Input
      id="password"
      label="Password"
      type="password"
      value={password}
      handleChange={(e) => setPassword(e.target.value)}
      placeholder="••••••••"
      required
    />
  )
}
