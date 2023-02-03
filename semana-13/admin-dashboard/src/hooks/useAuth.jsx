import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useUser = () => {
  return useContext(AuthContext);
};

export default useUser;
