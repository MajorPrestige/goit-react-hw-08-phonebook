import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, TextField } from '@mui/material';

import s from './ContactsForm.module.css';
import { addContact } from 'redux/contacts/list/list-operations';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
      checked: false,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <TextField
          className={s.inner}
          type="text"
          name="name"
          id="standard-basic"
          label="Name"
          variant="standard"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          type="tel"
          name="number"
          id="standard-basic"
          label="Number"
          variant="standard"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />

        <Button className={s.btn} type="submit" variant="contained">
          Add contact
        </Button>
      </form>
      <hr />
    </>
  );
}

export default ContactsForm;
ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
