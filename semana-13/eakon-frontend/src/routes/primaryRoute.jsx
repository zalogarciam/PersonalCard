import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import AboutUsPage from "../pages/AboutUsPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";
export const primaryRoute = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "productos",
        element: <ProductsPage />,
      },
      {
        path: "servicios",
        element: <h1>Servicios</h1>,
      },
      {
        path: "nosotros",
        element: <AboutUsPage />,
      },
      {
        path: "contacto",
        element: <ContactPage />,
      },
    ],
  },
]);
