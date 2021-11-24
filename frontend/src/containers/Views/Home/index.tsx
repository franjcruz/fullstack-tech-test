import CreateForm from '../../../components/CreateForm';
import { Card, Container, Subtitle, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Manhole Cover Factory</Title>

      <Subtitle>Create manhole cover</Subtitle>

      <Card>
        <CreateForm></CreateForm>
      </Card>
    </Container >
  )
}

export default Home