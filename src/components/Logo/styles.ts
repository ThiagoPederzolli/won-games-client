import styled, { css } from 'styled-components'
// styled-media-query é uma lib que auxilia
// na responsividade de componentes e paginas
// possui por padrão 4 breakpoints:
// - huge: 1440px
// - large: 1170px
// - medium: 768px
// - small: 450px
// porém esses números podem ser sobrescritos
// ou até mesmo criados novos breakpoints
// com esses números, podemos usar três métodos:
// lessThan(breakpoint ou size) - aplicará o estilo em larguras menores que.
// greaterThan(breakpoint ou size) - aplicará o estilo em larguras maiores que.
// between(breakpoint ou size inicial, breakpoint ou size final) - aplicará o estilo em larguras entre valor inicial e final
import media from 'styled-media-query'
import { LogoProps } from '.'

// modifiers são métodos criados para gerar mudança de estilo de forma
// dinâmica de acordo com o valor de prop que o componente receber
const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.5rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    // o uso da excalamação(non-null assertion) indica que
    // mesmo ciente de que é um valor opcional, temos certeza
    // que o número está sendo passado
    color: ${theme.colors[color!]};

    // o uso de duas exclamações serve para o TS transformar
    // em booleano, ou seja size deixa de ser uma string
    // e vira um true ou false, se estivesse com 3 exclamações
    // ele ia considerar true quando size fosse false
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
