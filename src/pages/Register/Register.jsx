import s from './Register.module.css';

const Register = () => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        User name
        <input className={s.input} type="text" />
      </label>
      <label className={s.label}>
        Email
        <input className={s.input} type="email" />
      </label>
      <label className={s.label}>
        Password
        <input className={s.input} type="password" />
      </label>
      <button className={s.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
