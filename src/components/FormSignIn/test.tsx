import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)
    // verificar o textfield de email
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')
    // verificar o textfield de password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    // verificar o buton
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    // verificar link do forgot password
    expect(
      screen.getByRole('link', { name: /Esqueceu sua senha\?/i })
    ).toBeInTheDocument()
  })
  it('should render the text to sign up', () => {
    renderWithTheme(<FormSignIn />)

    // verificar o texto
    expect(screen.getByText(/Ainda não tem uma conta\?/i)).toBeInTheDocument()

    // verificar o link
    expect(
      screen.getByRole('link', { name: /Cadastre-se/i })
    ).toBeInTheDocument()
  })
})
