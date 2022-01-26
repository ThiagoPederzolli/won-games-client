import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

// keyof é um helper do TS que permite pegar as chaves de um objeto(type/interface)
// no caso abaixo DefaultBreakpoints
// assim o type breakpoint recebe as chaves de DefaultBreakpoints
type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
