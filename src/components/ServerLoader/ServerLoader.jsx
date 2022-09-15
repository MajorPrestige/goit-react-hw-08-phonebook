import { InfinitySpin } from 'react-loader-spinner';
import s from './ServerLoader.module.css';

const ServerLoader = () => {
  return (
    <div className={s.backdrop}>
      <InfinitySpin width="200" color="#1976d2" />
    </div>
  );
};

export default ServerLoader;
