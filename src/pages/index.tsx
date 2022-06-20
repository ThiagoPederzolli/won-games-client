import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// dentro do getStatic com dado existem dois cenários:
// - getStaticProps, quando o conteúdo da página depende de dados externos
// - getStaticPaths, quando o path da página depende de dados externos(rotas dinâmicas)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

// a função deve ser exportada
export function getServerSideProps() {
  // faz lógica
  // pode ser buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighligth: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
