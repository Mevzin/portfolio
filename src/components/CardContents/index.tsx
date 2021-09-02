import { Repositories } from '../../pages/repositories';
import { NavBar } from '../NavBar';
import { CardInner, Container } from './styles';

export function CardContents() {

  return (
    <Container>
      <CardInner>
        <NavBar />
        <Repositories />
      </CardInner>
    </Container>
  )
}