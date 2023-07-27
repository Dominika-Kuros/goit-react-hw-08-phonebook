import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictRoute";
import { refreshUser } from "../redux/Auth/operations";
import { useAuth } from "../hooks/useAuth";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const { error } = useAuth();
  useEffect(() => {
    document.title = "Phonebook";
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing</p>
  ) : (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Register />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactPage />}
                  />
                }
              />
            </Route>
          </Routes>
        </Box>
      </Container>
    </>
  );
};
