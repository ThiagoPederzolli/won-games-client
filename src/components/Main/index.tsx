import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo seguido do texto React Avançado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor sentado de frente para a tela com códigos"
    />
  </S.Wrapper>
)

export default Main
