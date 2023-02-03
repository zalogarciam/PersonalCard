import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { primaryRoutes } from "./routes/PrimaryRoutes";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={primaryRoutes} />
    </AuthProvider>
  );
}

export default App;
