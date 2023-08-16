import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/operations";
import { Button, Container, TextField } from "@mui/material";
import {
  styledRegisterButton,
  styledRegisterContainer,
  styledRegisterTextField,
} from "./RegisterFormStyled";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container sx={styledRegisterContainer}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={styledRegisterTextField}
          type="text"
          name="name"
          id="outlined-basic"
          label="Username"
          autoComplete="on"
        ></TextField>

        <TextField
          sx={styledRegisterTextField}
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          autoComplete="on"
        ></TextField>
        <TextField
          sx={styledRegisterTextField}
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          autoComplete="on"
        ></TextField>
        <Button type="submit" sx={styledRegisterButton}>
          Register
        </Button>
      </form>
    </Container>
  );
};
