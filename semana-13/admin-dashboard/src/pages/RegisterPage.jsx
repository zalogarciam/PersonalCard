import { useState } from "react";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const { loading, createUser } = useAuth();

  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = registrationForm;

  const handleChangeRegistrationForm = (e) => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCreateUser = async (e) => {
    e.preventDefault();
    await createUser(email, password);
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <form onSubmit={handleSubmitCreateUser}>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={handleChangeRegistrationForm}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangeRegistrationForm}
        />
        <br />
        <br />
        <input type="submit" value="Registrar" />
      </form>
      <br />
      {loading && <span>Cargando...</span>}
    </>
  );
};

export default RegisterPage;
