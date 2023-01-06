import logo from "./logo.svg";
import "./App.css";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

function App() {
  const company = {
    name: "Patita Feliz",
    slogan: "La mejor veterinaria del Peru 🐶",
  };

  const credits = {
    author: "Gonzalo",
    year: "2023",
  };

  return (
    <>
      <Header company={company} />;<Footer credits={credits}></Footer>
    </>
  );
}

export default App;
