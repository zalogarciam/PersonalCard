import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleClickLogin = () => {
    setUser(true);
    navigate('/');
  };

  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={handleClickLogin}>Logear</button>
    </>
  );
};

export default LoginPage;