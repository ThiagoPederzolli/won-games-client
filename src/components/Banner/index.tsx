import * as S from './styles'
import Button from 'components/Button'
import Ribbon, { RibbonProps } from 'components/Ribbon'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
} & Omit<RibbonProps, 'children'>

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  color = 'primary',
  size = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={color} size={size}>
        {ribbon}
      </Ribbon>
    )}
    {/* O uso de Image como uma div, é porque como se trata de um elemento
    que a imagem é um background e que vai elementos em cima, trabalhar com uma div
    é mais prático que um elemento img, mas colocamos o role pra que se entenda
    que o papel da div é ser uma img
    podemos ver a mesma lógica no comp Highlight e a diferença entre a imagem que usamos de
    background e a floatImage que vai acima do conteúdo, logo se usa o elemento img */}
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
