import Header from '../Header';
import { Container, Content } from './styles';

const Main: React.FC = props => {
  const { children } = props

  return (
    <Container>
      <Header />

      <Content>{children}</Content>
    </Container>
  )
}

export default Main