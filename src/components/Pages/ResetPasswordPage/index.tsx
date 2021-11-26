import {
  Container,
  Content,
  MenuLogin,
  Header,
  Title,
  ConcludedButton,
  Footer,
  InputForm,
  PreviousButton,
} from './styles';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PreviousWhite } from '../../Icons/PreviousWhite';
import { ProfileIcon } from '../../Icons/ProfileIcon';
import { ResetPassword } from '../../../services/api/user';
import { useState } from 'react';

export function ResetPasswordPage() {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const submitResetPassword = async () => {
    try {
      await ResetPassword(email);
      Swal.fire({
        icon: 'success',
        text: 'Verifique a caixa de entrada do seu e-mail para redefinir sua senha',
      }).then(() => history.push('/login'));
    } catch (err) {
      Swal.fire({
        icon: 'error',
        text: 'Email nao registrado',
      });
    }
  };

  return (
    <Container>
      <Content>
        <Header>
          <ProfileIcon />
          <Title>
            <h1 className="title">Esqueceu sua senha?</h1>
            <p className="description">
              Nos informe seu e-mail de cadastro abaixo
              <br />
              para que possamos enviar um link para
              <br /> redefinição
            </p>
            <p className="description"></p>
            <p className="description"></p>
          </Title>
        </Header>
        <MenuLogin>
          <InputForm
            value={email}
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></InputForm>
        </MenuLogin>
        <ConcludedButton type="button" onClick={() => submitResetPassword()}>
          Enviar
        </ConcludedButton>
      </Content>
      <Footer>
        <PreviousButton type="button" onClick={() => history.push('/')}>
          <PreviousWhite />
        </PreviousButton>
      </Footer>
    </Container>
  );
}
