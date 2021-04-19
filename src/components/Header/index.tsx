import logoImg from '../../assets/logo.svg';
import { Container, Content, Button } from './styles';


export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <Button >Nova Transação</Button>
      </Content>
    </Container>
  );
};
