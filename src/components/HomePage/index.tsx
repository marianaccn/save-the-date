import { LogoLight } from '../Logo';
import { Container, Content, HomeMenu, MenuBtn } from './styles';
// import { useHistory } from 'react-router-dom';

export function HomePage() {
  // function HomeButton() {
  //   let history = useHistory();

  //   const  handleClick() {
  //     history.push('/registrationPage');
  //   }
  // }

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
