import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen, theme }) => css`
    opacity: ${isOpen ? 1 : 0};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    // overflow: hidden, evita a criação de algum scroll
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    // pointer-events serve para habilitar ou desabilitar
    // a possibilidade de click em um elemento
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.xsmall};
      /* transform: ${isOpen ? 'translate&(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out; */
    }

    ${RegisterBox} {
      /* transform: ${isOpen ? 'translate&(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out; */
    }
  `}
`

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    // transform utilizado para balanceamento no tamanho da logo
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    // flex-grow faz crescerem e ocupar o espaço
    // máximo que tiver para os elementos
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absoulte;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: : hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      margin: ${theme.spacings.xxsmall} 0;
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
    text-decoration: none;
  `}
`
