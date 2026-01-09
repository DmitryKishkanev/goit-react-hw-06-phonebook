import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { insertContact } from '../../redux/phonebook/phonebookSlice';
import { nanoid } from 'nanoid';
import { FormContainer } from 'components/ContactForm/ContactForm.styled';

const schema = object({
  name: string().required(),
  number: string().min(7).max(9).required(),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  // const handleAddContact = newContact => {
  //   const isNamePresent = contacts.some(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
  //   );

  //   if (isNamePresent) {
  //     alert(`"${newContact.name}" is already in contacts `);
  //     return;
  //   }

  //   dispatch(insertContact(newContact));
  // };

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    dispatch(insertContact(newContact));

    // handleAddContact(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <label>
          <span>Name</span>
          <Field type="text" name="name" required />
          <ErrorMessage name="name" />
        </label>

        <label>
          <span>Number</span>
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" />
        </label>

        <button type="submit" className="phonebook__button">
          Добавить
        </button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
