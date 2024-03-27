import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginContextProvider } from "./context/Login";
import HomePage from "./pages/HomePage";
import "./styles/index.scss";
import Layout from "./layout/Layout";
import DashBoard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "HomePage",
        element: <HomePage />,
      },
      {
        path: "LoginPage",
        element: <LoginPage />,
      },
      {
        path: "RegistrationPage",
        element: <RegistrationPage />,
      },
      {
        path: "DashBoard",
        element: <DashBoard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginContextProvider>
      <RouterProvider router={router} />
    </LoginContextProvider>
  </React.StrictMode>
);
