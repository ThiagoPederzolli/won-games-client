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
    {/* {!!ribbon && (
      <Ribbon color={color} size={size}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption> */}
    {!!ribbon && (
      <Ribbon color={color} size={size}>
        {ribbon}
      </Ribbon>
    )}

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
