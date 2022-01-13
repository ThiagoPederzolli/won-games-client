import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game infos', () => {
    renderWithTheme(<GameInfo {...props} />)

    //esperar por um heading(title)
    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    //esperar por description
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210.00/i)).toBeInTheDocument()
    //esperar pelo price
  })
  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    //esperar botao add to cart
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    //esperar botao add to wishlist
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
