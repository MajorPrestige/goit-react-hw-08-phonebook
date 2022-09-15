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
    <form className={s.form} onSubmit={handleFormSubmit}>
      <label className={s.label}>
        Name
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactsForm;
ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
