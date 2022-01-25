import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'
import theme from 'styles/theme'

describe('<Heading />', () => {
  it('should render the heading with white color by default', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        color: '#FAFAFA'
      }
    )

    // expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the heading with color black if color is passed', () => {
    renderWithTheme(<Heading color="black">Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        color: '#030517'
      }
    )
  })

  it('should render the heading with a line in the left if lineLeft is true', () => {
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>)

    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        'border-left': `0.7rem solid ${theme.colors.secondary}`
      }
    )
  })

  it('should render the heading with a line in the bottom if lineBottom is true', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /Most Populars/i })
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })
})
