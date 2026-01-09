import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/phonebook/phonebookSlice';
import { ContactEl } from 'components/ContactItem/ContactItem.styled';

const ContactItem = () => {
  const { contacts, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const filteredCntacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {filteredCntacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {number}
            </p>

            <button onClick={() => handleDeleteContact(id)}>Delete</button>
          </div>
        </ContactEl>
      ))}
    </>
  );
};

export default ContactItem;
