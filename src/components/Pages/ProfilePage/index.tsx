import {
  Container,
  Content,
  ContainerInputs,
  ContainerProfile,
} from './styles';
import { LogoBlue } from '../../LogoBlue';

export function ProfilePage() {
  return (
    <Container>
      <Content>
        <LogoBlue />
        <ContainerProfile>
          <h1>Meu perfil</h1>
          <ContainerInputs></ContainerInputs>
        </ContainerProfile>
      </Content>
    </Container>
  );
}
