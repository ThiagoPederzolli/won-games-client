import { GetStaticProps } from 'next'
import Home from 'templates/Home'

export type IndexProps = {
  heading: string
}

export default function Index(props: IndexProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      heading: 'Olha eu aqui'
    }
  }
}
