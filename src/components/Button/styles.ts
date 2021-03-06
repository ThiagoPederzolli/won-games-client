import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'
// Pick é um método do TS que nos ajuda a pegar propriedades específicas
// de uma interface, abaixo estamos pegando só a prop 'size' da interface ButtonProps
export type WrapperProps = {
  hasIcon: boolean
  // o & depoi das chaves, representa o Union, que permite
  // unir as tipagens exclusivas de um elemento,
  // como as definidas só para o WrapperProps
  // junto com as importadas do ButtonProps
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      // essa sintaxe serve para garantir que pegaremos o próximo elemento
      // no caso daqui, garantimos que o margin-left será aplicado exclusivamente
      // em um span que esteja seguindo um svg, se não houver svg
      // a margin-left não será aplicada
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    // linear-gradient é um método do background para quando
    // queremos fazer um fundo que vá de um tom/cor
    // até outro, por exemplo, começar de um rosa mais claro
    // e ir até um rosa mais escuro, ou começar no cinza
    // e terminar no preto
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: ${theme.font.family};

    &:hover {
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d958a6 50%)'};
    }
    // o uso da dupla negação !! em booleanos é aconselhavel quando
    // a propriedade é opcional, pois ela pode vir como undefined.
    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${disabled && wrapperModifiers.disabled()};
  `}
`
