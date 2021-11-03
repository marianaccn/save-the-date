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
} from './styles';
import { LogoBlue } from '../../LogoBlue';
import { useHistory } from 'react-router';
import { PreviousBlack } from '../../PreviousBlack';
import { IonContent } from '@ionic/react';
import { CalendarIcon } from '../../CalendarIcon';
import { EditItemBlack } from '../../EditItemBlack';

export function DetailsEventPage() {
  const history = useHistory();

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
              <ContainerElements>
                <CalendarIcon />
                <DivEvento>
                  <h3>Happy Hour</h3>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Mariana Cavalcante"
                      disabled
                    />
                    <EditItemBlack />
                  </InputContainer>
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Rua Aparecida, 299 - Centro"
                      disabled
                    />
                    <EditItemBlack />
                  </InputContainer>
                  <InputContainer>
                    <Input type="text" placeholder="Sorocaba - SP" disabled />
                    <EditItemBlack />
                  </InputContainer>
                  <InputContainer>
                    <Input type="text" placeholder="02/12/2021" disabled />
                    <EditItemBlack />
                  </InputContainer>
                  <InputContainer>
                    <Input type="text" placeholder="10:00 - 15:00" disabled />
                    <EditItemBlack />
                  </InputContainer>
                </DivEvento>
              </ContainerElements>
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
