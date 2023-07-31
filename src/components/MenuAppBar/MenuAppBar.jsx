// import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
import { AppBar, Toolbar } from "@mui/material";

export const MenuAppBar = () => {
  const { isLoggedIn } = useAuth("");
  return (
    <div>
      {isLoggedIn ? (
        <AppBar position="relative" sx={{ width: "1000px", height: "80px" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "left", m: "10px" }}>
            <UserMenu />
          </Toolbar>
        </AppBar>
      ) : (
        <AuthNav />
      )}
    </div>
  );
};
