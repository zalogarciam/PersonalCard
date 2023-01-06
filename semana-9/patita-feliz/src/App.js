import logo from "./logo.svg";
import "./App.css";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import Appointments from "./pages/Appointmets";

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
      <Header company={company} />
      <main>
        <Appointments />
      </main>
      <Footer credits={credits} />{" "}
    </>
  );
}

export default App;
