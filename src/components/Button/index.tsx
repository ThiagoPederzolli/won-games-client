import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
  as?: ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  minimal = false,
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    size={size}
    hasIcon={!!icon}
    {...props}
    minimal={minimal}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
