import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Box, Button, Link } from "@mui/material";
import { navigationBox } from "./NavigationStyled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={navigationBox}>
      {!isLoggedIn && <NavLink to="/">Home</NavLink>}

      {isLoggedIn && (
        <Button component={Link} to="/contacts">
          Contacts
        </Button>
      )}
    </Box>
  );
};
