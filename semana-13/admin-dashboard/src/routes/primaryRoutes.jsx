import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AuthValidation from "./AuthValidation";

export const primaryRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: '/',
        element: <AuthValidation />,
        children: [
          {
            index: true,
            element: <HomePage />
          }
        ]
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]);