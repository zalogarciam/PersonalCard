import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const AuthValidation = () => {

  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user === false) {
      navigate('/login');
    }
  }, [user]);

  return (<Outlet />);
}

export default AuthValidation;