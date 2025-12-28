import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import {
  insertContact,
  removeContact,
  setFilter,
} from '../../redux/phonebook/phonebookSlice';
import { Container } from 'components/App/App.styled';

export default function App() {
  const { contacts, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const addContact = newContact => {
    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    dispatch(insertContact(newContact));
  };

  const deleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getFilteredCntacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <ContactList
        contacts={getFilteredCntacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
