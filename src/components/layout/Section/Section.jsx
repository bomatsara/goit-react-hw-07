import './Section.css';
import Container from '../Container/Container.jsx';
import clsx from 'clsx';

export default function Section({ className, container = true, children }) {
  return (
    <section className={clsx('section', className)}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}