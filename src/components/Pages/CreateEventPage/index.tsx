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
  InputItem,
  AddItemButton,
  EventName,
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../CalendarIcon';
import { AddItem } from '../../AddItem';
import { eventValidator } from '../../../services/validations/eventValidator';
import Swal from 'sweetalert2';

export const CreateEventPage: React.FC<any> = ({ data, onDataChange }) => {
  const history = useHistory();

  console.log(data);

  const submitNewEvent = () => {
    if (!eventValidator(data, onDataChange)) {
      return Swal.fire({
        icon: 'success',
        text: 'Evento criado com sucesso!',
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
              <h1>Criar evento</h1>
            </div>
            <ContainerEvents>
              <ContainerElements>
                <CalendarIcon />
                <DivEvento>
                  <EventName
                    type="text"
                    placeholder="Insira aqui o nome do evento"
                    name="eventName"
                    value={data?.eventName || ''}
                    onChange={(event: any) => {
                      onDataChange({
                        ...data,
                        eventName: event.target.value,
                      });
                    }}
                  ></EventName>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Nome"
                      name="hostName"
                      value={data?.hostName || ''}
                      onChange={(event: any) => {
                        onDataChange({
                          ...data,
                          hostName: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua, nº - bairro"
                      name="adress"
                      value={data?.adress || ''}
                      onChange={(event: any) => {
                        onDataChange({
                          ...data,
                          adress: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Cidade - UF"
                      name="city"
                      value={data?.city || ''}
                      onChange={(event: any) => {
                        onDataChange({
                          ...data,
                          city: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Dia/Mês/Ano"
                      name="date"
                      value={data?.date || ''}
                      onChange={(event: any) => {
                        onDataChange({
                          ...data,
                          date: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Horário de início e Término"
                      name="scheduleEvent"
                      value={data?.scheduleEvent || ''}
                      onChange={(event: any) => {
                        onDataChange({
                          ...data,
                          scheduleEvent: event.target.value,
                        });
                      }}
                    />
                  </InputContainer>

                  <ItemsContainer>
                    <h4>Itens</h4>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h3>Nome</h3>
                        <InputItemsContainer>
                          <InputItem type="text" placeholder="Nome do item" />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <AddItemButton
                            type="button"
                            onClick={() => history.push('/myEventsPage')}
                          >
                            <AddItem />
                          </AddItemButton>
                        </InputItemsContainer>
                      </ItemNameContainer>
                    </div>
                    <ContainerButton>
                      <CreateButton
                        type="button"
                        onClick={() => submitNewEvent()}
                      >
                        Concluído
                      </CreateButton>
                    </ContainerButton>
                  </ItemsContainer>
                </DivEvento>
              </ContainerElements>
            </ContainerEvents>
          </ContainerMyEvents>
        </Content>
        <Footer>
          <PreviousButton
            type="button"
            onClick={() => history.push('/myEventsPage')}
          >
            <PreviousBlack />
          </PreviousButton>
        </Footer>
      </Container>
    </IonContent>
  );
};
