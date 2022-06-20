import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

// tipos que aglobam propriedades comuns a elementos específicos
// o Anchor inclui props do elemento <a>
// o Button inclui props do elemento <button>
// isso ajuda também a não precisarmos mais passar na mão algumas props
// como o onClick que passavamos em ButtonProps
// pois onClick já é uma prop presente no ButtonHTML...
// o mesmo serve para o children, por exemplo
// que também pode ser removido
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  // children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  // JSX.Element é uma tipagem ainda mais genérica que ReactNode
  // Com ela permitimos qualquer tipo de Elemento JSX
  icon?: JSX.Element
  // Para ações de click, trabalhamos com a tipagem do MouseEvent,
  // e especificamos que seu elemento é um HTMLButton
  // ---------------------------------------------------
  // Quando em uma tipagem, o termo void for definido
  // significa que a função não retornará algo, mas executará algum código
  // onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  // ---------------------------------------
  // React.ElementType serve para tipar uma prop que servirá para
  // informar qual o tipo que o elemento terá.
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    size={size}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
