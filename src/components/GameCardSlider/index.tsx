import { ArrowLeft, ArrowRight } from '@styled-icons/material-outlined'
import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  // lazyLoad define como será a transição para novos itens
  // por exemplo, exibe-se 4 cards, mas existem 8
  // com o ondemand, os outros 4 serão carregados apenas se a pessoa usuária
  // clicar nas setas para ver algum card novo
  // existe também o valor progressive, que baixará todos os 8 cards já
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        // os números quebrados são para cenários que existam mais cards
        // do que os exibidos, assim fica uma borda do próximo
        // facilitando que a pessoa usuária note que há outros cards
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="Next games" />,
  prevArrow: <ArrowLeft aria-label="Previous games" />
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
