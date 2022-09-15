import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from 'redux/auth/auth-operations';
import { getLogin } from 'redux/auth/auth-selectors';

import { Button } from '@mui/material';

import s from './Login.module.css';

const Login = () => {
  const isLogin = useSelector(getLogin);
  const dispatch = useDispatch();

  const handleRegisterFormSubmit = e => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const userData = {
      email: elements.email.value,
      password: elements.password.value,
    };
    dispatch(login(userData));
    e.target.reset();
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <form className={s.form} onSubmit={handleRegisterFormSubmit}>
      <label className={s.label}>
        Email
        <input name="email" className={s.input} type="email" />
      </label>
      <label className={s.label}>
        Password
        <input name="password" className={s.input} type="password" />
      </label>
      <Button type="submit" variant="outlined" color="inherit" className={s.btn}>
        Log in
      </Button>
    </form>
  );
};

export default Login;
