import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";
import { styledButton, styledTextField } from "./ContactFormStyle";
export const ContactForm = ({
  name,
  number,
  addContact,
  setName,
  setNumber,
}) => {
  return (
    <form onSubmit={(e) => addContact(e, { name: name, number: number })}>
      <TextField
        style={styledTextField}
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></TextField>
      <TextField
        style={styledTextField}
        label="Number"
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></TextField>
      <Button style={styledButton} type="submit">
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
};
