import { Outlet } from "react-router-dom";
import { MenuAppBar } from "../MenuAppBar/MenuAppBar";
import { Suspense } from "react";
import { Container } from "@mui/material";
import { styledContainer } from "./LayoutStyled";

export const Layout = () => {
  return (
    <Container sx={styledContainer}>
      <MenuAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
