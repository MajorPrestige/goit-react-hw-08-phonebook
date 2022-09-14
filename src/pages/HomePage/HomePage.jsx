import { NavLink, Outlet } from 'react-router-dom';
import s from './HomePage.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const HomePage = () => {
  return (
    <div>
      <h1>PHONEBOOK</h1>
      <ul className={s.list}>
        <li>
          <NavLink to="/contacts" className={getClassName}>
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={getClassName}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={getClassName}>
            Log in
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default HomePage;
