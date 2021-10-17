import {
  Container,
  Content,
  MenuLogin,
  Header,
  Title,
  ConcludedButton,
  Footer,
  LoginButton,
  InputForm,
} from './styles';
import ProfileLight from '../../assets/profileLight.svg';

export function RegistrationPage() {
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
          <InputForm type="text" placeholder="Nome completo"></InputForm>
          <InputForm type="text" placeholder="E-mail"></InputForm>
          <InputForm type="text" placeholder="Data de nascimento"></InputForm>
          <InputForm type="text" placeholder="Telefone"></InputForm>
          <InputForm type="text" placeholder="Senha"></InputForm>
          <InputForm type="text" placeholder="Confirme sua senha"></InputForm>
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
