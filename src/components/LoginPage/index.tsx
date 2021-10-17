import {
  Container,
  Content,
  MenuLogin,
  Header,
  Title,
  Registration,
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
          <Registration type="text" value="Nome completo"></Registration>
          <Registration type="text" value="E-mail"></Registration>
          <Registration type="text" value="Data de nascimento"></Registration>
          <Registration type="text" value="Telefone"></Registration>
          <Registration type="text" value="Senha"></Registration>
          <Registration type="text" value="Confirme sua senha"></Registration>
        </MenuLogin>
      </Content>
    </Container>
  );
}
