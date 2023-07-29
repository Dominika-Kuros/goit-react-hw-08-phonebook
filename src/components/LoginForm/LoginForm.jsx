import { useDispatch } from "react-redux";
import { logIn } from "../../redux/Auth/operations";
import { Button, Container, TextField } from "@mui/material";

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
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{
            display: "flex",
            justifyContent: "center",
            m: "30px",
            gap: "10px",
            width: "270px",
          }}
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          autoComplete="on"
        ></TextField>

        <TextField
          sx={{
            display: "flex",
            justifyContent: "center",
            m: "30px",
            gap: "10px",
            width: "270px",
          }}
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          autoComplete="on"
        ></TextField>

        <Button variant="text" size="medium" type="submit" sx={{ ml: "120px" }}>
          Log In
        </Button>
      </form>
    </Container>
  );
};
