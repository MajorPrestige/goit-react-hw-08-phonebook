import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

import { Button } from '@mui/material';
import { getFirstLoading } from 'redux/auth/auth-selectors';

import s from './HomePage.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const HomePage = () => {
  const firstLoading = useSelector(getFirstLoading);

  return (
    !firstLoading && (
      <div className={s.container}>
        <h1 className={s.title}>PHONEBOOK</h1>
        <div className={s.wrapper}>
          <div className={s.imgWrapper}>
            <img
              className={s.img}
              src="https://icon-library.com/images/address-book-icon_832.png"
              // src="../../images/icon.png"
              width={600}
              alt="phonebook"
            />
          </div>
          <div>
            <ul className={s.list}>
              <li className={s.item}>
                <Button
                  size="large"
                  className={s.btn}
                  type="submit"
                  variant="contained"
                >
                  <NavLink to="/signup" className={getClassName}>
                    Register
                  </NavLink>
                </Button>
              </li>
              <li className={s.item}>
                <Button
                  size="large"
                  className={s.btn}
                  type="submit"
                  variant="contained"
                >
                  <NavLink to="/login" className={getClassName}>
                    Log in
                  </NavLink>
                </Button>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    )
  );
};

export default HomePage;
