import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/population-zero-card.png',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should be render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)
    // renderizar o GameCard

    // verificar se tem title
    // verificar se tem developer
    // verificar se tem image
    // verificar se tem price

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(screen.getByText(/R\$ 235,00/i)).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
