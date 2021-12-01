import {
  Container,
  Content,
  ContainerEvents,
  ContainerMyEvents,
  ContainerElements,
  Footer,
  PreviousButton,
  DivEvento,
  InputContainer,
  Input,
  ItemsContainer,
  ItemNameContainer,
  InputItemsContainer,
  ContainerButton,
  CreateButton,
  AddItemButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../Icons/CalendarIcon';
import NewItemFriendsEvents from '../../NewItemFriendsEvents';
// import { AddItem } from '../../Icons/AddItem';
import Swal from 'sweetalert2';
import { EditParty, GetPartyById } from '../../../services/api/party';
import { useEffect } from 'react';
import { getToken } from '../../../services/api/config';

export function DetailsFriendsEvents(props: any) {
  const history = useHistory();
  const user = JSON.parse(getToken());

  const fetchParty = async () => {
    try {
      const event = window.location.href.split('/')[4];
      const id = event.split('-')[0];
      const party = await GetPartyById(id);
      props.onDataChange({
        ...props.data,
        ...party,
      });
      props.setItems(party.items || []);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Festa nao encontrada',
      }).then(() => {
        history.push('/friendsEventsPage');
      });
    }
  };

  useEffect(() => {
    fetchParty();
  }, []);

  const editEvent = async () => {
    try {
      const event = window.location.href.split('/')[4];
      const id = event.split('-')[0];
      EditParty({
        id,
        hostId: props.data.hostId,
        hostName: props.data.hostName,
        partyName: props.data.partyName,
        adress: props.data.adress,
        city: props.data.city,
        date: props.data.date,
        scheduleEvent: props.data.scheduleEvent,
        items: props.items,
      });
      Swal.fire({
        icon: 'success',
        text: 'Dados alterados!',
      });
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    }
  };

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
              <ContainerElements>
                <CalendarIcon />
                <DivEvento>
                  <h3>{props.data.partyName}</h3>
                  <InputContainer>
                    <Input
                      type="text"
                      value={props.data.hostName}
                      placeholder="Nome do anfitrião"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua, nº - Bairro"
                      value={props.data.adress}
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.data.city}
                      placeholder="Cidade-UF"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.data.date}
                      placeholder="DD/MM/AAAA"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.data.scheduleEvent}
                      placeholder="00:00 - 00:00"
                      disabled
                    />
                  </InputContainer>

                  <ItemsContainer>
                    <h3>Itens</h3>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h3>Nome</h3>
                        <h3>Responsável</h3>
                      </ItemNameContainer>
                      <InputItemsContainer>
                        {props.items.map((item: any, index: number) => (
                          <NewItemFriendsEvents
                            item={item}
                            index={index}
                            removeUserFromItem={props.removeUserFromItem}
                            editItemName={props.editItemName}
                            editUserFromItem={props.editUserFromItem}
                            setDisabled={props.setDisabled}
                            disabled={props.disabled}
                            userId={user.id}
                            userName={user.name}
                          />
                        ))}
                      </InputItemsContainer>
                      {/* <InputItemsContainer>
                        <AddItemButton
                          type="button"
                          onClick={() => props.addItem()}
                        >
                          <AddItem />
                        </AddItemButton>
                      </InputItemsContainer> */}
                    </div>
                    <ContainerButton>
                      <CreateButton type="button" onClick={() => editEvent()}>
                        Salvar
                      </CreateButton>
                    </ContainerButton>
                  </ItemsContainer>
                </DivEvento>
              </ContainerElements>
            </ContainerEvents>
          </ContainerMyEvents>
          <Footer>
            <PreviousButton
              type="button"
              onClick={() => history.push('/friendsEventsPage')}
            >
              <PreviousBlack />
            </PreviousButton>
          </Footer>
        </Content>
      </Container>
    </IonContent>
  );
}
