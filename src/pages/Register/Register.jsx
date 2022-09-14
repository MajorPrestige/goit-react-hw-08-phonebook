// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import s from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegisterFormSubmit = e => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const userData = {
      name: elements.userName.value,
      email: elements.email.value,
      password: elements.password.value,
    };

    dispatch(signup(userData));
    e.target.reset();
  };

  return (
    <form className={s.form} onSubmit={handleRegisterFormSubmit}>
      <label className={s.label}>
        User name
        <input name="userName" className={s.input} type="text" />
      </label>
      <label className={s.label}>
        Email
        <input name="email" className={s.input} type="email" />
      </label>
      <label className={s.label}>
        Password
        <input name="password" className={s.input} type="password" />
      </label>
      <button className={s.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
