import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

// Pick é um método do TS que nos ajuda a pegar propriedades específicas
// de uma interface, abaixo estamos pegando só a prop 'size' da interface ButtonProps
type WrapperProps = Pick<ButtonProps, 'size'>

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
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
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

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
