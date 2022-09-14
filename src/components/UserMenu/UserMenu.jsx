import { Link } from 'react-router-dom';
import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.container}>
      <p>hello@mail.com</p>
      <Link to="/" className={s.link}>
        Logout
      </Link>
    </div>
  );
};

export default UserMenu;
