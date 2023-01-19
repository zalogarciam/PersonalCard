import { RouterProvider } from "react-router-dom";
import "./App.css";
import { primaryRoute } from "./routes/primaryRoute";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;
