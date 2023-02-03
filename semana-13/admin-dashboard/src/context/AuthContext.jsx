import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [user, setUser] = useState({});

  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setUser(response);
      console.log(response);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        error,
        user,
        setUser,
        createUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};