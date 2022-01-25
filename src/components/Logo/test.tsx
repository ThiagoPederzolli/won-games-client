import { screen } from '@testing-library/react'
import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
