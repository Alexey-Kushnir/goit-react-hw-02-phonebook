import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactsStorage.styled';

export const ContactsStorage = ({ contactList, onDeleteCOntact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            {name}: {number}
            <DeleteButton type="button" onClick={() => onDeleteCOntact(id)}>
              Delete
            </DeleteButton>
          </ContactItem>
        );
      })}
    </ul>
  );
};

ContactsStorage.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteCOntact: PropTypes.func.isRequired,
};
