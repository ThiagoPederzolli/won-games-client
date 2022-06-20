import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'
import theme from 'styles/theme'
import { AddShoppingCart } from '@styled-icons/material-outlined'

describe('<Button />', () => {
  it('should render the button with medium size by default', () => {
    renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
      'font-size': `${theme.font.sizes.small}`
    })
  })

  it('should render the button with small size when size small is passed', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': `${theme.font.sizes.xsmall}`
    })
  })

  it('should render the button with large size when size large is passed', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': `${theme.font.sizes.medium}`,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    })
  })

  it('should render the button with full width when fullWidth is true', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render the minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      // caso você queira conferir que a cor tenha o valor definido
      // e não que caso a variavel global seja alterada o teste siga passando
      // deve ser colocado no teste o valor direto
      // por exemplo:
      // color: '#F231A5'
      // assim, caso a variavel global for alterada, o teste irá quebrar.
      color: `${theme.colors.primary}`
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      { modifier: ':hover' }
    )
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
