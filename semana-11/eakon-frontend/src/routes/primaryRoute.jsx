import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../pages/HomePage";

export const primaryRoute = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "productos",
        element: <h1>Productos</h1>,
      },
      {
        path: "servicios",
        element: <h1>Servicios</h1>,
      },
      {
        path: "nosotros",
        element: <h1>Nosotros</h1>,
      },
      {
        path: "contacto",
        element: <h1>Contacto</h1>,
      },
    ],
  },
]);
