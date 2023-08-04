import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/operations";
import { useAuth } from "../../hooks/useAuth";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1vh",
          justifyContent: "space-between",
        }}
      >
        <Navigation />
        <Button
          type="button"
          onClick={() => dispatch(logOut())}
          variant="outlined"
          color="inherit"
          size="small"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
