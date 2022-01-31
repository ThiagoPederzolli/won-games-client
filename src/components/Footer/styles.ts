import styled, { css } from 'styled-components'
import media from 'styled-media-query'

// com as libs CSS-in-JS podemos importar estilos de outros componentes
// que o nosso componente atual use, para sosbrescerver ou adicionar
// um estilo específico para o cenário atual
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main`
  // O estilo é importado como um objeto
  // tendo todos seus estilos acessíveis usando o ponto
  // dai é só sobrescrever ou adicionar um novo estilo
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
