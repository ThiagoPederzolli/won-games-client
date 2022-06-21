import { screen } from '@testing-library/react'
import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    // usamos o parentElement para ser possível acessar o elemento pai
    // pois estamos testando a div que engloba a logo, mas conseguimos pegar só a logo
    expect(screen.getByLabelText(/logo won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })

    // expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/logo won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal size by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/logo won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a large size when size is passed', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/logo won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile is true', () => {
    renderWithTheme(<Logo hideOnMobile />)

    // to toHaveStyleRule é parte da lib 'jest-styled-components'
    // o toHaveStyleRule é útil para testes de responsividade
    // ou de mudanças de estilo mediante a ações
    // pois ele aceita receber media-queries ou modifiers
    expect(
      screen.getByLabelText(/logo won Games/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
