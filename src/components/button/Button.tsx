import type { ReactNode } from 'react'
import type { ButtonSize, ButtonVariant, ButtonType } from '../../types'
import './Button.css'

type ButtonProps = {
  isLoading?: boolean
  isDisabled?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  type?: ButtonType
  handleClick?: () => void
  className?: string
  children?: ReactNode
}

export default function Button({
  isLoading = false,
  isDisabled = false,
  size = 'md',
  variant = 'contained',
  type = 'button',
  className = '',
  handleClick,
  children,
}: ButtonProps) {

  const buttonClass = `btn btn--${variant} btn--${size} ${className}`

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? 'Please wait...' : children}
    </button>
  )
}
