/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectContacts } from "../../redux/Contacts/selectors";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../redux/Contacts/operations";
import { setFilter } from "../../redux/Filter/filterSlice";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export const Phonebook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (e, newContact) => {
    e.preventDefault();
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
    setFilter("");
    console.log(newContact);
  };

  const handleDeleteContact = (e, contact) => {
    e.preventDefault();
    dispatch(deleteContact(contact.id));
  };
  return (
    <div>
      {" "}
      <p>Phonebook</p>
      <ContactForm
        name={name}
        number={number}
        addContact={handleAddContact}
        setName={setName}
        setNumber={setNumber}
      />
      <ContactList
        contacts={contacts || []}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
