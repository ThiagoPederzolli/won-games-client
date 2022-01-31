import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  // JSX.Element é uma tipagem ainda mais genérica que ReactNode
  // Com ela permitimos qualquer tipo de Elemento JSX
  icon?: JSX.Element
  // Para ações de click, trabalhamos com a tipagem do MouseEvent,
  // e especificamos que seu elemento é um HTMLButton
  // ---------------------------------------------------
  // Quando em uma tipagem, o termo void for definido
  // significa que a função não retornará algo, mas executará algum código
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} size={size} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
