import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css['contact-list']}>
      {visibleContacts.map((contact => (
        <div key={contact.id} className={css['contact-list-item']}>
          <Contact contact={contact} />
        </div>
      )))}
    </div>
  );
}