import { fireEvent, screen } from '@testing-library/react'
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
    // renderWithTheme(<GameCard {...props} />)
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

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    // renderiza o componente
    // preço não tenha line-through
    // preço tenha o background secundário
    const price = screen.getByText(/R\$ 235,00/i)
    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    // preço tenha line-through (200)
    // preço novo promocional não vai ter line-through (15)

    const price = screen.getByText(/R\$ 235,00/i)
    const promotionalPrice = screen.getByText(/R\$ 200,00/i)
    expect(price).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
