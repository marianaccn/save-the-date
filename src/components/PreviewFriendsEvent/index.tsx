import { ContainerElements, DivEvento } from './styles';
import { useHistory } from 'react-router';
import { CalendarIcon } from '../Icons/CalendarIcon';

export function PreviewFriendsEvents(props: any) {
  const history = useHistory();

  return (
    <>
      {props.parties.map((party: any) => (
        <ContainerElements>
          <CalendarIcon />
          <DivEvento
            type="button"
            onClick={() =>
              history.push(
                `/detailsFriendsEventPage/${party.id}-${party.partyName.replace(
                  / /g,
                  '-'
                )}`
              )
            }
          >
            <h4>{party.partyName}</h4>
            <p>{party.hostName}</p>
            <p>
              {party.date} ás {party.scheduleEvent}
            </p>
          </DivEvento>
        </ContainerElements>
      ))}
    </>
  );
}
