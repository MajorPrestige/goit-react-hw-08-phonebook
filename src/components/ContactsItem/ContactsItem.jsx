import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import s from './ContactsItem.module.css';

const ContactsItem = ({ name, number, id, handleDeleteClick }) => {
  return (
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <Button
        className={s.btn}
        variant="outlined"
        startIcon={<DeleteOutlineIcon className={s.icon} />}
        onClick={() => {
          handleDeleteClick(id);
        }}
        type="button"
      >
        Delete
      </Button>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDeleteClick: PropTypes.func,
};
