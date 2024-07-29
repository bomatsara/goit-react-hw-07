import Section from './layout/Section/Section';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import Error from './Error/Error';
import ContactList from './ContactList/ContactList';
import {useDispatch, useSelector} from "react-redux";
import {selectContactsError, selectContactsLoading} from "../redux/contactsSlice.js";
import {fetchContacts} from "../redux/contactsOps.js";
import Loader from "./Loader/Loader";
import {ErrorMessage} from "formik";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const isError = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section className="section-form">
        <h1 style={{
          fontSize: 40,
          marginBottom: 30,
        }}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loader />}
        {isError && <Error />}
        {!loading && !isError && <ContactList />}
      </Section>
    </>
  );
}