import { Link } from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  styledAppBar,
  styledToolBar,
  styledAuthBox,
  styledIcon,
  styledLink,
  styledAppBox,
  styledAuthButton,
} from "./AuthNavStyled";
const pages = ["Register", "Login"];
const settings = ["Profile", "Contacts", "Logout"];

export const AuthNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={styledAppBar}>
      <Container maxWidth="xl">
        <Toolbar sx={styledToolBar}>
          <Box sx={styledAppBox}>
            <IconButton
              sx={styledIcon}
              onClick={handleOpenNavMenu}
            ></IconButton>
            <Menu
              sx={styledAuthButton}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link sx={styledLink} to={`${page}`}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={styledAuthBox}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={styledAuthButton}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={styledAuthButton}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
