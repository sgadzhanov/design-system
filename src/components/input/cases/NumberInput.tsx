import { useState } from 'react'
import Input from '../Input'

export default function NumberInput() {
  const [age, setAge] = useState('')

  return (
    <Input
      id='age'
      label='Age'
      type='number'
      value={age}
      handleChange={(e) => setAge(e.target.value)}
      placeholder='Enter your age'
    />
  )
}
