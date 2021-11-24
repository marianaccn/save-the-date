import { EditItemBlack } from '../Icons/EditItemBlack';
import { InputContainer, InputItem } from './styles';

export const NewItemFriendsEvents: React.FC<any> = (props: any) => {
  return (
    <InputContainer>
      <InputItem
        type="text"
        placeholder="Nome do item"
        name="itemName"
        value={props.item?.itemName || ''}
        disabled
      />

      <InputItem
        id="userName"
        disabled={props.disabled.userName}
        type="select"
        placeholder="Convidado"
        name="userName"
        value={props.item?.userName || ''}
        onChange={(event: any) => {
          props.editUserFromItem(props.index, 1, event.target.value);
        }}
      />
      <div
        onClick={() =>
          props.setDisabled({ ...props.disabled, userName: false })
        }
      >
        <label htmlFor="userName">
          <EditItemBlack />
        </label>
      </div>
    </InputContainer>
  );
};

export default NewItemFriendsEvents;
