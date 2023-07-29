/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../../redux/Contacts/selectors";
import { setFilter } from "../../../redux/Filter/filterSlice";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  FormControl,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
      <Typography variant="h6">
        <ListItem key={id}>
          <span>{name + " : " + number}</span>
          {
            <Button
              type="submit"
              variant="text"
              color="primary"
              size="medium"
              onClick={(e) => deleteContact(e, { id })}
            >
              {" "}
              <DeleteIcon />
            </Button>
          }
        </ListItem>
      </Typography>
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <FormControl>
        <Input
          placeholder="Find contacts"
          type="text"
          id="filter"
          name="filter"
          onChange={(e) => dispatch(setFilter(e.target.value.trim()))}
          value={filter}
        ></Input>
      </FormControl>
      {contacts.length === 0 ? (
        <span>No contacts found</span>
      ) : (
        <List>
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
        </List>
      )}
    </Container>
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
