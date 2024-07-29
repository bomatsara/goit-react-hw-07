import css from './Loader.module.css';
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '15px 0',
      }}>
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#2471A3"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};