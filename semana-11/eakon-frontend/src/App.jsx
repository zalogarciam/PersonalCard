import { RouterProvider } from "react-router-dom";
import "./App.css";
import { primaryRoute } from "./routes/primaryRoute";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  console.log(import.meta.env.VITE_EAKON_CMS_API_URL);

  return (
    <Provider store={store}>
      <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;
