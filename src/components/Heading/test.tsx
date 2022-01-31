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
        'border-left': `0.7rem solid ${theme.colors.primary}`
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

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Most Populars</Heading>)
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        'font-size': '1.6rem'
      }
    )

    expect(
      screen.getByRole('heading', { name: /Most Populars/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Most Populars
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Most Populars/i })
    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })
    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Most Populars
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Most Populars/i })
    expect(heading).toHaveStyle({
      'border-left': ` 0.7rem solid ${theme.colors.secondary}`
    })
    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    )
  })
})
