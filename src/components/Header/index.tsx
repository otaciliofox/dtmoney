import logoImg from '../../assets/logo.svg';
import { Container, Content, Button } from './styles';

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <Button onClick={onOpenNewTransactionModal} >Nova Transação</Button>
      </Content>

    </Container>
  );
};
