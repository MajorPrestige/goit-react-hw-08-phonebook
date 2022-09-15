import { RotatingSquare } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <RotatingSquare height="200" width="200" color="#ffffff" />
    </div>
  );
};

export default Loader;
