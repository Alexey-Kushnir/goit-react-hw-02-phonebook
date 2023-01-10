import PropTypes from 'prop-types';
import { ContactItem } from './ContactsStorage.styled';

export const ContactsStorage = ({ contactList }) => {
  return (
    <ul>
      {contactList.map(contact => {
        return <ContactItem key={contact.id}>{contact.name}</ContactItem>;
      })}
    </ul>
  );
};

// ContactsStorage.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
