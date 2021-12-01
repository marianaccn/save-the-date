import {
  Container,
  Content,
  ContainerEvents,
  ContainerMyEvents,
  Footer,
  PreviousButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { PreviewFriendsEvents } from '../../PreviewFriendsEvent';
import { useEffect, useState } from 'react';
import { getToken } from '../../../services/api/config';
import { GetFriendsPartyList } from '../../../services/api/party';
import Swal from 'sweetalert2';

export function FriendsEventsPage(props: any) {
  const history = useHistory();
  const [parties, setParties] = useState<any[]>([]);

  const fetchParties = async () => {
    const user = JSON.parse(getToken());
    const response = await GetFriendsPartyList(user.id);
    setParties(response);
  };

  useEffect(() => {
    try {
      fetchParties();
    } catch (err) {
      Swal.fire({
        icon: 'error',
        text: 'Nao foi possivel consultar seus eventos, tente novamente mais tarde.',
      });
    }
  }, []);

  return (
    <IonContent>
      <Container>
        <Content>
          <LogoBlue />
          <ContainerMyEvents>
            <div className="Title">
              <h1>Eventos de amigos</h1>
            </div>
            <ContainerEvents>
              <PreviewFriendsEvents parties={parties} />
            </ContainerEvents>
          </ContainerMyEvents>
        </Content>
        <Footer>
          <PreviousButton
            type="button"
            onClick={() => history.push('/homePage')}
          >
            <PreviousBlack />
          </PreviousButton>
        </Footer>
      </Container>
    </IonContent>
  );
}
