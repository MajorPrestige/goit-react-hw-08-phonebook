import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactLists from 'components/ContactsList/ContactList';
import ContactsSearch from 'components/ContactsSearch/ContactsSearch';
import Title from 'components/Title/Title';

const Contacts = () => {
  return (
    <>
      <Title title={'Phonebook'} />
      <ContactsForm />
      <Title title={'Contacts'} />
      <ContactsSearch />
      <ContactLists />
    </>
  );
};

export default Contacts;
