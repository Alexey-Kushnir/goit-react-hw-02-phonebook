import PropTypes from 'prop-types';
import { ContactItem } from './ContactsStorage.styled';

export const ContactsStorage = ({ contactList }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            {name}: {number}
          </ContactItem>
        );
      })}
    </ul>
  );
};

ContactsStorage.propTypes = {
  contactList: PropTypes.array.isRequired,
};
