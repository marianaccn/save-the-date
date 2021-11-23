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
  ContainerButton,
  CreateButton,
} from './styles';
import { LogoBlue } from '../../Icons/LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../Icons/PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../Icons/CalendarIcon';
import { EditItemBlack } from '../../Icons/EditItemBlack';

export function DetailsFriendsEvents(props: any) {
  const history = useHistory();

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
                  <h3>{props.partyName}</h3>
                  <InputContainer>
                    <Input
                      type="text"
                      value={props.hostName}
                      placeholder="Nome do anfitrião"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua, nº - Bairro"
                      value={props.adress}
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.city}
                      placeholder="Cidade-UF"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.date}
                      placeholder="DD/MM/AAAA"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <Input
                      type="text"
                      value={props.schedule}
                      placeholder="00:00 - 00:00"
                      disabled
                    />
                  </InputContainer>

                  <ItemsContainer>
                    <h3>Itens</h3>
                    <div className="inputs-container">
                      <ItemNameContainer>
                        <h4>Nome</h4>
                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Linguiça"
                            disabled
                          />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Refrigerante"
                            disabled
                          />
                        </InputItemsContainer>
                      </ItemNameContainer>

                      <ItemNameContainer>
                        <h4>Responsável</h4>
                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Convidado"
                            disabled
                          />
                        </InputItemsContainer>

                        <InputItemsContainer>
                          <InputItem
                            type="text"
                            placeholder="Sem responsável"
                            disabled
                          />
                          <EditItemBlack />
                        </InputItemsContainer>
                      </ItemNameContainer>
                    </div>
                    <ContainerButton>
                      <CreateButton
                        type="button"
                        onClick={() => history.push('/')}
                      >
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
              onClick={() => history.push('/myEventsPage')}
            >
              <PreviousBlack />
            </PreviousButton>
          </Footer>
        </Content>
      </Container>
    </IonContent>
  );
}
