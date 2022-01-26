import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  // JSX.Element é uma tipagem ainda mais genérica que ReactNode
  // Com ela permitimos qualquer tipo de Elemento JSX
  icon?: JSX.Element
  // Para ações de click, trabalhamos com a tipagem do MouseEvent,
  // e especificamos que seu elemento é um HTMLButton
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

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
