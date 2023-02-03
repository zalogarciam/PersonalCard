import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
    </>
  );
};

export default LoginPage;
