import css from './Error.module.css';

export default function Error() {
  return (
    <>
      <div className={css['error']}>Something went wrong.</div>
    </>
  );
};