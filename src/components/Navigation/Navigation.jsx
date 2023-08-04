import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Box, Button, Link } from "@mui/material";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
      }}
    >
      {!isLoggedIn && <NavLink to="/">Home</NavLink>}

      {isLoggedIn && (
        <Button
          component={Link}
          variant="outlined"
          color="inherit"
          href="/contacts"
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
