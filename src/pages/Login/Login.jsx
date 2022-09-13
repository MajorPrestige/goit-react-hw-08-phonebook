import s from './Login.module.css';

const Login = () => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        Email
        <input className={s.input} type="email" />
      </label>
      <label className={s.label}>
        Password
        <input className={s.input} type="password" />
      </label>
      <button className={s.btn} type="submit">
        Log in
      </button>
    </form>
  );
};

export default Login;
