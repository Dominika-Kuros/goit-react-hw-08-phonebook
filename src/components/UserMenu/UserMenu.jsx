import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/operations";
import { useAuth } from "../../hooks/useAuth";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

// import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <p>Welcome, {user.name}</p>

      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="outlined"
        color="inherit"
      >
        Logout
      </Button>
    </Box>
  );
};
