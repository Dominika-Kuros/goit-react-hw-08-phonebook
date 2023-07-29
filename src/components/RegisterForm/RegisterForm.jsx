import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/operations";
import { Button, Container, TextField } from "@mui/material";

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
          type="text"
          name="name"
          id="outlined-basic"
          label="Username"
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
        <Button type="submit" variant="text" size="medium" sx={{ ml: "120px" }}>
          Register
        </Button>
      </form>
    </Container>
  );
};
