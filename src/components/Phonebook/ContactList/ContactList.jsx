/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../../redux/Contacts/selectors";
import { setFilter } from "../../../redux/Filter/filterSlice";
import PropTypes from "prop-types";
// import css from "./ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filteredContacts = (filter, contacts) => {
    return contacts.filter(
      (element) =>
        element.name.toLowerCase().trim().includes(filter.toLowerCase()) ||
        element.number.toLowerCase().trim().includes(filter.toLowerCase())
    );
  };

  const Contact = ({ name, number, id }) => {
    return (
      <li key={id}>
        <span>{name + " : " + number}</span>
        {
          <button
            type="button"
            name="delete"
            onClick={(e) => deleteContact(e, { id })}
          >
            Delete
          </button>
        }
      </li>
    );
  };

  return (
    <div>
      <label>Find contacts</label>
      <input
        type="text"
        id="filter"
        name="filter"
        onChange={(e) => dispatch(setFilter(e.target.value.trim()))}
        value={filter}
      ></input>
      {contacts.length === 0 ? (
        <span>No contacts found</span>
      ) : (
        <ul>
          {filteredContacts(filter, contacts).map((item) => {
            return (
              <Contact
                key={item.id}
                name={item.name}
                number={item.number}
                id={item.id}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  handleDeleteContact: PropTypes.func,
};
