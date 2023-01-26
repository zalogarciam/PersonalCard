import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "5rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default PrimaryLayout;
