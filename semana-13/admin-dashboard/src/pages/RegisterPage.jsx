import { useState } from "react";

const RegisterPage = () => {
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

  const handleSubmitCreateUser = (e) => {
    e.preventDefault();
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
    </>
  );
};

export default RegisterPage;
