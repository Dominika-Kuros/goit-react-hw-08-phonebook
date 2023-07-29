import { Outlet } from "react-router-dom";
import { MenuAppBar } from "../MenuAppBar/MenuAppBar";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <MenuAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
