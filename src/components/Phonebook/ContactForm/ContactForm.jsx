import css from "./ContactForm.module.css";
import PropTypes from "prop-types";
export const ContactForm = ({
  name,
  number,
  addContact,
  setName,
  setNumber,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => addContact(e, { name: name, number: number })}
        className={css.formWrapper}
      >
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
};
