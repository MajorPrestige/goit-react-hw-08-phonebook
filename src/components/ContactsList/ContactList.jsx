import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, deleteContact } from 'redux/contacts/list/list-operations';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import { getFilteredContacts } from 'redux/contacts/list/items/items-selectors';

import { getLoading } from 'redux/contacts/list/loading/loading-selecors';
import s from './ContactList.module.css';
import Loader from 'components/Loader/Loader';

const ContactLists = () => {
  const contacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {loading && <Loader />}
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            id={id}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactLists;
