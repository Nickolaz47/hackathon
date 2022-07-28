// Hooks
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// Contexts
import { UserContext } from "../contexts/UserContext";

import axios from "axios";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const url = "http://localhost:8080/api/users";

  //   Avoiding memory leak
  const [cancelled, setCancelled] = useState(false);
  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const register = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const registeredUser = await axios.post(`${url}/register`, data);

      setUser(registeredUser.data);
      localStorage.setItem("user", JSON.stringify(registeredUser.data));

      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      const response = await err.response;
      const errorData = await response.data;
      const firstError = await errorData.errors[0];

      setLoading(false);
      setError(firstError);
    }
  };

  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const loggedUser = await axios.post(`${url}/login`, data);

      setUser(loggedUser.data);
      localStorage.setItem("user", JSON.stringify(loggedUser.data));

      setLoading(false);
      navigate("/dashboard");
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
    navigate("/login");
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { register, login, logout, error, loading };
};
