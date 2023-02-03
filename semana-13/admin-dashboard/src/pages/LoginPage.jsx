import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const handleClickLogin = () => {
    setUser(true);
    navigate("/");
  };

  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={handleClickLogin}>Logear</button>
      <br />
      <br />
      <Link to="/register">Registrar</Link>
    </>
  );
};

export default LoginPage;
