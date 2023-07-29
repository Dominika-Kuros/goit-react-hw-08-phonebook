import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Typography from "@mui/material/Typography";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </Typography>
    </nav>
  );
};
