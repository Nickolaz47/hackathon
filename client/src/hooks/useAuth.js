// Hooks
import { useState, useEffect, useContext } from "react";
// Contexts
import { UserContext } from "../contexts/UserContext";
import { usersUrl, requestConfig } from "../utils/config";
import axios from "axios";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { setUser } = useContext(UserContext);

  //   Avoiding memory leak
  const [cancelled, setCancelled] = useState(false);
  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const register = async (data) => {
    const config = requestConfig("post", data)
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const registeredUser = await axios(`${usersUrl}/register`, config);

      setUser(registeredUser.data);
      localStorage.setItem("user", JSON.stringify(registeredUser.data));

      setLoading(false);
    } catch (err) {
      const response = await err.response;
      const errorData = await response.data;
      const firstError = await errorData.errors[0];

      setLoading(false);
      setError(firstError);
    }
  };

  const login = async (data) => {
    const config = requestConfig("post", data)
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const loggedUser = await axios(`${usersUrl}/login`, config);

      setUser(loggedUser.data);
      localStorage.setItem("user", JSON.stringify(loggedUser.data));

      setLoading(false);
    } catch (err) {
      const response = await err.response;
      const errorData = await response.data;
      const firstError = await errorData.errors[0];

      setLoading(false);
      setError(firstError);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { register, login, logout, error, loading };
};
