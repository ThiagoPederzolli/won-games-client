// o import do match-media deve ser sempre a primeira linha do arquivo
import 'match-media-mock'
import { render, screen } from '@testing-library/react'
import Slider from '.'

describe('<Slider />', () => {
  it('should render the Slider', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Slide 1</p>
        <p>Slide 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/slide 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
    expect(
      screen.getByText(/slide 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
