import {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ForwardRefRenderFunction
} from 'react'
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

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    minimal = false,
    fullWidth = false,
    icon,
    ...props
  },
  ref
) => (
  <S.Wrapper
    fullWidth={fullWidth}
    size={size}
    hasIcon={!!icon}
    {...props}
    ref={ref}
    minimal={minimal}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
