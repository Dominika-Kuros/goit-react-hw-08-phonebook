import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
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
        sx={{ m: "10px" }}
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></TextField>
      <TextField
        sx={{ m: "10px" }}
        label="Number"
        type="tel"
        name="number"
        onChange={(e) => setNumber(e.target.value)}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></TextField>
      <Button type="submit" variant="text" size="medium" sx={{ p: "25px" }}>
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
