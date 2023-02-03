import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase";

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;

  const handleChangeLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitReadUser = async (e) => {
    e.preventDefault();
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmitReadUser}>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={handleChangeLoginForm}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangeLoginForm}
        />
        <br />
        <br />
        <input type="submit" value="Iniciar sesión" />
      </form>
      <br />
    </>
  );
};

export default LoginPage;
