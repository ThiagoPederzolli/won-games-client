import { fireEvent, render, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the GameCard', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/300x140'
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />)
    // preço não tenha line-through
    expect(screen.getByText(/R\$ 235,00/i)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço tenha o background secundário
    expect(screen.getByText(/R\$ 235,00/i)).toHaveStyle({
      'background-color': theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)
    // preço tenha line-through (200)
    expect(screen.getByText(/R\$ 235,00/i)).toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText(/R\$ 15,00/i)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getByLabelText(/remove from wishlist/i))

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard {...props} ribbon="My Ribbon" color="secondary" size="small" />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    })
    expect(ribbon).toBeInTheDocument()
  })
})
