import { useState } from 'react'
import Input from '../Input'

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Input
      id='search'
      label='Search'
      type='search'
      value={searchTerm}
      handleChange={(e) => setSearchTerm(e.target.value)}
      placeholder='Search for something...'
    />
  )
}
