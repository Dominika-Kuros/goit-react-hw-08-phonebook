import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/operations";
import { useAuth } from "../../hooks/useAuth";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";
import { styledUseMenuBox, styledUserMenuButton } from "./UserMenuStyled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "13px",
        flex: "1",
      }}
    >
      <Typography sx={{ mt: "2px" }} variant="h5">
        Hello, {user.name}
      </Typography>
      <Box sx={styledUseMenuBox}>
        <Navigation />
        <Button
          type="button"
          onClick={() => dispatch(logOut())}
          sx={styledUserMenuButton}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
