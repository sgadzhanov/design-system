import type { InputType } from '../../types'
import './Input.css'

type InputProps = {
  id: string
  label?: string
  type?: InputType
  name?: string
  value: string
  placeholder?: string
  error?: string
  required?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  id,
  label,
  type = 'text',
  name,
  value,
  placeholder = '',
  error,
  required = false,
  handleChange,
}: InputProps) {
  return (
    <div className='input-wrapper'>
      {label && (
        <label
          htmlFor={id}
          className='input-label'
        >
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        className={`input-field ${error ? 'input-field--error' : ''}`}
      />
      {error && (
        <span
          id={`${id}-error`}
          className='input-error'
        >
          {error}
        </span>
      )}
    </div>
  )
}
