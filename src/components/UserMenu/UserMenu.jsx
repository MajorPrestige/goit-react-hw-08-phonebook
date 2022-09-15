import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserData } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

const UserMenu = () => {
  const { name, email } = useSelector(getUserData);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar className={s.wrapper}>
        <h2>Welcome, {name}!</h2>
        <Box className={s.container}>
          <p className={s.text}>{email}</p>
          <Button variant="outlined" color="inherit">
            <Link onClick={handleLogoutClick} to="/" className={s.link}>
              Logout
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserMenu;
