// import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
import { AppBar, Toolbar } from "@mui/material";
import { styledToolbar, styledMenuAppBar } from "./MenuAppBarStyled";

export const MenuAppBar = () => {
  const { isLoggedIn } = useAuth("");
  return (
    <div>
      {isLoggedIn ? (
        <AppBar sx={styledMenuAppBar}>
          <Toolbar sx={styledToolbar}>
            <UserMenu />
          </Toolbar>
        </AppBar>
      ) : (
        <AuthNav />
      )}
    </div>
  );
};
