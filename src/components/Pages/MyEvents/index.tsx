import {
  Container,
  Content,
  ContainerEvents,
  ContainerMyEvents,
  Footer,
  PreviousButton,
  CreateButton,
  ContainerButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { PreviewMyEvents } from '../../PreviewMyEvents';
import { useState, useEffect } from 'react';
import { GetPartyList } from '../../../services/api/party';
import { IPartyResponse } from '../../../services/interfaces/response/party';
import Swal from 'sweetalert2';

export function MyEventsPage() {
  const history = useHistory();
  const [parties, setParties] = useState<IPartyResponse[]>([]);

  const fetchParties = async () => {
    const response = await GetPartyList();
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
              <h1>Meus eventos</h1>
            </div>
            <ContainerEvents>
              <PreviewMyEvents parties={parties} />
              <ContainerButton>
                <CreateButton
                  type="button"
                  onClick={() => history.push('/createEventPage')}
                >
                  Criar evento
                </CreateButton>
              </ContainerButton>
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
