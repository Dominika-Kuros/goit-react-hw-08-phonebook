export const styledAppBar = {
  position: "relative",
  sx: { width: "1000px", height: "80px" },
};

export const styledToolBar = {
  display: "flex",
  justifyContent: "left",
  m: "5px",
};

export const styledAppBox = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};

export const styledIcon = {
  size: "large",
  ariaLabel: "account of current user",
  ariaControls: "menu-appbar",
  ariaHaspopup: "true",

  color: "inherit",
};
export const styledLink = {
  textDecoration: "none",
  color: "white",
};

export const styledAuthBox = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
};

export const styledAuthButton = { my: 2, color: "white", display: "block" };
export const styledMenu = {
  mt: "45px",
  id: "menu-appbar",

  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },

  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};
