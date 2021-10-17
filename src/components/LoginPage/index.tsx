import {
  Container,
  Content,
  MenuLogin,
  Header,
  Title,
  Registration,
  ConcludedButton,
  Footer,
  LoginButton,
} from './styles';
import ProfileLight from '../../assets/profileLight.svg';

export function LoginPage() {
  return (
    <Container>
      <Content>
        <Header>
          <img src={ProfileLight} alt="Ícone de perfil" />
          <Title>
            <h1 className="title">Crie sua conta</h1>
            <p className="description">
              Para poder gerenciar seu evento precisamos{' '}
            </p>
            <p className="description">de apenas algumas informações ;)</p>
          </Title>
        </Header>
        <MenuLogin>
          <Registration type="text" placeholder="Nome completo"></Registration>
          <Registration type="text" placeholder="E-mail"></Registration>
          <Registration
            type="text"
            placeholder="Data de nascimento"
          ></Registration>
          <Registration type="text" placeholder="Telefone"></Registration>
          <Registration type="text" placeholder="Senha"></Registration>
          <Registration
            type="text"
            placeholder="Confirme sua senha"
          ></Registration>
        </MenuLogin>
        <Footer>
          <ConcludedButton type="button">Concluído</ConcludedButton>
          <LoginButton type="button">
            Já possui uma conta? Faça o login
          </LoginButton>
        </Footer>
      </Content>
    </Container>
  );
}
