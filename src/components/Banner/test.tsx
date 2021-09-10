import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'

const bannerValues = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p> Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...bannerValues} />)
    // se title existe
    // se subtitle existe
    // se image existe
    // se button existe

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})