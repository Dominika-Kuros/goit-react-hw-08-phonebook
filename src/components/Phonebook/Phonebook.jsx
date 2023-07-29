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
import { Box, Typography } from "@mui/material";

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
    if (
      contacts.find(
        (c) => c.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    }

    return;
  };

  const handleDeleteContact = (e, contact) => {
    e.preventDefault();
    dispatch(deleteContact(contact.id));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        mt: "2rem",
      }}
    >
      <Typography variant="h4">Phonebook</Typography>
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
    </Box>
  );
};


