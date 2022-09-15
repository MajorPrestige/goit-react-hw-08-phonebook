import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filter/filter-slice';
import { getFilter } from 'redux/contacts/filter/filter-selectors';
import s from './ContactsSearch.module.css';

import { TextField } from '@mui/material';

const ContactsSearch = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <form className={s.wrapper}>
      <TextField
        type="text"
        variant="standard"
        label="Find contacts by name"
        id="standard-basic"
        onChange={filterContact}
        value={filter}
      />
    </form>
  );
};

export default ContactsSearch;

ContactsSearch.propTypes = {
  filter: PropTypes.func,
  value: PropTypes.string,
};
