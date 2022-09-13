import s from './ServerLoader.module.css';

const ServerLoader = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <span className={s.smile}>💩</span>
        <p>Loading...</p>
        <p>Sorry, it's free backend</p>
      </div>
    </div>
  );
};

export default ServerLoader;
