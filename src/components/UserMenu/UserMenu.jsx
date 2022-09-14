import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserData } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const { name, email } = useSelector(getUserData);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrapper}>
      <h2>Hello, {name}!</h2>
      <div className={s.container}>
        <p>{email}</p>
        <Link onClick={handleLogoutClick} to="/" className={s.link}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
