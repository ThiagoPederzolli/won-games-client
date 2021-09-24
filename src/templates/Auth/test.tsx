import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render logos, title and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verificar se tem duas logos
    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)
    // verificar se tem o heading do banner
    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()
    // verificar se em o subtitle
    expect(
      screen.getByRole('heading', {
        name: /A WON é a melhor e mais completa plataforma de games/i
      })
    ).toBeInTheDocument()

    // verificar se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /auth title/i
      })
    ).toBeInTheDocument()
    // verifica se o children está sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
