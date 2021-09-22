import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
// import * as S from './styles'

export type HomeProps = {
  heading: string
}

const Home = ({ heading }: HomeProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        {heading}
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
