import logo from "./logo.svg";
import "./App.css";
import Header from "./components/sections/Header";

function App() {
  const company = {
    name: "Patita Feliz",
    slogan: "La mejor veterinaria del Peru 🐶",
  };
  return <Header company={company} />;
}

export default App;
