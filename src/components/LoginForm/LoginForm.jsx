import { useDispatch } from "react-redux";
import { logIn } from "../../redux/Auth/operations";
import { Button, Container, TextField } from "@mui/material";
import {
  styledLoginContainer,
  styledLoginTextField,
  styledLoginButton,
} from "./LoginFormStyled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container sx={styledLoginContainer}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={styledLoginTextField}
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          autoComplete="on"
        ></TextField>

        <TextField
          sx={styledLoginTextField}
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          autoComplete="on"
        ></TextField>

        <Button type="submit" sx={styledLoginButton}>
          Log In
        </Button>
      </form>
    </Container>
  );
};
