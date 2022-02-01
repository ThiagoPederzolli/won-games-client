import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Highlight from '.'
import * as S from './styles'
const props = {
  title: 'Read Dead is back',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.png'
}

describe('<Highlight />', () => {
  it('should render the Highlight', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead is back/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Come see John’s new adventures/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/rdr2'
    )

    // expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the Highlight with background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render the Highlight with float image', () => {
    renderWithTheme(
      <Highlight {...props} floatImage="/img/red-dead-float.png" />
    )

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/img/red-dead-float.png'
    )
  })

  it('should render the Highlight with float image on the right by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/img/red-dead-float.png" />
    )

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'floatimage content'"
    })
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render the Highlight with float image on the left if left is passed', () => {
    const { container } = renderWithTheme(
      <Highlight
        {...props}
        floatImage="/img/red-dead-float.png"
        alignment="left"
      />
    )

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'content floatimage'"
    })
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
    expect(container.firstChild).toHaveStyleRule('justify-self', 'end', {
      modifier: `${S.FloatImage}`
    })
  })
})
