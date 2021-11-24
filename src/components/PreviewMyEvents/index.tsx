import { ContainerElements, DivEvento, ShareButton } from './styles';
import { useHistory } from 'react-router';
import { CalendarIcon } from '../Icons/CalendarIcon';
import { ShareIcon } from '../Icons/ShareIcon';
import { env } from '../../constants';
import Swal from 'sweetalert2';

export function PreviewMyEvents(props: any) {
  const history = useHistory();

  const shareButton = async (partyName: string, partyId: number) => {
    navigator.clipboard.writeText(
      `${env.baseUrl}/${partyId}-${partyName.replace(/ /g, '-')}`
    );
    Swal.fire({
      icon: 'success',
      text: 'Link para o evento foi copiado com sucesso!',
    });
  };

  return (
    <>
      {props.parties.map((party: any) => (
        <ContainerElements>
          <CalendarIcon />
          <DivEvento
            type="button"
            onClick={() => history.push('/detailsFriendsEventPage')}
          >
            <h4>{party.partyName}</h4>
            <p>{party.hostName}</p>
            <p>
              {party.date} ás {party.schedule}
            </p>
          </DivEvento>
          <ShareButton
            type="button"
            onClick={() => shareButton(party.partyName, party.partyId)}
          >
            <ShareIcon />
          </ShareButton>
        </ContainerElements>
      ))}
    </>
  );
}
