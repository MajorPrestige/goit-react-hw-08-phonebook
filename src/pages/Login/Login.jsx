import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import s from './Login.module.css';

const Login = () => {
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
      <button className={s.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default Login;
