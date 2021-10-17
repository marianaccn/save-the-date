import { LogoLight } from '../Logo';
import { Container, Content, HomeMenu, MenuBtn } from './styles';

export function HomePage() {
  return (
    <Container>
      <Content>
        <LogoLight />
        <HomeMenu>
          <MenuBtn type="button">Login</MenuBtn>
          <MenuBtn type="button">Cadastrar-se</MenuBtn>
          <MenuBtn type="button">Esqueci minha senha</MenuBtn>
        </HomeMenu>
      </Content>
    </Container>
  );
}
